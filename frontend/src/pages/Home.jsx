import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import NavBar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutMe";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
const Home = () => {
 
  return (
          <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
              {/* Theme Toggle */}
              <ThemeToggle></ThemeToggle>

              {/* BackGround Effect */}
              <StarBackground/>

              {/* Navbar */}
              <NavBar></NavBar>

              {/* Main Content */}
              <main>
                <HomeSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProjectSection/>
                <ContactSection/>
              </main>

              {/* Footer */}

              <Footer></Footer>
          </div>
         )
}
export default Home;