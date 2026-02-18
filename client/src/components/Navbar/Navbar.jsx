import { Link } from "react-router-dom"
import "./Navbar.css"
import { useAuth } from "../../context/AuthContext"
import { logout } from "../../utils/authAPI"
import DropDownMenu from "../DropDownMenu/DropDownMenu"
import { SiFlyway } from "react-icons/si"

function Navbar() {

  const { user } = useAuth();

  // Function to logout a user
  const handleLogout = async () => {
    await logout();
    window.location.reload();
  }

  const menuOptions = [
    <Link to={"/profile"}>Profile</Link>,
    <Link onClick={handleLogout}>Logout</Link>
  ]

  return (
    <nav>
      <div className="content">
        <Link to={"/"}><h2><SiFlyway /> Airline API</h2></Link>
        <div className="links">
          <div>
            <Link to={"/about"}>About</Link>
          </div>
          {
            user ? (
                      <div>
                        <DropDownMenu title={user.username} options={menuOptions} />
                      </div>
                   )
                  :
                  (
                    <div>
                      <Link to={"/login"} className="login-link">Login</Link>
                    </div>
                  )
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
