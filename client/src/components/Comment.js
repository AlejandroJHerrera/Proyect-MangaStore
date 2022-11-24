import { Image } from 'cloudinary-react';
import React from 'react';

const Comment = () => {
  return (
    <div className="comment">
      <div className="cItem">
        <img src="" alt="" style={{ width: '50px', height: '20px' }} />
        <div className="cTitle">
          <h1>Username</h1>
          <span>This will be a user comment!</span>
        </div>
      </div>
      <div className="cItem">
        <img src="" alt="" style={{ width: '50px', height: '20px' }} />
        <div className="cTitle">
          <h1>Username</h1>
          <span>This will be a user comment!</span>
        </div>
      </div>
      <div className="cItem">
        <img src="" alt="" style={{ width: '50px', height: '20px' }} />
        <div className="cTitle">
          <h1>Username</h1>
          <span>This will be a user comment!</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
