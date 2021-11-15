import React from 'react'
import "../styles/login.scss"
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-item">
                <div className="login-title"><h2>Wellcome to Wortschatz</h2></div>
                <div className="login-form">
                    <form  className="form">
                        <label htmlFor="user" className="login-label">
                        <input type="text" placeholder="Username or Email" name="user"/>
                        <span className="form-span">Username or Email</span>
                        </label>
                        <label htmlFor="pass" className="login-label">
                        <input type="text" placeholder="Password" name="pass"/>
                        </label>
                        <Link to="/login/" className="link-forget"><span>Forget Password?</span></Link>
                    </form>
                    
                </div>
                <div className="login-button">
                    <button className="l-button">Login Now</button>
                    <button className="l-button">Create Account</button>
                </div>
            </div>
           
           
        </div>
    )
}

export default Login
