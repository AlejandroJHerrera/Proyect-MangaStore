import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoSelector } from '../atoms';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import snorlax from './images/288-2883219_transparent-snorlax-pokemon-snorlax-fusion-hd-png-download.png';

function SingleView() {
  const [single, setSingle] = useState();
  const [comments, setComment] = useState([]);
  const [newComment, setNewComment] = useState({
    name: '',
    desc: '',
    mal_id: '',
  });
  const user = useRecoilValue(userInfoSelector);
  let mangaId = useParams();

  const getComments = async () => {
    let url = `http://localhost:4000/comment/${mangaId.id}/getComment`;

    await axios
      .get(url)
      .then((res) => {
        let comment = res.data;
        setComment(comment);
      })
      .catch((error) => console.log(error));
  };

  const mangaInfo = () => {
    let url = `https://bcs-cors-proxy.herokuapp.com/https://api.jikan.moe/v4/manga/${mangaId.id}/full`;
    axios
      .get(url)
      .then((res) => {
        let mangas = res.data;
        setSingle(mangas.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    mangaInfo();
    getComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleOnChange = (e) => {
    setNewComment({
      name: !user ? 'Anonymous' : user.name,
      desc: e.target.value,
      mal_id: mangaId.id,
    });
  };

  const handleOnSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    let url = `http://localhost:4000/comment/${mangaId.id}/addComment`;
    axios
      .post(url, newComment)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="singleViewMain">
      <div className="singleViewHeader">
        <div className="singleViewImg">
          <img
            src={single && single.images.webp.large_image_url}
            alt={single && single.title}
          />
        </div>
        <div className="singleViewSynopsis">
          <h1>{single && single.title}</h1>
          <h3>{single && single.title_japanese}</h3>
          <article>{single && single.synopsis}</article>
          <div className="singleViewInfo">
            <p>Type: {single && single.type}</p>
            <p>Category: {single && single.themes[0].name}</p>
            <p>Status: {single && single.status}</p>
            <p>Rank: {single && single.rank}</p>
            <p>Popularity: {single && single.popularity}</p>
            <p>Members: {single && single.members}</p>
            <p>Author: {single && single.authors[0].name}</p>
            <p>Demographics: {single && single.demographics[0].name}</p>
          </div>
        </div>
      </div>
      <div className="commentSection">
        <h1>Comment Section</h1>
        <div className="commentForm">
          <form onSubmit={handleOnSubmit}>
            {user ? (
              <Image
                style={{ width: 100 }}
                cloudName="dipryi3mp"
                publicId={user.avatar}
              />
            ) : (
              <img src={snorlax} alt="default snorlax" style={{ width: 50 }} />
            )}
            <input
              type="text"
              placeholder="Leave a comment!"
              onChange={handleOnChange}
            />
            <button>Submit</button>
          </form>
        </div>
        <div className="commentView">
          {comments &&
            comments.map((item, i) => (
              <div className="cItem" key={i}>
                <div className="cTitle">
                  <h1>{item.name}</h1>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SingleView;
