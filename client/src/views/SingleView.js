import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userInfoSelector } from '../atoms';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import snorlax from './images/288-2883219_transparent-snorlax-pokemon-snorlax-fusion-hd-png-download.png';
import Comment from '../components/Comment';

function SingleView() {
  const [single, setSingle] = useState();
  const user = useRecoilValue(userInfoSelector);
  let mangaId = useParams();

  console.log(mangaId);

  const mangaInfo = () => {
    let url = `https://api.jikan.moe/v4/manga/${mangaId.id}/full`;
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
          <form>
            {user ? (
              <Image
                style={{ width: 100 }}
                cloudName="dipryi3mp"
                publicId={user.avatar}
              />
            ) : (
              <img src={snorlax} alt="default snorlax" style={{ width: 50 }} />
            )}
            <input type="text" placeholder="Leave a comment!" />
            <button>Submit</button>
          </form>
        </div>
        <div className="commentView">
          <Comment />
        </div>
      </div>
    </div>
  );
}

export default SingleView;
