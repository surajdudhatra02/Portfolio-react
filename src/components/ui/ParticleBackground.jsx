import React, { useEffect, useState } from "react";

const ParticleBackground = ({ count = 25 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < count; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 6,
      });
    }
    setParticles(particleArray);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float 6s ease-in-out infinite ${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
