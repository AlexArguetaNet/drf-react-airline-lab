import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

  return (
    <nav>
      <div className="links">
        <Link to={"/"}><h2>Airline API</h2></Link>
        <div>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"} className="login-link">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
