import { useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typewriterWords = [
    "Suraj",
    "React Native Developer",
    "Cross-Platform Mobile Apps Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = typewriterWords[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));

        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % typewriterWords.length,
          );
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typewriterWords]);

  return (
    <div
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden pt-16"
    >
      <ParticleBackground />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent" />

      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto relative">
            {/* Ambient Background Glow for Trendy Vibe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Content Section */}
            <div
              className={`flex flex-col items-center justify-center space-y-8 sm:space-y-10 text-center transform transition-all duration-1000 relative z-10 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Welcome Badge */}
              <div className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-full shadow-xl">
                <span className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  👋 Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.1]">
                  <span className="block mb-4 text-white">Hi, I'm Suraj</span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block min-h-[1.2em]">
                    {currentText}
                    <span className="animate-pulse text-cyan-400 font-light">
                      |
                    </span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light px-4">
                  Passionate React Native Developer crafting modern
                  cross-platform mobile and web applications with clean code and
                  innovative solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8 w-full px-4 sm:px-0">
                <a
                  href="https://drive.google.com/file/d/1dG-0cuo7N8lkhZvYyeV1tKK-JP9DE2fR/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_#06b6d4] overflow-hidden w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
                  <svg
                    className="w-5 h-5 group-hover:animate-bounce flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="whitespace-nowrap relative z-10">
                    Download CV
                  </span>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-800/80 backdrop-blur-md border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:bg-gray-700/80 w-full sm:w-auto"
                >
                  <span className="whitespace-nowrap">Let's Talk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            rgba(6, 182, 212, 0.1) 0%,
            transparent 70%
          );
        }
      `}</style>
    </div>
  );
}
