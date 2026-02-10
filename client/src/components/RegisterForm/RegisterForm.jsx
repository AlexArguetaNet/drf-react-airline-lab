import { useState } from "react";
import Form from "../UI/Form/Form"

export const RegisterForm = ({ handleRegister, setIsLoginForm }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        handleRegister(username, email, password);
    }

    return (
        <>
            <Form title={"Create an Account"}>

                <div className="text-input-container">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                </div>
                <div className="text-input-container">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className="text-input-container">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>

                <button onClick={handleSubmit} className="button-submit">Create Account</button>

            </Form>
            <div id="form-switch-container">
                <p>
                    Already have an account? <span onClick={() => setIsLoginForm(true)}>Login</span>.
                </p>
            </div>
        </>
    )
}