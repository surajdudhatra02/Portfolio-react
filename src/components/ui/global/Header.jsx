// import CodeIcon from "@/components/icons/CodeIcon"
import { Code2Icon } from "lucide-react"

export const Header = () => {
    return (
        <header className="px-4 h-16 flex flex-wrap items-center lg:px-6 sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-white/10">
            <div className="flex items-center">
                <Code2Icon size={24} className="text-black" />
                <span className="text-md font-semibold text-zinc-800 ml-3">
                    Portfolio
                </span>
            </div>

            <nav className="ml-auto flex flex-wrap gap-4 sm:gap-6">
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#home">Home</a>
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#about">About Me</a>
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#skills">Skills</a>
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#projects">Projects</a>
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#experience">Experience</a>
                </div>
                <div className="text-sm font-medium hover:underline underline-offset-4">
                    <a href="#contact">Contact</a>
                </div>
            </nav>
        </header>
    );
};
