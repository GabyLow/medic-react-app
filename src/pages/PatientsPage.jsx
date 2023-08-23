import {useEffect, useState} from 'react';
import { Navbar } from "../components/Navbar";

const PatientsPage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getAllPatients = async() => {
      try {
        const response = await fetch('http://localhost:8000/api/patients')
        const patients = await response.json()
        console.log(patients)
        setData(patients)
      } catch (error) {
        console.log("ESTO ES UN ERROR POR SI FALLA La API",error)
      }
    }

    getAllPatients()

    
  }, [])



  return (
    <>
    <Navbar />
    <div className=" max-w-md mx-auto bg-sky-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {data.map(patients => (
        <div key={patients.id} className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-sky-600 font-bold">Patient</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium font-semibold text-black hover:underline">{patients.name}</a>
            <p className="mt-2 font-semibold text-cyan-500"> A.N : {patients.num_afi}</p>
            <p className="mt-2 font-semibold text-cyan-500"> Age : {patients.age}</p>
            <p className="mt-2 font-semibold text-cyan-500">Address : {patients.address}</p>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default PatientsPage;
