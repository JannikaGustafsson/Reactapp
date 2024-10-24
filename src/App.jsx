import './assets/css/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavbarLeft from './components/NavbarLeft'
import NavbarRight from './components/NavbarRight'
import Hero from './components/Hero'
import FAQ from './components/FAQ'



function App() {
  

  return (
    <>
     {/* <div className="wrapper"> */}
    <Header />
    <NavbarLeft />
    <NavbarRight />
      <main>
        <Hero />
      </main>
      <FAQ />
      <Footer />
    {/* </div> */}
    </>
  )
}

export default App
