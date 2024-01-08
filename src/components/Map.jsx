import React from 'react'

const Map = () => {
  return (
    <div className='dark:bg-gray-800'>
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Our Venue</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-white">Lets have a good time together!</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.460404452065!2d107.60947055562328!3d-6.900074299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d71cdfd9c3%3A0x7357760303676c13!2sWU%20Backroom%20Bar!5e0!3m2!1sen!2sid!4v1704625123278!5m2!1sen!2sid" width="600" height="450" className='border-0' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Address</h3>
                            <p className="mt-1 text-gray-600 dark:text-white">Jl. Gudang Selatan No.22, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa Barat 40113</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Date</h3>
                            <p className="mt-1 text-gray-600 dark:text-white">Monday: 5pm - 12am</p>
                            <p className="mt-1 text-gray-600 dark:text-white">17 February 2024</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Rule!</h3>
                            <p className="mt-1 text-gray-600 dark:text-white">Prepare your ID</p>
                            <p className="mt-1 text-gray-600 dark:text-white">Follow our dresscode</p>
                            <p className="mt-1 text-gray-600 dark:text-white">Kindly follow the rules</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Map