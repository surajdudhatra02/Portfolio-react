import { useState } from "react";

const ProjectCard = ({
  imageUrl,
  title,
  description,
  url,
  tech = [],
  featured = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
          isHovered
            ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl scale-105"
            : "bg-transparent"
        }`}
      ></div>

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">
          Featured
        </div>
      )}

      {/* Main card */}
      <div
        className={`relative h-full bg-gray-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 transform ${
          isHovered
            ? "border-cyan-400/50 scale-105 shadow-2xl shadow-cyan-500/25"
            : "border-gray-700 hover:border-gray-600"
        }`}
      >
        {/* Image container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Gradient overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-500 ${
              isHovered ? "opacity-70" : "opacity-40"
            }`}
          ></div>

          {/* Hover overlay with link */}
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <svg
                  className="w-4 h-4"
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
                View Project
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3
            className={`text-xl font-bold transition-all duration-300 ${
              isHovered
                ? "text-cyan-400"
                : "text-white group-hover:text-cyan-400"
            }`}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>

          {/* Tech stack */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tech.map((technology, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    isHovered
                      ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "bg-gray-800 text-gray-400 border border-gray-700"
                  }`}
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          {/* Bottom section */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Available</span>
            </div>

            {url && (
              <div className="flex items-center space-x-1">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-xs text-gray-500">GitHub</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
