import react, { useEffect, useState } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'

const QRScanner = () => {

    const [result, setResult] = useState('')

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
        }
    
        const error = (err) => {
            console.warn(err);
        }

        scanner.render(success, error)
    },[])
    
    const qrdata = result;

    return (
    <div>
        <div id='reader'>
        </div>
        <div>
        {qrdata}
        </div>
    </div>
    )

}
export default QRScanner