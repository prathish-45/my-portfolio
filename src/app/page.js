import HeroSection from "@/components/HeroSection";
import Title from "@/components/Title";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900">
      
      <HeroSection />

      <div id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <Title />
        <ProjectGrid />
      </div>
      <Skills />
      <Contact />
    </main>
  );
}