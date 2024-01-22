import React from 'react'

const modal = () => {
  return (
    <div className='bg-black h-screen p-20 flex justify-center dark:bg-slate-300'>
        <div className='text-black bg-white shadow-lg p-10 w-80 h-100 rounded-xl dark:bg-gray-900'>
            <div className='text-black dark:text-white'>
                <img className='h-10 bg-sky-100 rounded-full p-1 mx-auto animate-bounce' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified" />
            </div>
            <div className='my-5 text-black dark:text-white'>
                <h1>Hello, <span className='font-bold'>Daud Manuwo</span></h1>
            </div>
            <div className='my-5 text-black dark:text-white'>
                <h1>Your ID is</h1>
                <p>6302201102020001</p>
            </div>
            <div className='my-5 text-black dark:text-white'>
                <h1>With email </h1>
                <p>daudmanuwu@gmail.com</p>
            </div>
            <div className='my-5 text-black dark:text-white'>
                <h1>And gender</h1>
                <p>Male</p>
            </div>
            <div className='flex justify-end'>
                <button className='text-white text-sm bg-sky-600 p-2 px-5 rounded-md transition-all delay-200 ease-in-out hover:bg-sky-800'>
                    Close
                </button>
            </div>
        </div>
    </div>
  )
}

export default modal