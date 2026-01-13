import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Branding from './components/sections/Branding'
import Services from './components/sections/Services'
import ServiceBlocks from './components/sections/ServiceBlocks'
import About from './components/sections/About'
import Stats from './components/sections/Stats'
import FAQ from './components/sections/FAQ'
import Progress from './components/sections/Progress'
import CTA from './components/sections/CTA'
import LetsTalk from './components/sections/LetsTalk'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Branding />
      <Services />
      <ServiceBlocks />
      <About />
      <Stats />
      <FAQ />
      <Progress />
      <CTA />
      <LetsTalk />
      <Footer />
    </div>
  )
}

export default App
