import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Lifestyle from './components/Lifestyle'
import Story from './components/Story'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Footer from './components/Footer'
import { useTheme } from './hooks/useTheme'

// Estrutura completa da landing page da Coca-Cola.
// Cada seccao vive no seu proprio componente para manter o codigo organizado.
function App() {
  // O tema e gerido aqui no topo e passado a Navbar, que mostra o botao
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Marquee />
        <Lifestyle />
        <Story />
        <Features />
        <Showcase />
      </main>
      <Footer />
    </>
  )
}

export default App
