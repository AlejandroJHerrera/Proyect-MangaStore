import React, { useEffect, useState } from 'react';
import * as jose from 'jose';
// import snorlax from './images/snorlax.gif';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userLogged, userInfoSelector } from '../atoms';
import UserUpdate from './UserUpdate';
import UserAvatar from './UserAvatar';
import { Image } from 'cloudinary-react';

function UserProfileInfo(prop) {
  const [user, setUser] = useRecoilState(userLogged);
  const navigate = useNavigate();
  const currentUser = useRecoilValue(userInfoSelector);
  const [visible, setVisible] = useState(true);

  const getToken = () => {
    let token = JSON.parse(localStorage.getItem('token'));
    let decodedToken = jose.decodeJwt(token);
    setUser(decodedToken.userEmail);
    console.log(user);
  };

  useEffect(() => {
    getToken();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const logout = () => {
    setTimeout(() => {
      prop.logout();
      navigate('/');
    }, 1000);
  };

  const updateClick = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    console.log(visible);
  };

  return (
    <div className="userHome">
      <div className="userHeader">
        <div className="userImg">
          <Image
            cloudName="dipryi3mp"
            publicId={currentUser && currentUser.avatar}
          />
          <div
            style={
              visible
                ? { display: 'none' }
                : {
                    display: 'flex',
                    flexDirection: 'column',
                  }
            }
          >
            <UserAvatar />
          </div>
        </div>
        <div className="userInfo">
          <h1>User name {currentUser && currentUser.name}</h1>
          <p>user birthday:{currentUser && currentUser.birthday}</p>
          <p>user gender: {currentUser && currentUser.gender}</p>
          <p>user language: {currentUser && currentUser.language}</p>
          <p>user country: {currentUser && currentUser.country}</p>
          <p>comment count: 0</p>
          <p>likes count: 0</p>
          <p>favourite count: 0</p>
          <article>user about: {currentUser && currentUser.about}</article>
          <button onClick={updateClick}> Update your profile</button>
        </div>
      </div>
      <div
        style={
          visible
            ? { display: 'none' }
            : {
                display: 'flex',
                flexDirection: 'column',
              }
        }
      >
        <UserUpdate />
      </div>
      <div className="userMangaCollection">
        <p>This is the list of manga he owns</p>
        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}

export default UserProfileInfo;
