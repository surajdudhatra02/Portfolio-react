import AboutSection from "./components/ui/global/AboutSection";
import Experience from "./components/ui/global/Experience";
import FooterSection from "./components/ui/global/FooterSection";
import { Header } from "./components/ui/global/Header";
import HeroSection from "./components/ui/global/HeroSection";
// import { HeroSection } from "./components/ui/global/HeroSection";
import ProjectSection from "./components/ui/global/ProjectSection";
import SkillSection from "./components/ui/global/SkillSection";

const App = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <Header />

      <HeroSection />

      <AboutSection />

      <SkillSection />

      <Experience />

      <ProjectSection />

      <FooterSection />
    </div>
  );
};

export default App;
