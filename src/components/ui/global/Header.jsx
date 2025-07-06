import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);

    // Smooth scroll to section
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 64; // Height of fixed header (h-16 = 64px)
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);

    // Scroll to hero section (top of page)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50"
          : "bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
          >
            <div className="relative">
              <Code2
                size={28}
                className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300"
              />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Suraj Dudhatra
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="absolute inset-0 bg-gray-800/50 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100 border-t border-gray-800/50"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <span className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span>{item.label}</span>
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
