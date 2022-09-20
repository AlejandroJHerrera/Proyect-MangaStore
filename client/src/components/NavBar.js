import React from 'react';

function NavBar() {
  return (
    <div className="NavBar">
      <div>
        <p>Logo</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Library</li>
          <li>
            <input type="text" />
          </li>
          <li>Login/Register</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
