import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Nosotros from './sections/Nosotros'
import HuarseralDev from './sections/HuarseralDev'
import Experiencia from './sections/Experiencia'
import Servicios from './sections/Servicios'
import Colegios from './sections/Colegios'
import Cursos from './sections/Cursos'
import Contacto from './sections/Contacto'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <HuarseralDev />
        <Experiencia />
        <Servicios />
        <Colegios />
        <Cursos />
        <Contacto />
      </main>
      <Footer />
    </>
  )
}
