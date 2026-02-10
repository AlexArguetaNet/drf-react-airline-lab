import Form from "../UI/Form/Form"
import "./LoginForm.css"
import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginForm = ({ handleLogin, setIsLoginForm, message }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    handleLogin(username, password);

    setUsername("");
    setPassword("");
  }

  const handleFormSwitch = () => {

  }

  return (
    <>
      <Form title={"Welcome Back"}>

        {message}
        <div className="text-input-container">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        </div>
        <div className="text-input-container">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        
        <input type="submit" className="button-submit" value="Login" />
      </Form>
      <div id="form-switch-container">
        <p>
          Don't have an account? <span onClick={() => setIsLoginForm(false)}>Sign Up</span>.
        </p>
      </div>
    </>
  )
}