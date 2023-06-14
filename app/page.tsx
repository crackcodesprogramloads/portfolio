import dynamic from "next/dynamic";
import Navbar from "./components/navbar/Navbar";

const HeroSection = dynamic(
  () => import("./components/sections/hero/HeroSection")
);
const ProjectSection = dynamic(
  () => import("./components/sections/projects/ProjectSection")
);
const ContactSection = dynamic(
  () => import("./components/sections/contact/ContactSection")
);
const AboutSection = dynamic(
  () => import("./components/sections/about/AboutSection")
);

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll">
      <Navbar />
      <div id="home" className="-translate-y-[68px] h-full flex-col">
        <HeroSection />
      </div>
      <div id="projects" className="pt-14 flex flex-col">
        <ProjectSection />
      </div>
      <div id="contact" className="pt-14 h-full flex flex-col">
        <ContactSection />
      </div>
      <div id="about" className="pt-14 h-full flex flex-col">
        <AboutSection />
      </div>
    </main>
  );
}

{
  /* <main className="h-screen snap-y snap-proximity overflow-y-scroll">
      <Navbar />
      <div id="home" className="pt-14 h-full snap-start">
        <HeroSection />
      </div>
      <div id="projects" className="pt-14 h-full flex flex-col snap-start">
        <ProjectSection />
      </div>
      <div id="contact" className="pt-14 h-full flex flex-col snap-start">
        <ContactSection />
      </div>
      <div id="about" className="pt-14 h-full flex flex-col snap-start">
        <AboutSection />
      </div>
    </main> */
}
