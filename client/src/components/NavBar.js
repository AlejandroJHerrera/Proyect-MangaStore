import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <NavLink to={'/'}>
          <p>Logo</p>
        </NavLink>
      </div>
      <div>
        <ul>
          <NavLink to={'/'}>
            <li>Home</li>
          </NavLink>
          <NavLink to={'/manga/library'}>
            <li>Library</li>
          </NavLink>
          <li>
            <input type="text" />
          </li>
          <NavLink to={'/user/login'}>
            <li>Login/Register</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
