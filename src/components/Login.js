import React from 'react'
import "../styles/login.scss"
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-item">
                <h2>Login</h2>
                <div className="login-form">
                <form >
                    <label htmlFor="user">
                    <input type="text" placeholder="Username or Email" name="user"/>
                    </label>
                    

                </form>
            </div>
            </div>
           
           
        </div>
    )
}

export default Login
