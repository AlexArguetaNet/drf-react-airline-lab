import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Navbar from "../components/Navbar/Navbar"
import Login from "../pages/Login/Login"

function Router() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default Router
