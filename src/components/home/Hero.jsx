import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";

function Particles({ count = 1000 }) {
  const pointsRef = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5;
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = 0;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="white" opacity={0.9} />
    </points>
  );
}

export default function Hero() {
  return (
    <section className="hero_section">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-12 p-2">
            <div className="content">
              <h6>
                <img src="/idea.svg" alt="idea" /> Let’s Build Your Ideas
                Together
              </h6>
              <h1>
                Codeva For Innovative Software <span>Solutions</span>
              </h1>
              <p>
                We provide expert website design, development, and mobile
                application solutions for Android and IOS. Serving a diverse
                global clientele, we deliver tailored web solutions that empower
                organizations worldwide to excel in the digital age.
              </p>
              <div className="buttons">
                <a href="/about">About Codeva</a>
                <a href="/portfolio">Our Portfolio</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-12 p-2 d-lg-flex d-none align-items-center justify-content-end">
            <Canvas
              style={{
                height: "450px",
                width: "450px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              camera={{ position: [5, 5, 5], fov: 70 }}
            >
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Particles count={2000} />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
