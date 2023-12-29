import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Map from './components/Map'
import Gallery from './components/Gallery'
import Sponsor from './components/Sponsor'
import Premium from './components/PremiumSponsor'
import Footer from './components/Footer'
import Time from './components/Timer'
function App() {
  return (
    <>
      <div>
        <Premium/>
        <Navbar/>
        <Time/>
        {/* <h1 className='text-black my-10 text-center text-5xl font-bold'>Welcome to CampusProject, See you soon!</h1> */}
        <Hero/>
        <Map/>
        <Gallery/>
        <Sponsor/>
        <Footer/>
      </div>
    </>
  )
}

export default App
