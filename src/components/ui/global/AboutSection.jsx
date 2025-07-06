import { useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground";

export default function AboutSection() {
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

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <ParticleBackground />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 flex items-center justify-center">
        <div className="max-w-6xl text-center">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-medium">
                🚀 Get to know me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Grid */}
          <div className="items-center">
            {/* Text Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Web developer with{" "}
                  <span className="text-cyan-400 font-semibold">
                    1 year of experience
                  </span>{" "}
                  building responsive, SEO-friendly applications using React.js,
                  Next.js, and the MERN stack.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I enjoy solving complex problems, optimizing performance, and
                  continuously learning new tools and frameworks. My passion
                  lies in creating seamless user experiences with clean,
                  maintainable code.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative mt-12">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
