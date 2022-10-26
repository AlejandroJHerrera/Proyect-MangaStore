import Axios from '../config';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoSelector } from '../atoms';

function UserAvatar() {
  const [selected, setSelected] = useState('');
  const userid = useRecoilValue(userInfoSelector);
  const [update, setUpdate] = useState({
    avatar: '',
    _id: '',
  });

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', selected);
    formData.append('upload_preset', 'xnmarm85');
    Axios.post(
      'https://api.cloudinary.com/v1_1/dipryi3mp/image/upload',
      formData
    ).then((res) => {
      console.log(res);
      setUpdate({ avatar: res.data.url, _id: userid._id });
      console.log(update);
      if (res.statusText === 'OK') {
        let url = '/user/update';
        Axios.post(url, update).then((res) => {
          console.log(res.data);
        });
      }
    });
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setSelected(e.target.files[0]);
        }}
      />
      <button onClick={uploadImage}> Upload Image</button>
    </div>
  );
}

export default UserAvatar;
