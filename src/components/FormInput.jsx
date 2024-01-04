import React, {useState} from 'react'

const FormInput = () => {
    const [selectedGender, setSelectedGender] = useState('');
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const [name, setName] = useState('')
    const [nik, setNik] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const ageVerif = () => {
        const fullNik = nik.split('').map(Number);
        const birthNik = fullNik.slice(10, 12);
        const intNik = parseInt(birthNik.join(''));

        return intNik > 40 || intNik < 4;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!ageVerif()){
            alert('haiyaaaa so young');
        } 
    }
  return (
    <div>
        <section className="bg-white p-5 dark:bg-gray-800">
    <div className="flex justify-center items-center max-h-screen">
        <div className="hidden bg-cover h-96 rounded-lg lg:block lg:w-2/5" style={{backgroundImage: "url('https://i0.wp.com/guiden.id/wp-content/uploads/2021/09/image-62.png?fit=722%2C674&ssl=1')"}}>
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
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">ID Card</label>
                        <input 
                          type="Number" 
                          placeholder="16 Digit ID" 
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          value={nik}
                          onChange={(e) => setNik(e.target.value)}
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
                          value={number}
                          onChange={(e) => setNumber(e.target.value)}
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
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Gender</label>
                        <select
                            name="gender"
                            value={selectedGender}
                            onChange={handleGenderChange}
                            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Reff (opsional)</label>
                        <input type="Number" placeholder="8 Digit reff" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <button type='submit'
                        className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span> Sign Me </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default FormInput