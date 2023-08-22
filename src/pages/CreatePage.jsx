import { Navbar } from "../components/Navbar"


const CreatePage = () => {

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const patientName = formData.get('name');
    const patientAge = formData.get('age');
    console.log(patientName);
    console.log(patientAge);
  }
  
  

  return (
    <>
     <Navbar/>
     <h1 className="text-3xl font-bold underline"> Form </h1>
     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className='p-8 w-full'>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1"> Form to add patient</div>
                    <form onSubmit= {handleSubmit}>
                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            name="name" 
                            placeholder='Patient Name'
                        />

                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="number" 
                            name="age" 
                            placeholder='Patient Age'
                        />

                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="number" 
                            name="num_afi" 
                            placeholder='Patient affiliation number' 
                        />

                        <textarea className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            name="address"
                            cols="30" 
                            rows="10"
                            placeholder='Patient Address'
                        ></textarea>

                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePage