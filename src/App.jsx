import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import PatientsPage from "./pages/PatientsPage"
import CreatePage from "./pages/CreatePage"


function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />} > </Route>
         <Route path="/about" element={<AboutPage />} > </Route>
         <Route path="/patients" element={<PatientsPage />} > </Route>
         <Route path="/create" element={<CreatePage />} > </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
