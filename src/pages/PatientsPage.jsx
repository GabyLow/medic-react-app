import { Navbar } from "../components/Navbar";

const PatientsPage = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Patient
            </div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"> Patient Name </a>
            <p className="mt-2 text-gray-500">Patient Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsPage;
