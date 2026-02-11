import Page from "../UI/Page/Page"
import "./Login.css"
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import { registerUser, login } from "../../utils/authAPI"
import { useNavigate } from "react-router-dom"

function Login() {

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [msg, setMsg] = useState(<></>);
  const navigate = useNavigate();

  // Function to switch between the login and register forms
  const switchForms = (boolVal) => {
    setIsLoginForm(boolVal);
    setMsg(<></>);
  }

  // Function that handles the UI when making a post request to
  // register a new user
  const handleRegister = async (username, email, password) => {
    const res = await registerUser({username, email, password});

    if (Object.hasOwn(res, "username")) { // User has been registered successfully
      setIsLoginForm(true);
      setMsg(
        <div className="form-message success">
          <p>Account created!</p>
        </div>
      )
      
    } else { // Error registering user
      setMsg(
        <div className="form-message error">
          <p>{res.err}</p>
        </div>
      )
    }
  }

  // Function that handles the UI for logging in
  const handleLogin = async (username, password) => {

    const res = await login(username, password);

    if (Object.hasOwn(res, "access")) {
      navigate("/");
      window.location.reload();
    } else {
      setMsg(
        <div className="form-message error">
          <p>{res.err}</p>
        </div>
      )
    }

  } 

  return (
    <Page secondClassName={"login-page"}>
      <div className="plane-img-container"> 
        
      </div>
      <div className="form-container">
        {/* Render either the login or register form */}
        {
          isLoginForm ? <LoginForm handleLogin={handleLogin} setIsLoginForm={switchForms} message={msg} /> 
          : 
          <RegisterForm handleRegister={handleRegister} setIsLoginForm={switchForms} message={msg}/>
        }
      </div>
    </Page>
  )
}

export default Login
