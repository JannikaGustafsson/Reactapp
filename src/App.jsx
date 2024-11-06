import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/index.css'
import Header from './components/Header'
import Footer from './components/Footer'
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
    <BrowserRouter />
    {/* <Routes>
      <Route path="/">
        <Route />        
    </BrowserRouter> */}
    <Header />
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
  </>
  )
}

export default App
