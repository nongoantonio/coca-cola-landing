import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Story from './components/Story'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

// Estrutura completa da landing page da Coca-Cola.
// Cada seccao vive no seu proprio componente para manter o codigo organizado.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </>
  )
}

export default App
