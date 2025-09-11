"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, useFBX, Html, Box } from "@react-three/drei";
import * as THREE from "three";

// Error Boundary pour gérer les erreurs de chargement 3D
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Erreur dans le composant 3D:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

function FBXModel({ rotationY }: { rotationY: number }) {
  const [modelError, setModelError] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  
  const fbx = useFBX("/model.fbx");
  const { camera } = useThree();

  useEffect(() => {
    try {
      if (fbx && fbx.children.length > 0) {
        fbx.traverse((child) => {
          if ((child as THREE.Mesh).isMesh) {
            const mesh = child as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
            const material = mesh.material as THREE.Material | THREE.Material[] | undefined;
            if (Array.isArray(material)) {
              material.forEach((m) => {
                const std = m as THREE.MeshStandardMaterial;
                if (std && "metalness" in std) {
                  std.metalness = 0.2;
                  std.roughness = 0.8;
                }
              });
            } else if (material) {
              const std = material as THREE.MeshStandardMaterial;
              if (std && "metalness" in std) {
                std.metalness = 0.2;
                std.roughness = 0.8;
              }
            }
          }
        });
        setModelLoaded(true);
      }
    } catch (error) {
      console.error('Erreur lors du chargement du modèle 3D:', error);
      setModelError(true);
    }
  }, [fbx]);

  // Auto-fit scale if model is huge/tiny
  const box = new THREE.Box3().setFromObject(fbx);
  const size = new THREE.Vector3();
  box.getSize(size);
  const maxAxis = Math.max(size.x, size.y, size.z) || 1;
  const scale = 2.5 / maxAxis; // target size ~2.5 units
  fbx.scale.setScalar(scale);
  const center = new THREE.Vector3();
  box.getCenter(center);
  fbx.position.sub(center.multiplyScalar(scale));

  // Frame camera (front, slight height) and strong far
  useEffect(() => {
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const framedRadius = (sphere.radius || 1) * scale;
    const fov = THREE.MathUtils.degToRad((camera as THREE.PerspectiveCamera).fov || 40); // slightly wider angle
    const distance = framedRadius / Math.sin(fov / 2) * 70; // de-zoom x3
    const dir = new THREE.Vector3(0, 0.35, 1).normalize(); // lower height
    const target = new THREE.Vector3();
    box.getCenter(target).multiplyScalar(scale);
    (camera as THREE.PerspectiveCamera).position.copy(target.clone().add(dir.multiplyScalar(distance)));
    (camera as THREE.PerspectiveCamera).near = Math.max(distance * 0.01, 0.01);
    (camera as THREE.PerspectiveCamera).far = distance * 5000;
    (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
    camera.lookAt(target);
  }, [box, camera, scale]);

  // External rotation binding
  if (modelError) {
    // Fallback avec un modèle simple
    return (
      <group rotation-y={THREE.MathUtils.degToRad(rotationY)}>
        <Box args={[2, 1.5, 1]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#4a5568" metalness={0.2} roughness={0.8} />
        </Box>
        <Box args={[0.3, 0.3, 0.1]} position={[-0.8, 0.3, 0.5]}>
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </Box>
        <Box args={[0.3, 0.3, 0.1]} position={[0.8, 0.3, 0.5]}>
          <meshStandardMaterial color="#2d3748" metalness={0.3} roughness={0.7} />
        </Box>
        <Html center>
          <div className="text-white text-center p-2 bg-black/30 rounded text-xs">
            Version simplifiée
          </div>
        </Html>
      </group>
    );
  }
  
  if (!modelLoaded) {
    return (
      <Html center>
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
          <p className="text-sm">Chargement du modèle 3D...</p>
        </div>
      </Html>
    );
  }
  
  return <primitive object={fbx} rotation-y={THREE.MathUtils.degToRad(rotationY)} />;
}

export default function ModelViewer() {
  const [rotationDeg, setRotationDeg] = useState(0);
  const [locked, setLocked] = useState(true);
  const [active, setActive] = useState(false);
  const touchY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Activate only when section is centered
  useEffect(() => {
    const computeActive = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const tolerance = Math.min(window.innerHeight, rect.height) * 0.2;
      setActive(Math.abs(sectionCenter - viewportCenter) < tolerance);
    };
    computeActive();
    window.addEventListener("scroll", computeActive, { passive: true });
    window.addEventListener("resize", computeActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", computeActive);
      window.removeEventListener("resize", computeActive);
    };
  }, []);

  // Bind page scroll/swipe to rotation when locked
  useEffect(() => {
    const threshold = 270; // unlock when reaching threshold (down) or 0 (up)
    const maxDeg = 270;
    const rotatePerDelta = 0.2;

    const onWheel = (e: WheelEvent) => {
      if (!active) return;
      const goingDown = e.deltaY > 0;
      const shouldIntercept = (goingDown && rotationDeg < threshold) || (!goingDown && rotationDeg > 0);
      if (!shouldIntercept) {
        setLocked(false);
        return;
      }
      e.preventDefault();
      const delta = Math.abs(e.deltaY) * rotatePerDelta * (goingDown ? 1 : -1);
      const next = Math.min(maxDeg, Math.max(0, rotationDeg + delta));
      setRotationDeg(next);
      const unlocked = (goingDown && next >= threshold) || (!goingDown && next <= 0);
      setLocked(!unlocked);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!active) return;
      touchY.current = e.touches[0]?.clientY ?? null;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!active) return;
      const y = e.touches[0]?.clientY ?? null;
      if (touchY.current === null || y === null) return;
      const goingDown = (touchY.current - y) > 0;
      const shouldIntercept = (goingDown && rotationDeg < threshold) || (!goingDown && rotationDeg > 0);
      if (!shouldIntercept) {
        setLocked(false);
        touchY.current = y;
        return;
      }
      e.preventDefault();
      const delta = Math.abs(touchY.current - y) * rotatePerDelta * (goingDown ? 1 : -1);
      const next = Math.min(maxDeg, Math.max(0, rotationDeg + delta));
      setRotationDeg(next);
      const unlocked = (goingDown && next >= threshold) || (!goingDown && next <= 0);
      setLocked(!unlocked);
      touchY.current = y;
    };

    const opts: AddEventListenerOptions = { passive: false };
    window.addEventListener("wheel", onWheel, opts);
    window.addEventListener("touchstart", onTouchStart, opts);
    window.addEventListener("touchmove", onTouchMove, opts);

    if (locked && active) {
      const prev = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchmove", onTouchMove);
        document.documentElement.style.overflow = prev;
        document.body.style.overflow = "";
      };
    }

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [active, locked, rotationDeg]);


  return (
    <div ref={containerRef} className="hidden sm:block w-full h-[72vh] sm:h-[82vh] relative mb-5 pb-0">
      {/* Rotational selling points (textes par-dessus le casque), order: left, right, left */}
      {[{id:"h1",text:"Réduction des bruits inutiles",side:"left" as const},
        {id:"h3",text:"Design épuré et portable",side:"right" as const},
        {id:"h2",text:"Concentration mesurée par l'app",side:"left" as const}].map((h, i) => {
        const start = 30 * (i + 1); // Apparition à 30°, 60°, 90°
        const visible = rotationDeg >= start;
        const opacity = visible ? Math.min(1, (rotationDeg - start) / 20) : 0; // Fade in progressif sur 20°
        const sideClass = h.side === "left" ? "left-4 sm:left-10" : "right-4 sm:right-10";
        const topPercent = i === 0 ? "15%" : i === 1 ? "35%" : "55%";
        return (
          <div
            key={h.id}
            className={`pointer-events-none absolute ${sideClass} text-white text-base sm:text-lg font-bold transition-opacity duration-300 z-10`}
            style={{ 
              top: topPercent, 
              opacity: opacity,
              textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)",
              background: "rgba(0,0,0,0.3)",
              padding: "8px 12px",
              borderRadius: "8px",
              backdropFilter: "blur(4px)",
              visibility: visible ? "visible" : "hidden"
            }}
          >
            {h.text}
          </div>
        );
      })}
      <Canvas
        shadows
        camera={{ position: [6, 4.5, 6], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'none', touchAction: 'none' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 6, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Suspense fallback={
          <Html center>
            <div className="text-white text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2"></div>
              <p className="text-sm">Chargement du modèle 3D...</p>
            </div>
          </Html>
        }>
          <ErrorBoundary fallback={
            <Html center>
              <div className="text-white text-center p-4 bg-black/50 rounded-lg">
                <p className="text-sm">Modèle 3D temporairement indisponible</p>
                <p className="text-xs mt-2">Chargement d&apos;une version de secours...</p>
              </div>
            </Html>
          }>
            <FBXModel rotationY={rotationDeg} />
          </ErrorBoundary>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableDamping={false}
          makeDefault
          enabled={false}
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}


