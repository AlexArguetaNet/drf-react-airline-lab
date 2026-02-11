import { Link } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../../context/AuthContext"
import { logout } from "../../utils/authAPI";

function Navbar() {

  const { user } = useAuth();

  // TODO: Create UI to logout a user

  // Logging out is handled here temporarily 
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  }

  return (
    <nav>
      <div className="links">
        <Link to={"/"}><h2>Airline API</h2></Link>
        <div>
          <Link to={"/about"}>About</Link>
          {
            user ? (<button className="login-link" onClick={handleLogout}>{user.username}</button>)
                  :
                  (<Link to={"/login"} className="login-link">Login</Link>)
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
