import Page from "../UI/Page/Page"
import "./Login.css"
import { RegisterForm } from "../../components/RegisterForm/RegisterForm"
import { LoginForm } from "../../components/LoginForm/LoginForm"
import { useState } from "react"

// TODO: Implement register function in apiAuth.js

function Login() {

  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <Page secondClassName={"login-page"}>
      <div>

      </div>
      <div>
        {isLoginForm ? <LoginForm setIsLoginForm={setIsLoginForm} /> : <RegisterForm setIsLoginForm={setIsLoginForm}/>}
      </div>
    </Page>
  )
}

export default Login
