import { useForm } from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { Navbar } from "../components/Navbar"



const CreatePage = () => {

  
    const {register, handleSubmit, formState:{errors}} = useForm()
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        try {
          
            const response = await fetch('http://localhost:8000/api/patients', {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })

            const patient = await response.json()
            console.log(patient)
            navigate('/patients')

        } catch (error) {
           console.log("ESTO ES UN ERROR POR SI FALLA La API",error)
        }
    }

  return (
    <>
     <Navbar/>
     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className='p-8 w-full'>
                    <div className="uppercase tracking-wide text-lg text-sky-600 font-bold mb-1"> Form to add patient</div>
                    <form onSubmit= {handleSubmit(onSubmit)}>
                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text" 
                            {...register("name", {required: true})} 
                            placeholder='Patient Name'
                        />
                        {errors.name && <span className="text-red-500">Este campo es requerido</span>}

                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="number" 
                            {...register("age")} 
                            placeholder='Patient Age'
                        />

                        <input 
                            className='shadow appearance-none border rounded w-full m-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type="text,number" 
                            {...register("num_afi")} 
                            placeholder='Patient affiliation number' 
                        />

                        <textarea className='shadow appearance-none border rounded m-3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            {...register("address")}
                            cols="30" 
                            rows="10"
                            placeholder='Patient Address'
                        ></textarea>

                        <button className='bg-sky-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>Add Patient</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreatePage