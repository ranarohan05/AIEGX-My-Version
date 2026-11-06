import React, { useEffect, useRef, useState } from 'react';

const LAYERS = 5;
const LAYER_GAP = 1;
const REST_TILT = 8;
const FROM = 0;
const TO = 180;
const SWEEP_SECONDS = 60;
const BOB_PIXELS = 2.5;
const DRAG_SENSITIVITY = 0.35;
const MIN_TILT = -45;
const MAX_TILT = 55;
const RESUME_DELAY_MS = 1500;

function sweepAt(phase) {
  return FROM + (TO - FROM) * (0.5 - 0.5 * Math.cos(phase));
}

export default function SpinBoard({ src, alt, height = 300, phase = 0, className = '' }) {
  const stage = useRef(null);
  const spin = useRef(null);
  const movedDuringDrag = useRef(false);
  const clickBlockTimer = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const element = stage.current;
    const board = spin.current;
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = motionQuery.matches;
    const cycleMs = SWEEP_SECONDS * 1000;
    const phaseOffset = ((phase % 4) * cycleMs) / 4;
    let yaw = 0;
    let pitch = REST_TILT;
    let targetYaw = yaw;
    let targetPitch = pitch;
    let bob = 0;
    let mode = 'float';
    let dragging = false;
    let activePointerId = null;
    let lastX = 0;
    let lastY = 0;
    let isVisible = true;
    let resumeTimer;
    let frameId = null;
    let previousFrameTime = null;
    let floatStartedAt = performance.now();
    let floatBaseYaw = 0;
    let floatBasePitch = REST_TILT;
    let bobPhase = (phase % 4) * Math.PI / 2;
    let currentWavePhase = (phaseOffset / cycleMs) * 2 * Math.PI;

    const setFloatOrigin = (time, preserveBob = true) => {
      currentWavePhase = (phaseOffset / cycleMs) * 2 * Math.PI;
      floatBaseYaw = yaw - sweepAt(currentWavePhase);
      floatStartedAt = time;
      floatBasePitch = pitch;
      if (preserveBob) {
        const normalizedBob = Math.max(-1, Math.min(1, bob / BOB_PIXELS));
        bobPhase = Math.asin(normalizedBob);
      }
      targetYaw = yaw;
      targetPitch = pitch;
      mode = 'float';
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        previousFrameTime = null;
        requestFrame();
      } else if (frameId !== null) {
        cancelAnimationFrame(frameId);
        frameId = null;
        previousFrameTime = null;
      }
    });

    const releaseCapture = (pointerId) => {
      if (pointerId === null) return;
      try {
        if (element.hasPointerCapture(pointerId)) element.releasePointerCapture(pointerId);
      } catch {
        // The browser may already have released capture after pointercancel.
      }
    };

    const scheduleResume = () => {
      clearTimeout(resumeTimer);
      mode = 'hold';
      targetYaw = yaw;
      targetPitch = pitch;
      resumeTimer = window.setTimeout(() => {
        setFloatOrigin(performance.now());
      }, RESUME_DELAY_MS);
    };

    const onPointerEnter = () => {
      if (dragging) return;
      clearTimeout(resumeTimer);
      mode = 'hover';
      targetYaw = yaw;
      targetPitch = pitch;
    };

    const onPointerLeave = () => {
      if (!dragging && mode === 'hover') scheduleResume();
    };

    const onPointerDown = (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      clearTimeout(resumeTimer);
      clearTimeout(clickBlockTimer.current);
      movedDuringDrag.current = false;
      dragging = true;
      activePointerId = event.pointerId;
      mode = 'drag';
      lastX = event.clientX;
      lastY = event.clientY;
      setIsDragging(true);
      if (event.pointerType === 'mouse') event.preventDefault();
      try {
        element.setPointerCapture(event.pointerId);
      } catch {
        // Continue tracking pointer events if capture is unavailable.
      }
    };

    const onPointerMove = (event) => {
      if (!dragging || event.pointerId !== activePointerId) return;
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      if (Math.hypot(deltaX, deltaY) > 1) movedDuringDrag.current = true;
      targetYaw += deltaX * DRAG_SENSITIVITY;
      targetPitch = Math.max(MIN_TILT, Math.min(MAX_TILT, targetPitch - deltaY * DRAG_SENSITIVITY));
      lastX = event.clientX;
      lastY = event.clientY;
    };

    const finishDrag = (event) => {
      if (!dragging || event.pointerId !== activePointerId) return;
      const pointerId = activePointerId;
      dragging = false;
      activePointerId = null;
      releaseCapture(pointerId);
      setIsDragging(false);

      if (movedDuringDrag.current) {
        clearTimeout(clickBlockTimer.current);
        clickBlockTimer.current = window.setTimeout(() => {
          movedDuringDrag.current = false;
        }, 500);
      }
      scheduleResume();
    };

    const onMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion && mode === 'float') {
        targetYaw = yaw;
        targetPitch = pitch;
      } else if (!prefersReducedMotion && mode === 'float') {
        setFloatOrigin(performance.now());
      }
    };

    const animate = (time) => {
      frameId = null;
      if (!isVisible) return;

      const deltaTime = previousFrameTime === null
        ? 0
        : Math.min((time - previousFrameTime) / 1000, 0.05);
      previousFrameTime = time;

      if (mode === 'float' && !prefersReducedMotion) {
        const elapsed = (time - floatStartedAt) % cycleMs;
        currentWavePhase = ((elapsed + phaseOffset) / cycleMs) * 2 * Math.PI;
        targetYaw = floatBaseYaw + sweepAt(currentWavePhase);
        targetPitch = floatBasePitch;
      }

      const targetBob = mode === 'float' && !prefersReducedMotion
        ? BOB_PIXELS * Math.sin(((time - floatStartedAt) / 6000) * 2 * Math.PI + bobPhase)
        : 0;
      const smoothingSeconds = dragging ? 0.045 : 0.45;
      const blend = deltaTime === 0 ? 0 : 1 - Math.exp(-deltaTime / smoothingSeconds);

      yaw += (targetYaw - yaw) * blend;
      pitch += (targetPitch - pitch) * blend;
      bob += (targetBob - bob) * (deltaTime === 0 ? 0 : 1 - Math.exp(-deltaTime / 0.55));
      board.style.transform = `translateY(${bob}px) rotateX(${pitch}deg) rotateY(${yaw}deg)`;
      requestFrame();
    };

    function requestFrame() {
      if (isVisible && frameId === null) frameId = requestAnimationFrame(animate);
    }

    element.addEventListener('pointerenter', onPointerEnter);
    element.addEventListener('pointerleave', onPointerLeave);
    element.addEventListener('pointerdown', onPointerDown);
    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerup', finishDrag);
    element.addEventListener('pointercancel', finishDrag);
    element.addEventListener('lostpointercapture', finishDrag);
    motionQuery.addEventListener('change', onMotionChange);
    observer.observe(element);
    setFloatOrigin(performance.now(), false);
    requestFrame();

    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId);
      clearTimeout(resumeTimer);
      clearTimeout(clickBlockTimer.current);
      releaseCapture(activePointerId);
      observer.disconnect();
      motionQuery.removeEventListener('change', onMotionChange);
      element.removeEventListener('pointerenter', onPointerEnter);
      element.removeEventListener('pointerleave', onPointerLeave);
      element.removeEventListener('pointerdown', onPointerDown);
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerup', finishDrag);
      element.removeEventListener('pointercancel', finishDrag);
      element.removeEventListener('lostpointercapture', finishDrag);
    };
  }, [phase]);

  return (
    <div
      ref={stage}
      className={`spin-board ${className}`}
      style={{ position: 'relative', height, perspective: 900, cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-y', userSelect: 'none' }}
      onClickCapture={(event) => {
        if (!movedDuringDrag.current) return;
        event.preventDefault();
        event.stopPropagation();
        movedDuringDrag.current = false;
        clearTimeout(clickBlockTimer.current);
      }}
    >
      <div ref={spin} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
        {Array.from({ length: LAYERS }, (_, index) => (
          <img
            key={index}
            src={src}
            alt={index === 0 ? alt : ''}
            aria-hidden={index !== 0}
            draggable={false}
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              maxWidth: '100%',
              maxHeight: '94%',
              transform: `translate(-50%, -50%) translateZ(${(index - (LAYERS - 1) / 2) * LAYER_GAP}px)`,
              filter: index === 0 || index === LAYERS - 1 ? 'contrast(1.06) saturate(1.1)' : 'brightness(.5)',
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{ position: 'absolute', bottom: 10, left: '20%', width: '60%', height: 18, background: 'radial-gradient(ellipse at center, rgba(0,0,0,.3), transparent 70%)', filter: 'blur(5px)', pointerEvents: 'none' }}
      />
    </div>
  );
}
