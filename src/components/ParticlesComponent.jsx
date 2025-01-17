import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initParticles();
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: false,
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.3, max: 1 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
