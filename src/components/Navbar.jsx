  import React, { useState } from 'react';

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    };

    return (
      <div className='sticky top-0 z-50'>
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className=' flex justify-between items-center'>
              <div className='md:hidden mx-5'>
                <h1 className='text-black font-semibold text-xl dark:text-white'>CAMPUS PROJECT</h1>
              </div>
            <div className="hidden md:flex container items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
              <a href="/" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Campus Project</a>
              <a href="/rsvp" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">RSVP</a>
              <a href="#Venue" onClick={() => scrollToSection('map')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Venue</a>
              <a href="#Contact" onClick={() => scrollToSection('footer')} className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</a>
              <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Our Team</a>
            </div>
          {/* MOBILE */}
          <div className="md:hidden p-2 flex justify-end">
            <button onClick={handleMenuClick}>
              <img
                src="https://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
                className='w-10 h-10 dar:filter dark:invert '
                alt="hamburger"
                />
            </button>
          </div>
          </div>
          {isMenuOpen && (
            <div className='md:hidden flex flex-col items-center text-center text-black dark:text-white'>
              <a href="/" className="md:p-4 py-2 block hover:bg-blue-500">Campus Project</a>
              <a href="/rsvp" className="md:p-4 py-2 block hover:bg-blue-500">RSVP</a>
              <a href="#Venue" onClick={() => scrollToSection('map')} className="md:p-4 py-2 block hover:bg-blue-500">Venue</a>
              <a href="#Contact" onClick={() => scrollToSection('footer')} className="md:p-4 py-2 block hover:bg-blue-500">Contact Us</a>
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">Our Team</a>
            </div>
          )}
        </nav>
      </div>
    );
  };

  export default Navbar;
