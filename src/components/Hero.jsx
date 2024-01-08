import React from 'react'
import GS from '../assets/Image/GS-1.jpg'
const Hero = () => {
  return (
    <div className='dark:bg-gray-800'>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Best place to hangout and <span className="text-blue-500 ">Party!</span></h1>
                    
                    <p className="my-6 text-gray-600 dark:text-gray-400">Prepare yourself for the ultimate good time! We will make you semester break a good vibe and goodtime, Join our party!</p>
                    
                    <a href="/rsvp" className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">RSVP NOW</a>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full rounded-lg lg:max-w-3xl" src={GS} alt="Catalogue-pana.svg"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero