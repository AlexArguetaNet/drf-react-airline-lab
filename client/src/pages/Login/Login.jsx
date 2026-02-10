import Page from "../UI/Page/Page"
import "./Login.css"
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useState } from "react"
import { registerUser } from "../../utils/authAPI"

function Login() {

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [msg, setMsg] = useState(<></>);

  // Function to switch between the login and register forms
  const switchForms = (boolVal) => {
    setIsLoginForm(boolVal);
    setMsg(<></>);
  }

  // Function to that handles the UI when making a post request to
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

  return (
    <Page secondClassName={"login-page"}>
      <div className="plane-img-container"> 
        
      </div>
      <div className="form-container">
        {/* Render either the login or register form */}
        {
          isLoginForm ? <LoginForm setIsLoginForm={switchForms} message={msg} /> 
          : 
          <RegisterForm handleRegister={handleRegister} setIsLoginForm={switchForms} message={msg}/>
        }
      </div>
    </Page>
  )
}

export default Login
