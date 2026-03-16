import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Benefits from "./components/Benefits"
import Drinks from "./components/Drinks"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Benefits />
      <Drinks />
      <About />
      <Footer />
    </div>
  )
}

export default App