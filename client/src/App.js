import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [manga, setManga] = useState();
  const [user, setUser] = useState();

  const handleOnClickManga = () => {
    let url = 'http://localhost:4000/manga/';
    axios
      .get(url)
      .then((res) => {
        let mangas = res.data;
        console.log(res.data);
        setManga(mangas);
      })
      .catch((e) => console.log(e));
  };

  const handleOnClickUser = () => {
    let url = 'http://localhost:4000/user/';
    axios
      .get(url)
      .then((res) => {
        let users = res.data;
        console.log(res.data);
        setUser(users);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleOnClickManga}>Show All Mangas</button>
        {manga &&
          manga.map((e, i) => (
            <div key={i}>
              <p>{e.slug}</p>
            </div>
          ))}
      </div>
      <div>
        <button onClick={handleOnClickUser}>Show All Users</button>
        {user &&
          user.map((e, i) => (
            <div key={i}>
              <p>{e.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
