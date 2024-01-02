import React from 'react'
import { PremiumSponsor,Navbar,Timer,Hero,
        Map, Gallery,Sponsor,Footer} from '../components'
const MainPage = () => {
  return (
    <div>
        {/* <PremiumSponsor/> */}
        <Navbar/>
        <Timer/>
        <Hero/>
        <Map/>
        <Gallery/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}

export default MainPage