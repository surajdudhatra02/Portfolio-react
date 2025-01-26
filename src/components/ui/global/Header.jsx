import { useState } from "react";
import { Code2Icon, Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="px-4 h-16 flex items-center justify-between md:px-6 sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/10">
      <div className="flex items-center">
        <Code2Icon size={24} className="text-black" />
        <span className="text-md font-semibold text-zinc-800 ml-3">
          Portfolio
        </span>
      </div>

      <button
        className="md:hidden text-zinc-800 focus:outline-none bg-transparent"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`md:flex flex-col md:flex-row gap-4 sm:gap-6 items-center absolute md:static top-16 right-0 w-full md:w-auto bg-white md:bg-transparent transition-transform duration-300 ease-in-out md:translate-x-0 border-t md:border-t-0 backdrop-blur-lg bg-white/90 border-white/10 ${isMenuOpen ? "translate-x-0 block" : "translate-x-full hidden"
          } flex-col text-right pr-4`}
      >
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#home" onClick={handleLinkClick}>Home</a>
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#about" onClick={handleLinkClick}>About Me</a>
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </div>
      </nav>
    </header>
  );
};
