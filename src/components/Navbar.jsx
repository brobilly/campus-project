import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="hidden md:flex container items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a href="#" className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Campus Project</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">RSVP</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Venue</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</a>
          <a href="#" className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Our Team</a>
        </div>
        {/* MOBILE */}
        <div className="md:hidden p-2 flex justify-end">
          <button onClick={handleMenuClick}>
            <img
              src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
              className='w-10 h-10'
              alt="menu-squared-2"
            />
          </button>
        </div>
        {isMenuOpen && (
          <div className='md:hidden flex flex-col items-center text-center'>
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
