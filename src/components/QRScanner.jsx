import react, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const QRScanner = () => {
    const [result, setResult] = useState('');

    const handleError = (err) => {
        console.error(err);
    }

    const handleScan = (data) => {
        if (data) {
            setResult(data);
        }
    }

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: '100%'}}
                legacyMode
                facingMode="environment"
            />
            <h3>RESULT: {result}</h3>
        </div>
    )

}
export default QRScanner