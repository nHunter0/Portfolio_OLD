import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function ParticleComponent() {
  const particlesInit = useCallback(async (main) => {
    console.log(main);
    await loadFull(main);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    //Particle effect --> Not sure I like it, hmmm
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 30,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false, // enable for hover effect
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0.3,
              size: 5,
            },
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 10,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#cccccc",
          },
          links: {
            color: "#cccccc",
            distance: 100,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
            random: true,
          },
        },
        detectRetina: true,
      }}
      className="particles"
    />
  );
}

export default ParticleComponent;
