import React, { Suspense, useMemo, useRef, useEffect, useState, useCallback } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, RefreshCw, AlertCircle } from 'lucide-react';

// URL for the 3D PCB Model in the public directory
const MODEL_URL = '/models/PCB_3D_Model.glb';

/**
 * 3D SBC Model Component
 * Preserves the original GLB geometry, components, green PCB color, and materials.
 * The board is maintained UPRIGHT, aligned with the world's Y-axis.
 * Centers geometry at (0, 0, 0) via Box3 and calculates optimal camera distance
 * to ensure complete visibility (top, bottom, connectors, edges) at all 3D tilt angles.
 */
function Model({ controlsRef, onDefaultPositionCalculated }) {
  const { scene } = useGLTF(MODEL_URL);
  const { camera, size } = useThree();
  const isInitialized = useRef(false);

  // 1. Calculate bounding box using Three.js Box3 and Vector3 & center model at (0, 0, 0)
  // Board is kept UPRIGHT along the world Y-axis (height = 1.90, width = 1.34, thickness = 0.52)
  const { centeredScene, bounds } = useMemo(() => {
    const cloned = scene.clone(true);

    // Compute bounding box of raw model
    const rawBox = new THREE.Box3().setFromObject(cloned);
    const rawCenter = new THREE.Vector3();
    rawBox.getCenter(rawCenter);

    // Position cloned model so its geometric center is exactly at (0, 0, 0)
    cloned.position.set(-rawCenter.x, -rawCenter.y, -rawCenter.z);
    cloned.rotation.set(0, 0, 0);
    cloned.updateMatrixWorld(true);

    // Compute centered bounding box and bounding sphere
    const centeredBox = new THREE.Box3().setFromObject(cloned);
    const sphere = centeredBox.getBoundingSphere(new THREE.Sphere());
    const centeredSize = new THREE.Vector3();
    centeredBox.getSize(centeredSize);

    return {
      centeredScene: cloned,
      bounds: {
        box: centeredBox,
        size: centeredSize,
        center: sphere.center,
        radius: sphere.radius,
      },
    };
  }, [scene]);

  // 2. Automatically fit camera distance & frustum based on bounding dimensions, FOV, and canvas aspect ratio
  useEffect(() => {
    if (!bounds || !camera || !size.height) return;

    const { radius } = bounds;
    const fov = camera.fov || 38;
    const fovRad = THREE.MathUtils.degToRad(fov);
    const aspect = size.width / Math.max(size.height, 1);

    // Vertical distance needed to fit bounding sphere
    const distV = radius / Math.sin(fovRad / 2);

    // Horizontal distance needed to fit bounding sphere accounting for canvas aspect ratio
    const hFovHalf = Math.atan(aspect * Math.tan(fovRad / 2));
    const distH = radius / Math.sin(hFovHalf);

    // Generous padding multiplier (1.38) guarantees ~30-35% comfortable breathing room
    // on all sides so the upright board, all top/bottom edge connectors, and pins are completely visible
    // and never clipped by the canvas viewport boundary during full 360° rotation and vertical tilting.
    const paddingMultiplier = 1.38;
    const requiredDistance = Math.max(distV, distH) * paddingMultiplier;

    // Natural 3/4 isometric perspective for upright board:
    // Polar angle 74° (elevation 16° above horizon), Azimuth 32°
    const phi = THREE.MathUtils.degToRad(74);
    const theta = THREE.MathUtils.degToRad(32);
    const threeQuarterDir = new THREE.Vector3(
      Math.sin(phi) * Math.sin(theta),
      Math.cos(phi),
      Math.sin(phi) * Math.cos(theta)
    ).normalize();

    const targetPos = new THREE.Vector3(
      threeQuarterDir.x * requiredDistance,
      threeQuarterDir.y * requiredDistance,
      threeQuarterDir.z * requiredDistance
    );

    if (onDefaultPositionCalculated) {
      onDefaultPositionCalculated(targetPos);
    }

    if (!isInitialized.current) {
      // Initial mount: set camera to the natural upright 3/4 angle
      camera.position.copy(targetPos);
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      if (controlsRef?.current) {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.minDistance = requiredDistance * 0.55;
        controlsRef.current.maxDistance = requiredDistance * 2.2;
        controlsRef.current.update();
      }
      isInitialized.current = true;
    } else {
      // On canvas resize: maintain current orbit direction but adjust distance proportionally to prevent clipping
      const currentDir = camera.position.clone().normalize();
      const dir = currentDir.lengthSq() > 0.05 ? currentDir : threeQuarterDir;
      camera.position.set(
        dir.x * requiredDistance,
        dir.y * requiredDistance,
        dir.z * requiredDistance
      );
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();

      if (controlsRef?.current) {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.minDistance = requiredDistance * 0.55;
        controlsRef.current.maxDistance = requiredDistance * 2.2;
        controlsRef.current.update();
      }
    }
  }, [bounds, camera, size.width, size.height, controlsRef, onDefaultPositionCalculated]);

  return <primitive object={centeredScene} />;
}

