import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ParticleBackground from "../ParticleBackground";
import { allProjects } from "@/data/data";

const ProjectSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
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

    const element = document.getElementById("projects");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleProjects(3);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <ParticleBackground />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/3 via-transparent to-transparent" />

      <div className="container px-4 md:px-6 relative z-10">
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
                🚀 Portfolio Showcase
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>

            <p className="max-w-[600px] text-lg md:text-xl text-gray-300 leading-relaxed">
              A showcase of my development journey through innovative web
              applications and creative solutions
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-7xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-16">
          {allProjects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                url={project.url}
                tech={project.tech}
                featured={project.featured}
              />
            </div>
          ))}
        </div>

        {/* Load More / Show Less Buttons */}
        <div
          className={`flex justify-center mt-16 gap-4 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {visibleProjects < allProjects.length && (
            <button
              onClick={handleLoadMore}
              className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
                View More Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}

          {visibleProjects > 3 && (
            <button
              onClick={handleShowLess}
              className="group relative px-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg
                  className="w-4 h-4 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
                Show Less
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
