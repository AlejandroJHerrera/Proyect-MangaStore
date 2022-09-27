import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as jose from 'jose';

function Login(props) {
  const [user, setUser] = useState({ email: '', password: '' });
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();

    let url = 'http://localhost:4000/user/login';
    try {
      const response = await axios.post(url, {
        email: user.email,
        password: user.password,
      });
      if (response.data.ok) {
        let decodedToken = jose.decodeJwt(response.data.token);
        console.log(
          'Email extracted from the JWT token after login: ',
          decodedToken.userEmail
        );
        setTimeout(() => {
          props.login(response.data.token);
          navigate('/user/home');
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Log in</h1>
        <div>
          <form className="loginForm" onSubmit={handleOnSubmit}>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleOnChange}
            />
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
