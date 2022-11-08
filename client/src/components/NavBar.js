import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoged } from '../atoms';
import snorlax from '../views/images/snorlax.gif';
import Searchbar from './Searchbar';

function NavBar() {
  const status = useRecoilValue(isLoged);

  return (
    <div className="NavBar">
      <div>
        <NavLink to={'/'}>
          <img src={snorlax} alt="App logo" />
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
            <Searchbar />
          </li>
          <NavLink to={'/user/login'}>
            {status ? (
              <NavLink to={'/user/profile'}>
                <li>USER</li>
              </NavLink>
            ) : (
              <li>Login/Register</li>
            )}
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
