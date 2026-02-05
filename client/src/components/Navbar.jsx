import { Link } from "react-router-dom"

function Navbar() {

  return (
    <nav>
      <Link to={"/"}><h2>Airline API</h2></Link>
      <div>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    </nav>
  )
}

export default Navbar
