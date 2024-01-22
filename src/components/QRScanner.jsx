import react, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import axios from 'axios';
import useAuth from './Auth';
 
const QRScanner = () => {
    const { logout } = useAuth();
    const [result, setResult] = useState('')
    const qrdata = result;
    const [globalData, setGlobalData] = useState({});
    const [modal, setModal] = useState(false);
    // console.log(apiUrl)
    const handleLogout = () => {
        logout();
    };
 
    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
               width: 250,
               height: 250, 
            },
            fps: 2,
        })
 
        const success = (data) => {
            const apiUrl = `${import.meta.env.VITE_API_URL}/getid/${data}`;
            setResult(data);
            axios
            .get(apiUrl)
            .then((response) => {
                const Id = response.data.User.id
                const Name = response.data.User.name
                const Gender = response.data.User.gender
                const Email = response.data.User.email
 
                setGlobalData({ Id, Name, Gender, Email });
                console.log(response, Id, Name, Gender, Email);
                return {Id, Name, Gender, Email};
 
            })
            .catch((error) => {
                console.error('Error fetching response:', error); 
                console.log(apiUrl)
            });
            setModal(!modal)
        }
 
        const error = (err) => {
            console.warn(err);
        }
        scanner.render(success, error)
    },[])    
 
 
    return (
    <div>
        <div id='reader'>
        </div>
        <div>
            {qrdata}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
        {modal && (
        <div className='fixed inset-0 z-50 flex justify-center items-center'>
          <div className='text-black bg-white shadow-lg p-10 w-80 h-100 rounded-xl dark:bg-gray-900'>
              <div className='text-black dark:text-white'>
                  <img className='h-10 bg-sky-100 rounded-full p-1 mx-auto animate-bounce' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png" alt="verified" />
              </div>
              <div className='my-5 text-black dark:text-white'>
                  <h1>Hello, <span className='font-bold'>{globalData.Name}</span></h1>
              </div>
              <div className='my-5 text-black dark:text-white'>
                  <h1>Your ID is</h1>
                  <p>{globalData.Id}</p>
              </div>
              <div className='my-5 text-black dark:text-white'>
                  <h1>With email </h1>
                  <p>{globalData.Email}</p>
              </div>
              <div className='my-5 text-black dark:text-white'>
                  <h1>And gender</h1>
                  <p>{globalData.Gender}</p>
              </div>
              <div className='flex justify-end'>
                  <button className='text-white text-sm bg-sky-600 p-2 px-5 rounded-md transition-all delay-200 ease-in-out hover:bg-sky-800' onClick={() => setModal(false)}>
                      Close
                  </button>
              </div>
          </div>
        </div>
      )}
    </div>
    )
 
}
export default QRScanner