import { Canvas, useFrame } from "@react-three/fiber";
import { useRef,useMemo } from "react";
import * as THREE from "three";

function FloatingThreads() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.05;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
  });

  const lines = useMemo(() => {
    const temp = [];

    for (let i = 0; i < 40; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
        new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
      ]);

      const points = curve.getPoints(50);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);

      temp.push(
        <line key={i} geometry={geometry}>
          <lineBasicMaterial
            color={i % 2 === 0 ? "#facc15" : "#f472b6"}
            transparent
            opacity={0.6}
          />
        </line>
      );
    }

    return temp;
  }, []);

  return <group ref={groupRef}>{lines}</group>;
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      <Canvas className="absolute inset-0">
      <FloatingThreads />
      </Canvas>

      <div className="relative z-10 text-white">
        <h2 className="text-6xl font-bold">
       Where Threads Tell Stories
        </h2>
      </div>

    </section>
  );
}
