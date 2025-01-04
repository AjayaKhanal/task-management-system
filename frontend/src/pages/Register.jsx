import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

function Register() {
    return (
        <div className="reg-container">
            <div className="register-card">
                <h1>Sign Up</h1>
                <form className='reg-form'>
                    <input type="text" placeholder="Username" className="username" />
                    <input type="email" placeholder="Email" className="email" />
                    <input type="password" placeholder="Password" className="password" />
                    <button type="button" className="btn-submit">Sign Up</button>
                </form>

                <div className='extra-links'>
                <Link >Forgot Password?</Link><br />
                <Link to='/login'>Log In</Link>
            </div>
            </div>
        </div>
    )
}

export default Register;