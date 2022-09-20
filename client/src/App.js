import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';

function App() {
  const [manga, setManga] = useState([]);

  const mangaCollection = () => {
    let url = 'https://api.jikan.moe/v4/manga?page=1&limit=8';
    axios
      .get(url)
      .then((res) => {
        let mangas = res.data;
        setManga(mangas.data);
        console.log(manga);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    mangaCollection();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="App">
      <NavBar />
      <div>
        <div className="main">
          <h1>Top Manga</h1>
          <div className="homeCollection">
            {manga &&
              manga.map((e, i) => (
                <div className="homeCard" key={i}>
                  <img src={e.images.jpg.image_url} alt={e.title} />
                  <h1>{e.title}</h1>
                </div>
              ))}
          </div>
        </div>
        <aside></aside>
      </div>
    </div>
  );
}

export default App;
