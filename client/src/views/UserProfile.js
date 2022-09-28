import React, { useEffect, useState } from 'react';
import * as jose from 'jose';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userLogged } from '../atoms';
import snorlax from './images/snorlax.gif';

function UserProfile() {
  const [user, setUser] = useState();
  const [userInfo, setUserInfo] = useRecoilState(userLogged);

  const getToken = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    let decodedToken = jose.decodeJwt(token);
    setUser(decodedToken);
    console.log(user);
  };

  const getUser = () => {
    let url = `http://localhost:4000/user/${user}`;
    axios
      .get(url)
      .then((res) => {
        let resUser = res.data;
        setUserInfo(resUser);
        console.log(userInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getToken();
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="userHome">
      <div className="userHeader">
        <img src={snorlax} alt="" />
        <h1>Hello</h1>
      </div>
      <div className=""></div>
    </div>
  );
}

export default UserProfile;
