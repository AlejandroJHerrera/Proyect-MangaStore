import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import axios from '../config';

function Register() {
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    let value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log(user);
    let url = '/user/new';
    axios
      .post(url, user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <h1>Sign up!</h1>
        <div>
          <form className="loginForm" onSubmit={handleOnSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={user.name}
              onChange={handleOnChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleOnChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleOnChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleOnChange}
            />
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
