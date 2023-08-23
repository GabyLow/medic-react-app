import { Link } from "react-router-dom";
import logo from '../assets/logo-md-2.png';

export const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-between items-center px-4 py-6">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20" />
        </div>
        <ul className="flex">
          <li>
            <Link to="/" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Home </Link>
          </li>
          <li>
            <Link to="/create" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Create Patients </Link>
          </li>
          <li>
            <Link to="/patients" className="font-bold text-white hover:text-gray-400 px-4 py-2"> Patients </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

