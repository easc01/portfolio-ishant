import About from "./components/About"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="bg-black text-white">
      <NavBar />
      <div className="mx-4 md:mx-24 lg:mx-32  border-brown-white">
        <HeroSection />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App;
