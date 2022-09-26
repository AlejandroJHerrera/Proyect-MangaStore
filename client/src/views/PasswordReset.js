import React from 'react';
import { NavLink } from 'react-router-dom';

function PasswordReset() {
  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Reset password</h1>
        <span>
          You can reset your password by providing your email address.
        </span>
        <div>
          <form className="loginForm">
            <input type="text" placeholder="Enter email" />
            <button className="buttonForm">Reset password</button>
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

export default PasswordReset;
