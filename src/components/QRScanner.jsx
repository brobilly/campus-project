import react, { useState } from 'react'
import { QrReader } from 'react-qr-reader'

const QRScanner = () => {
    const [result, setResult] = useState('');

    const handleError = (err) => {
        console.error(err);
    }

    const handleScan = (data) => {
        if (data) {
            setResult(data.text);
        }
    }

    return (
        <div>
            <QrReader
                delay={300}
                onError={handleError}
                onResult={handleScan}
                style={{ width: '100%'}}
                legacyMode
                facingMode='environment'
            />
            <h3>{result}</h3>
        </div>
    )

}
export default QRScanner