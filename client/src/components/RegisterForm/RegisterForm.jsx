import { useState } from "react";
import Form from "../UI/Form/Form"

export const RegisterForm = ({ handleRegister, setIsLoginForm, message }) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        handleRegister(username, email, password);

        setUsername("");
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <Form title={"Create an Account"} onSubmit={handleSubmit}>

                {message}
                <div className="text-input-container">
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                </div>
                <div className="text-input-container">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </div>
                <div className="text-input-container">
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>

                <input type="submit" className="button-submit" value="Create Account" />

            </Form>
            <div id="form-switch-container">
                <p>
                    Already have an account? <span onClick={() => setIsLoginForm(true)}>Login</span>.
                </p>
            </div>
        </>
    )
}