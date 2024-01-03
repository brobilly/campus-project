import React from 'react'
import QRCode from 'react-qr-code'

const QR = () => {
  return (
    <div className='bg-white p-4'>
        <QRCode value="12345" />
    </div>
  )
}

export default QR