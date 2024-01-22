import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import DomToImage from 'dom-to-image';
import axios from 'axios';
 
const FormInput = () => {
  const [gender, setGender] = useState('');
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
 
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reff, setReff] = useState('');
 
  const qrcode64Ref = useRef();
  const nik = parseInt(id);
 
  const ageVerif = () => {
    const fullId = id.split('').map(Number);
    const birthId = fullId.slice(10, 12);
    const intId = parseInt(birthId.join(''));
 
    return intId > 40 || intId < 4;
  };

  const apiUrl = `${import.meta.env.VITE_API_URL}/rsvp`;
  const apiUrl2 = `https://kudus.wablas.com/api/send-image`;
  const caption = "test";
  const headers = {
    "Authorization": "I5vexX1h0GL9Irepb3nwju1fHhhMCWu4xoDoxygadkMDNUIwjEdD8o1ftljiwU6i",
    "Content-Type": "application/json" 
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ageVerif() && id) {
      alert('haiyaaaa so young');
    } else {
      try{
        const dataTemp = await DomToImage.toJpeg(qrcode64Ref.current);
        const data = dataTemp.split(",")[1];

        const response = await axios.post(apiUrl, {"id" : nik , name, phone, email, gender, reff, "qr_image" : data});
        const wablas = await axios.post(apiUrl2, {phone, caption, "image": dataTemp}, { headers });
      }catch(err){
        console.error("Error is:",err);
        console.log(err.config.data)
      }
    }
  };
 
  return (
    <div>
      <section className="bg-white p-5 dark:bg-gray-800">
      <div className="flex justify-center items-center max-h-screen">
        <div className="hidden bg-cover h-100 rounded-lg lg:block lg:w-2/5" style={{backgroundImage: "url('https://i0.wp.com/guiden.id/wp-content/uploads/2021/09/image-62.png?fit=722%2C674&ssl=1')"}}>
        </div>
 
        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    RSVP NOW!
                </h1>
 
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
            <input
              type="text"
              placeholder="Aglio Daud Manuwo"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
 
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">ID Card</label>
            <input
              type="Number"
              placeholder="16 Digit ID"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>
 
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone Number</label>
            <div className="relative flex items-center text-gray-400 ">
              <h1 className="w-8 h-6 absolute ml-5 pointer-events-none">+62</h1>
              <input
                type="number"
                name="Phone"
                placeholder="812345678910"
                autoComplete="off"
                className="block w-full px-5 py-3 pl-14 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring-opacity-40 focus:ring-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
 
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
            <input
              type="email"
              placeholder="daudmanuwu@example.com"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
 
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>
            <select
              required
              name="gender"
              value={gender}
              onChange={handleGenderChange}
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
 
          <div>
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Reff (optional)</label>
            <input
              type="Number"
              placeholder="8 Digit reff"
              className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              value={reff}
              onChange={(e) => setReff(e.target.value)}
            />
          </div>
 
 
          <button
            type="submit"
            className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            <span>Sign Me</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
        </div>
        </div>
        </div>
          <div className="mt-36 flex justify-center">
            <div className="bg-white p-4 w-72" ref={qrcode64Ref}>
              <QRCode value={id} />
            </div>
          </div>
      </section>
    </div>
  );
};
 
export default FormInput;