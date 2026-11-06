import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function FitCamera({ radius }) {
  const { camera, size } = useThree();

  useEffect(() => {
    if (!size.height) return;
    const fov = THREE.MathUtils.degToRad(camera.fov || 38);
    const aspect = size.width / Math.max(size.height, 1);
    const horizontalFov = 2 * Math.atan(aspect * Math.tan(fov / 2));
    const distance = Math.max(
      radius / Math.sin(fov / 2),
      radius / Math.sin(horizontalFov / 2),
    ) * 1.18;
    const direction = camera.position.clone().normalize();
    camera.position.copy(direction.multiplyScalar(distance));
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera, size.height, size.width, radius]);

  return null;
}

function RotatingModel({ src }) {
  const { scene } = useGLTF(src);
  const { model, radius } = useMemo(() => {
    const clone = scene.clone(true);
    const bounds = new THREE.Box3().setFromObject(clone);
    const center = bounds.getCenter(new THREE.Vector3());
    clone.position.sub(center);
    const size = bounds.getSize(new THREE.Vector3());
    const scale = 2.8 / Math.max(size.x, size.y, size.z, 0.01);
    clone.scale.setScalar(scale);
    return { model: clone, radius: bounds.getBoundingSphere(new THREE.Sphere()).radius * scale };
  }, [scene]);
  return <>
    <primitive object={model} />
    <FitCamera radius={radius} />
  </>;
}

class ViewerErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error) {
    console.error('Hero 3D model failed to render:', error);
    this.props.onError?.();
  }
  render() { return this.state.failed ? null : this.props.children; }
}

function Poster({ src, label }) {
  return <img className="model-viewer__poster" src={src} alt={label} />;
}

export default function ModelViewer({ src, label, poster, className = '' }) {
  const host = useRef(null);
  const [nearViewport, setNearViewport] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ));
  const [smallViewport, setSmallViewport] = useState(() => (
    typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches
  ));
  const [interacting, setInteracting] = useState(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const node = host.current;
    if (!node || !('IntersectionObserver' in window)) {
      setNearViewport(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setNearViewport(entry.isIntersecting);
    }, { rootMargin: '160px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  const pauseRotation = () => {
    window.clearTimeout(resumeTimer.current);
    setInteracting(true);
  };
  const resumeRotation = () => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setInteracting(false), 1500);
  };

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = (event) => setReducedMotion(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px)');
    const update = (event) => setSmallViewport(event.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return (
    <div ref={host} className={`model-viewer ${className}`} role="group" aria-label={label}>
      {!nearViewport || failed ? (
        <Poster src={poster} label={label} />
      ) : (
        <Canvas
          camera={{ position: [0, 0.8, 5], fov: 38 }}
          dpr={smallViewport ? 1 : [1, 1.15]}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
          fallback={<Poster src={poster} label={label} />}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[4, 5, 5]} intensity={2.2} />
          <directionalLight position={[-4, -2, -3]} intensity={1.1} />
          <pointLight position={[-2, 1, 2]} intensity={0.35} color="#F0A15D" distance={6} decay={2} />
          <ViewerErrorBoundary onError={() => setFailed(true)}>
            <Suspense fallback={null}><RotatingModel src={src} /></Suspense>
          </ViewerErrorBoundary>
          <OrbitControls
            enablePan={false}
            enableZoom
            minDistance={2.2}
            maxDistance={7}
            minPolarAngle={0.45}
            maxPolarAngle={2.7}
            autoRotate={!reducedMotion && !interacting}
            autoRotateSpeed={0.22}
            onStart={pauseRotation}
            onEnd={resumeRotation}
          />
        </Canvas>
      )}
    </div>
  );
}
