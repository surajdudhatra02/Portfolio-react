import { useState, useEffect } from "react";
import ParticleBackground from "../ParticleBackground";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const typewriterWords = [
    "Suraj",
    "MERN Developer",
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
            (prevIndex) => (prevIndex + 1) % typewriterWords.length
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
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Content Section */}
            <div
              className={`flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Welcome Badge */}
              <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full self-center lg:self-start">
                <span className="text-cyan-400 text-xs sm:text-sm font-medium">
                  👋 Welcome to my portfolio
                </span>
              </div>

              {/* Main Heading with Gradient */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                  <span className="block mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                    Hi, I'm
                  </span>
                  <span className="text-cyan-400 inline-block min-h-[1.2em]">
                    {currentText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-full lg:max-w-[600px] leading-relaxed px-2 sm:px-0">
                  Passionate MERN Stack Developer crafting modern web
                  applications with clean code and innovative solutions.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="https://drive.google.com/drive/folders/1y2a7CCXI1uKVDxKD7zwjvmdfKkWbpgq5?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 w-fit mx-auto sm:mx-0"
                >
                  <svg
                    className="w-4 h-4 group-hover:animate-bounce flex-shrink-0"
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
                  <span className="whitespace-nowrap">Download CV</span>
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div
              className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 order-first lg:order-last ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {/* Hero image only */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] flex items-center justify-center">
                <img
                  src="/hero.png"
                  alt="Hero"
                  className="w-full h-full object-contain"
                />
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
