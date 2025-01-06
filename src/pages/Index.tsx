import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import {ProjectsSection} from "../components/Projects";
// import PersonalInterests from "../components/PersonalInterests";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import {PersonalInterestsSection} from "@/components/PersonalInterests.tsx";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <ProjectsSection />
      <PersonalInterestsSection/>
        <Contact/>
        <Footer/>

    </div>
  );
};

export default Index;