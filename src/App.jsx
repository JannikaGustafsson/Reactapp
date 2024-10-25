import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavbarLeft from './components/NavbarLeft'
import NavbarRight from './components/NavbarRight'
import Hero from './components/Hero'
import FAQ from './components/FAQ'
import Logos from './components/Logos'
import Features from './components/Features'
import Carousel from './components/Carousel'
import BulletPoints from './components/BulletPoints'
import Reviews from './components/Reviews'
import Newsletter from './components/Newsletter'



function App() {
  

  return (
    <>
     {/* <div className="wrapper"> */}
    <Header />
    <NavbarLeft />
    <NavbarRight />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Carousel />
      </main>
      <BulletPoints />
      <Reviews />
      <FAQ />
      <Newsletter />
      <Footer />
    {/* </div> */}
    </>
  )
}

export default App
