import React from 'react';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Sign up!</h1>
        <div>
          <form className="loginForm">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="buttonForm">Create account</button>
          </form>
        </div>
        <div>
          <span>Do you already have an account? </span>
          <NavLink to={'/user/login'}>
            <button className="buttonLogin">Sign in</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;
