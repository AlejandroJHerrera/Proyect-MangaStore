import React, { useEffect, useState } from 'react';
import * as jose from 'jose';

function UserProfile() {
  const getToken = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    let decodedToken = jose.decodeJwt(token);
    setUser(decodedToken.userEmail);
  };

  const [user, setUser] = useState();

  useEffect(() => {
    getToken();
  });

  return (
    <div className="userHome">
      <div className="userHeader">
        <img src="" alt="" />
        <h1>{user}</h1>
      </div>
      <div className=""></div>
    </div>
  );
}

export default UserProfile;
