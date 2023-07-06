import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  const HeroSection = dynamic(
    () => import("./components/sections/hero/HeroSection")
  );
  const Skillset = dynamic(() => import("./components/Skillset"));
  const ProjectSection = dynamic(
    () => import("./components/sections/projects/ProjectSection")
  );
  const ContactSection = dynamic(
    () => import("./components/sections/contact/ContactSection")
  );
  const AboutSection = dynamic(
    () => import("./components/sections/about/AboutSection")
  );

  return (
    <main className="h-screen w-full overflow-y-auto">
      <Navbar />
      <div id="home" className="-translate-y-[68px] h-full flex-col">
        <HeroSection />
      </div>
      <Skillset />
      <div id="projects" className="flex flex-col">
        <ProjectSection />
      </div>
      <div id="contact" className="h-screen flex flex-col">
        <ContactSection />
      </div>
      <div id="about" className="flex flex-col">
        <AboutSection />
      </div>
    </main>
  );
}
