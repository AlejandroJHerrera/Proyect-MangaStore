import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Log in</h1>
        <div>
          <form className="loginForm">
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            <button className="buttonForm">Log in</button>
          </form>
        </div>
        <div>
          <span>You don't have an account? </span>
          <NavLink to={'/user/register'}>
            <button className="buttonLogin">Sign up</button>
          </NavLink>
          <div>
            <NavLink to={'/user/passReset'}>
              <button className="buttonLogin">Forgot your password? </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
