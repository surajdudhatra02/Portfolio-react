import { useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground";
import { experiences } from "@/data/data";

const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState(null);
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

    const element = document.getElementById("experience");
    if (element) {
      observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Current":
        return "from-green-500/20 to-emerald-500/20 border-green-500/30";
      case "Completed":
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
      default:
        return "from-gray-500/20 to-gray-600/20 border-gray-500/30";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Full-time":
        return "💼";
      case "Freelance":
        return "🚀";
      case "Internship":
        return "🎓";
      default:
        return "💻";
    }
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <ParticleBackground />
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

      <div className="container px-4 md:px-6 lg:px-8 mx-auto relative z-10 max-w-6xl">
        {/* Header Section */}
        <div
          className={`flex flex-col items-center justify-center space-y-6 text-center transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {/* Section badge */}
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full">
              <span className="text-blue-400 text-sm font-medium">
                📈 Professional Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <p className="max-w-[600px] text-lg md:text-xl text-gray-300 leading-relaxed">
              My professional journey through various roles and projects,
              building expertise in modern web technologies
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredExp(index)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-500/50 to-purple-500/50 hidden lg:block" />

              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-900 hidden lg:block" />

              {/* Experience Card */}
              <div
                className={`relative lg:ml-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-xl p-6 md:p-8 transition-all duration-300 transform ${
                  hoveredExp === index
                    ? "border-blue-500/50 bg-gradient-to-br from-gray-800/80 to-gray-900/80 scale-105 shadow-lg shadow-blue-500/20"
                    : "border-gray-700/50 hover:border-gray-600/50 hover:scale-102"
                }`}
              >
                {/* Outer glow effect */}
                <div
                  className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    hoveredExp === index
                      ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl scale-110"
                      : "bg-transparent"
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl">
                          {getCategoryIcon(exp.category)}
                        </span>
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(
                            exp.status
                          )}`}
                        >
                          {exp.status}
                        </div>
                      </div>

                      <h3
                        className={`text-xl md:text-2xl font-bold mb-2 transition-all duration-300 ${
                          hoveredExp === index ? "text-blue-400" : "text-white"
                        }`}
                      >
                        {exp.title}
                      </h3>

                      <h4 className="text-lg text-gray-300 mb-2">
                        {exp.company}
                      </h4>

                      <p className="text-gray-400 text-sm mb-4 lg:mb-0">
                        {exp.duration}
                      </p>
                    </div>

                    {/* Link Button */}
                    {exp.link && (
                      <div className="lg:ml-6">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 transform ${
                            hoveredExp === index
                              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 scale-105"
                              : "bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:border-gray-500"
                          }`}
                        >
                          {/* <span>Cerificate</span> */}
                          <svg
                            className="ml-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="space-y-3">
                    {exp.description.map((point, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start space-x-3 text-gray-300 transition-all duration-300 ${
                          hoveredExp === index ? "text-gray-200" : ""
                        }`}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-sm md:text-base leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
