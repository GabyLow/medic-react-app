import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PatientsPage from "./pages/PatientsPage"
import CreatePage from "./pages/CreatePage"


function App() {

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-screen">
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} ></Route>
         <Route path="/patients" element={<PatientsPage />} ></Route>
         <Route path="/create" element={<CreatePage />} ></Route>
       </Routes>
     </BrowserRouter>
    </>
    </div>
  )
}

export default App
