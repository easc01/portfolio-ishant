import About from "./components/About"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { ScrollProvider } from "./contexts/ScrollContext"

function App() {
  return (
    <ScrollProvider>
      <div className="bg-black text-white font-poppins relative">
        <NavBar />
        <div className="mx-4 md:mx-24 lg:mx-32 border-brown-white">
          <HeroSection />
          <About />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
      <Footer />
    </ScrollProvider>
  )
}

export default App;
