import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { mangasState } from '../atoms';

function Home() {
  const [aside, setAside] = useState([]);
  const [mangas, setMangas] = useRecoilState(mangasState);

  // const mangaCollection = () => {
  //   let url = 'https://api.jikan.moe/v4/manga?page=20';
  //   let url2 = 'http://localhost:4000/manga/new';
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       let mangas = res.data;
  //       setManga(mangas.data);
  //       if (manga) {
  //         axios
  //           .post(url2, manga)
  //           .then((res) => {
  //             console.log(res.data);
  //           })
  //           .catch((error) => {
  //             console.log(error + 'error from 2nd request');
  //           });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err + 'error from 1st request');
  //     });
  // };

  const mangaCollection = () => {
    let url = 'http://localhost:4000/manga/';
    axios
      .get(url)
      .then((res) => {
        let mangasfromDB = res.data;
        setMangas(mangasfromDB);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const trendingManga = () => {
    let url = 'https://api.jikan.moe/v4/top/manga';
    axios
      .get(url)
      .then((res) => {
        let trending = res.data;
        setAside(trending.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  useEffect(() => {
    mangaCollection();
    trendingManga();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="header">
      <h1>Top Manga</h1>
      <div className="main">
        <div className="homeCollection">
          {mangas &&
            mangas.slice(0, 12).map((e, i) => (
              <NavLink to={`/manga/${e.mal_id}`} key={i}>
                <div className="homeCard" key={i}>
                  <img src={e.images.webp.large_image_url} alt={e.title} />
                  <h1>{e.title}</h1>
                </div>
              </NavLink>
            ))}
        </div>
        <aside className="trendingAside">
          {aside &&
            aside.map((e, i) => (
              <NavLink to={`/manga/${e.mal_id}`} key={i}>
                <div
                  key={i}
                  style={{
                    backgroundImage: `url(${e.images.webp.large_image_url})`,
                  }}
                >
                  <h1>{e.title}</h1>
                </div>
              </NavLink>
            ))}
        </aside>
      </div>
    </div>
  );
}

export default Home;