/**
 * CameraController
 * Manages smooth animated transitions back to default upright 3/4 orientation on reset,
 * and attaches interaction listeners to pause autoRotate while dragging and gently resume when idle.
 */
function CameraController({ controlsRef, resetTrigger, defaultPosition, onResetComplete }) {
  const { camera } = useThree();
  const isResetting = useRef(false);
  const targetPos = useRef(new THREE.Vector3());

  // Listen to controls user interaction: pause autoRotate on drag, resume after 1.8s idle
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    let resumeTimer = null;

    const handleStart = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      controls.autoRotate = false;
    };

    const handleEnd = () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => {
        if (!isResetting.current) {
          controls.autoRotate = true;
        }
      }, 1800);
    };

    controls.addEventListener('start', handleStart);
    controls.addEventListener('end', handleEnd);

    return () => {
      if (resumeTimer) clearTimeout(resumeTimer);
      controls.removeEventListener('start', handleStart);
      controls.removeEventListener('end', handleEnd);
    };
  }, [controlsRef]);

  // Handle reset trigger
  useEffect(() => {
    if (resetTrigger > 0 && defaultPosition) {
      targetPos.current.copy(defaultPosition);
      isResetting.current = true;
      if (controlsRef?.current) {
        controlsRef.current.autoRotate = false;
      }
    }
  }, [resetTrigger, defaultPosition, controlsRef]);

  // Smooth lerp back to upright default orientation
  useFrame((_, delta) => {
    if (!isResetting.current || !defaultPosition) return;

    const step = 1 - Math.exp(-8 * delta);
    camera.position.lerp(targetPos.current, step);
    camera.lookAt(0, 0, 0);

    if (controlsRef?.current) {
      controlsRef.current.target.lerp(new THREE.Vector3(0, 0, 0), step);
      controlsRef.current.update();
    }

    if (camera.position.distanceTo(targetPos.current) < 0.02) {
      camera.position.copy(targetPos.current);
      if (controlsRef?.current) {
        controlsRef.current.target.set(0, 0, 0);
        controlsRef.current.update();
        controlsRef.current.autoRotate = true;
      }
      isResetting.current = false;
      if (onResetComplete) onResetComplete();
    }
  });

  return null;
}

// Preload the GLB model for instant loading
useGLTF.preload(MODEL_URL);

/**
 * Loading Fallback displayed while model assets stream in
 */
function ModelLoadingFallback() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent text-center p-6 select-none z-10 pointer-events-none">
      {/* Outer pulsing ring */}
      <div className="relative flex items-center justify-center mb-5">
        <div className="w-20 h-20 rounded-full border-2 border-[#42D9F5]/30 border-t-[#3478F6] animate-spin" />
        <div className="absolute w-12 h-12 rounded-full border border-[#3478F6]/30 border-b-[#42D9F5] animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
        <div className="absolute p-2.5 rounded-full bg-[#17264D]/90 border border-white/10 text-[#42D9F5] shadow-lg shadow-black/40">
          <Cpu className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      <div className="flex items-center gap-2 mb-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#42D9F5] animate-ping" />
        <span className="text-xs font-mono font-bold tracking-wider text-white uppercase">
          Initializing 3D Silicon Core
        </span>
      </div>

      <p className="text-[11px] font-mono text-white/60 max-w-[220px]">
        Loading PCB geometry &amp; materials...
      </p>

      {/* Cyber progress indicator bar */}
      <div className="w-36 h-1 mt-4 bg-[#17264D] rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#42D9F5] to-[#3478F6] rounded-full animate-pulse w-3/4" />
      </div>
    </div>
  );
}

/**
 * Error Boundary to catch any 3D/WebGL rendering exceptions gracefully
 */
class ModelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D PCB Model rendering error:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#101936]/90 text-center p-6 z-10 shadow-lg">
          <img
            src="/images/aiegx-hardware-som-hd.jpg"
            alt="AIEGX embedded hardware platform"
            className="absolute inset-0 h-full w-full object-contain opacity-25"
          />
          <div className="relative z-10 p-3 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 mb-3 shadow-lg shadow-red-500/10">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h4 className="relative z-10 text-xs font-mono font-bold text-white mb-1 uppercase tracking-wider">
            3D Hardware Canvas Error
          </h4>
          <p className="relative z-10 text-[11px] text-white/80 max-w-[220px] mb-4">
            Unable to initialize WebGL context or load the PCB 3D model.
          </p>
          <button
            onClick={this.handleRetry}
            className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono text-[#42D9F5] bg-[#17264D] border border-white/10 hover:bg-[#17264D]/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#42D9F5]"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Model</span>
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * PCBModel - Main interactive 3D Hero Component
 * Renders the actual PCB GLB model with Three.js / React Three Fiber.
 * Keeps the model upright along the world Y-axis while providing unrestricted,
 * controlled 3D rotation, tilting, inspection, and smooth reset.
 */
export default function PCBModel() {
  const controlsRef = useRef(null);
  const [defaultPosition, setDefaultPosition] = useState(null);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  ));

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleDefaultPositionCalculated = useCallback((pos) => {
    setDefaultPosition(pos);
  }, []);

  const handleResetView = useCallback((e) => {
    if (e) e.stopPropagation();
    setResetTrigger((prev) => prev + 1);
  }, []);

  return (
    <div 
      className="relative w-full h-full bg-transparent select-none overflow-visible group"
      onDoubleClick={handleResetView}
      title="Drag to inspect in 3D (horizontal rotation & vertical tilt)"
    >
      {/* Interactive 3D Canvas */}
      <ModelErrorBoundary>
        <Suspense fallback={<ModelLoadingFallback />}>
          <Canvas
            camera={{ position: [2.61, 1.41, 4.18], fov: 38, near: 0.1, far: 100 }}
            dpr={[1, 1.5]}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: 'high-performance',
            }}
            className="w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Soft Ambient Light for balanced overall visibility */}
            <ambientLight intensity={1.4} />

            {/* Main Key Directional Light from front-top-right to cast crisp shadows */}
            <directionalLight 
              position={[5, 6, 6]} 
              intensity={2.2} 
              color="#ffffff" 
            />

            {/* Back Fill Directional Light to illuminate connectors & back side */}
            <directionalLight 
              position={[-5, -4, -6]} 
              intensity={1.0} 
              color="#b0c4de" 
            />

            {/* Top Fill Directional Light for top edge connectors */}
            <directionalLight 
              position={[0, 8, 2]} 
              intensity={1.2} 
              color="#ffffff" 
            />

            {/* Bottom Fill Directional Light for bottom pins/headers */}
            <directionalLight 
              position={[0, -8, 2]} 
              intensity={0.8} 
              color="#b0c4de" 
            />

            {/* Subtle Cyan Accent Light reflecting futuristic Aiegx brand identity */}
            <pointLight 
              position={[-4, 2, 4]} 
              intensity={2.2} 
              color="#42D9F5" 
              distance={15} 
              decay={2}
            />

            {/* Subtle Deep Blue Fill Point Light for cyber-metallic contrast */}
            <pointLight 
              position={[4, -2, 4]} 
              intensity={1.8} 
              color="#3478F6" 
              distance={12} 
              decay={2}
            />

            {/* Sky / Ground hemisphere bounce tuned for dark navy / icy blue background */}
            <hemisphereLight 
              args={['#e0f2fe', '#0b1329', 0.8]} 
            />

            {/* The Upright 3D Model with dynamic bounding-box auto-fitting & camera distance calculation */}
            <Model 
              controlsRef={controlsRef} 
              onDefaultPositionCalculated={handleDefaultPositionCalculated}
            />

            {/* Camera controller managing smooth reset & autoRotate pause/resume */}
            <CameraController 
              controlsRef={controlsRef} 
              resetTrigger={resetTrigger} 
              defaultPosition={defaultPosition}
            />

            {/* Orbit Controls with 360° horizontal rotation and vertical tilt */}
            <OrbitControls
              ref={controlsRef}
              makeDefault
              autoRotate={!prefersReducedMotion}
              autoRotateSpeed={0.45}
              enablePan={false}
              enableZoom={true}
              minPolarAngle={0.08}
              maxPolarAngle={Math.PI - 0.08}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
        </Suspense>
      </ModelErrorBoundary>
    </div>
  );
}
