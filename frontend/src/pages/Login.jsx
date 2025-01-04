import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Login successfully')
    // dispatch(login(email, password));
  };

  return (
    <div className='container'>
      <div className='login-card'>
        <h1>Welcome!</h1>
        <p>Please login to your account</p>
        <form className='login-form' onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Email"
            className='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className='btnLogin'>Login</button>
        </form>
        <div className='extra-links'>
          <Link to=''>Forgot Password?</Link><br/>
          <Link to='/register'>Sign Up</Link>
        </div>
        </div>
    </div>
  );
}

export default Login;
