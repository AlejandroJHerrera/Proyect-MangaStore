import axios from '../config';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoSelector } from '../atoms';

function UserUpdate() {
  const userId = useRecoilValue(userInfoSelector);
  const [update, setUpdate] = useState({
    name: '',
    lastName: '',
    birthday: '',
    gender: '',
    about: '',
    language: '',
    country: '',
    _id: '',
  });
  const onChange = (e) => {
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    });
    console.log(update);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setUpdate({ ...update, _id: userId._id });
    let url = `/user/update`;
    axios
      .post(url, update)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Update your information</h1>
      <form className="updateForm" onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={update.name}
          onChange={onChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={onChange}
          value={update.lastName}
        />

        <input
          type="text"
          name="birthday"
          placeholder="Birthday"
          onChange={onChange}
          value={update.birthday}
        />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          onChange={onChange}
          value={update.gender}
        />

        <input
          type="text"
          name="about"
          placeholder="About"
          onChange={onChange}
          value={update.about}
        />

        <input
          type="text"
          name="language"
          placeholder="Language"
          onChange={onChange}
          value={update.language}
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={onChange}
          value={update.country}
        />

        <button>Submit info!</button>
      </form>
    </div>
  );
}

export default UserUpdate;
