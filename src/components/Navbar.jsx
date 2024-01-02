  import React, { useState } from 'react';

  const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div className='sticky top-0 z-50'>
        <nav className="bg-white shadow dark:bg-gray-800">
          <div className=' flex justify-between items-center'>
            <div className='mx-5'>
              <h1 className='text-black font-semibold text-xl dark:text-white'>CAMPUS PROJECT</h1>
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
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">Campus Project</a>
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">RSVP</a>
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">Venue</a>
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">Contact Us</a>
              <a href="#" className="md:p-4 py-2 block hover:bg-blue-500">Our Team</a>
            </div>
          )}
        </nav>
      </div>
    );
  };

  export default Navbar;
