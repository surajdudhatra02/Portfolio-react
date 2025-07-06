import { useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground";
import { skills } from "@/data/data";

const SkillSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <ParticleBackground count={30} />
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />

      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10">
        {/* Header Section */}
        <div
          className={`flex flex-col items-center justify-center space-y-6 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {/* Section badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-medium">
                💻 Technical Skills
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>

            <p className="max-w-[600px] text-lg md:text-xl text-gray-300 leading-relaxed">
              Here are some of the technologies I work with to build modern,
              scalable applications
            </p>
          </div>
        </div>

        {/* Skills Grid - Mobile Optimized */}
        <div className="mx-auto grid mt-12 max-w-6xl items-center gap-4 grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center space-y-2 sm:space-y-3 group transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    hoveredSkill === index
                      ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg scale-125"
                      : "bg-transparent"
                  }`}
                ></div>

                {/* Skill icon container - Mobile optimized */}
                <div
                  className={`relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full p-2 sm:p-3 transition-all duration-300 border-2 transform ${
                    hoveredSkill === index
                      ? "border-cyan-400 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm scale-110 shadow-xl shadow-cyan-500/25"
                      : "border-gray-700 bg-gray-800/50 hover:border-gray-600 group-hover:scale-105"
                  }`}
                >
                  <img
                    src={skill.src}
                    width="56"
                    height="56"
                    alt={skill.name}
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>

              <div className="text-center space-y-1">
                <span
                  className={`text-xs sm:text-sm font-medium transition-all duration-300 block leading-tight ${
                    hoveredSkill === index
                      ? "text-cyan-400 transform scale-105"
                      : "text-gray-300 group-hover:text-white"
                  }`}
                >
                  {skill.name}
                </span>
                <span
                  className={`text-xs transition-all duration-300 hidden md:block ${
                    hoveredSkill === index
                      ? "text-blue-400 opacity-100"
                      : "text-gray-500 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div
          className={`flex flex-col items-center mt-16 space-y-6 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Stats or additional info */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Constantly learning and exploring new technologies
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
