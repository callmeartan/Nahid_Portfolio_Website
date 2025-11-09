import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Education } from "../components/education";
import { Footer } from "../components/footer";
import { Contact } from "../components/contact";
import { HireMe } from "../components/hire-me";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Main Content Sections */}
        <div className="relative overflow-hidden">
          {/* Skills Section */}
          <Skills />

          {/* Why Hire Me? Section */}
          <HireMe />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Education Section */}
          <Education />
          
          {/* Contact Section */}
          <Contact />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
