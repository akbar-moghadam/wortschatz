import React from 'react'
import "../styles/login.scss"
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-item">
                <h2>Login</h2>
                <div className="login-form">
                <form  className="form">
                    <label htmlFor="user" className="login-label">
                    <input type="text" placeholder="Username or Email" name="user"/>
                    </label>
                    <label htmlFor="pass" className="login-label">
                    <input type="text" placeholder="Password" name="pass"/>
                    </label>

                </form>
            </div>
            </div>
           
           
        </div>
    )
}

export default Login
