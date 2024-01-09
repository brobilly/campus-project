import react, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import axios from 'axios';
import useAuth from './Auth';

const QRScanner = () => {
    const { logout } = useAuth();
    const [result, setResult] = useState('')
    const qrdata = result;
 
    const apiUrl = `${import.meta.env.VITE_API_URL}/getid/${qrdata}`;
 
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
            setResult(data);
            sendData();
        }
 
        const error = (err) => {
            console.warn(err);
        }
        scanner.render(success, error)
    },[])
 
    
    // console.log(qrdata)

    const sendData = () => {
        axios
        .get(apiUrl)
        .then((response) => {
            const Id = response.data.User.id
            const Name = response.data.User.name
            const Gender = response.data.User.gender
            console.log(Id, Name, Gender);
        })
        .catch((error) => {
          console.error('Error fetching response:', error);
        });
    }
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
    </div>
    )
 
}
export default QRScanner