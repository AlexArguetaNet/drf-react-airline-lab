import { useState } from "react"

export const LoginForm = () => {
  return (
    <form>

    </form>
  )
}

export const RegisterForm = ({ handleRegister }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        handleRegister(username, email, password);
    }

    return (
        <form>
            <h2>Create an Account</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="email" value={email} onChange={(e) => setUsername(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setUsername(e.target.value)} placeholder="Password" required />

            <button onClick={handleSubmit}>Create Account</button>

        </form>
    )
}

