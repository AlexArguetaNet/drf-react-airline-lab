import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Navbar from "../components/Navbar/Navbar"
import Login from "../pages/Login/Login"
import Flight from "../pages/Flight/Flight"
import Profile from "../pages/Profile/Profile"
import ProtectedRoute from "./ProtectedRoute"

function Router() {
  return (
    <BrowserRouter>

        <Navbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/flights/:flightId" element={<Flight />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        </Routes>
    
    </BrowserRouter>
  )
}

export default Router
