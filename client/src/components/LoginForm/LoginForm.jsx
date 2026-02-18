import Form from "../UI/Form/Form"
import "./LoginForm.css"
import { useState } from "react"
import Button from "../Button/Button"

export const LoginForm = ({ handleLogin, setIsLoginForm, message }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(username, password);

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <Form title={"Welcome Back"} onSubmit={handleSubmit}>

        {message}
        <div className="text-input-container">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
        </div>
        <div className="text-input-container">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        </div>
        
        <Button>
          <input type="submit" className="button-submit" value="Login" />
        </Button>
      </Form>
      <div id="form-switch-container">
        <p>
          Don't have an account? <span onClick={() => setIsLoginForm(false)}>Sign Up</span>.
        </p>
      </div>
    </>
  )
}