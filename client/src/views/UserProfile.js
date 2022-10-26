import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfileInfo from './UserProfileInfo';

function UserProfile(props) {
  const navigate = useNavigate();
  const logout = () => {
    setTimeout(() => {
      props.logout();
      navigate('/');
    }, 1000);
  };

  return (
    <div>
      <Suspense fallback={<h1>Loading profile ...</h1>}>
        <UserProfileInfo logout={logout} />
      </Suspense>
    </div>
  );
}

export default UserProfile;
