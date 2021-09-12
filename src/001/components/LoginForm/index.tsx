import React from "react"
import useAuth from "../../hooks/useAuth"
import InputField from "../InputField"
import "./LoginForm.scss"

const LoginForm: React.FC = () => {
    const auth = useAuth()
    return (
        <>
            <form>
                <h1>Login</h1>
                <InputField 
                    required
                    icon="fas fa-user"
                    label="Username" type="text"
                    value={auth.username} onChange={e => auth.setUsername(e.target.value)}
                />
                <InputField 
                    required
                    icon="fas fa-key"
                    label="Password" type="password"
                    value={auth.password} onChange={e => auth.setPassword(e.target.value)}
                />
                <button type="button" onClick={auth.validate}>Login</button>
                <div className="bottom-section">
                    <label>Forgot <a href="#">Password?</a></label>
                    <label>Don't have an account? <a href="#">Sign Up!</a></label>
                </div>
            </form>
        </>
    )
}

export default LoginForm