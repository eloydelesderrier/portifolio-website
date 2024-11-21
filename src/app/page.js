import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import EmailSection from "@/components/EmailSection";


export default function Home() {
  
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4"> 
          <HeroSection />
          <AboutSection/>
          <Skills/>
          <ProjectSection/>
          <EmailSection/>
        </div>
      </main>
  );
}
