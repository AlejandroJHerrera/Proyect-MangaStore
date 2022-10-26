import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mangasState } from '../atoms';
import { useState } from 'react';

function Library() {
  const mangas = useRecoilValue(mangasState);
  const [allMangas, setAllMangas] = useState(mangas);
  const [search, setSearch] = useState('');
  const handleOnChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (e) => {
    let result = mangas.filter((el) => {
      if (el.title.toString().toLowerCase().includes(e.toLowerCase())) {
        return el;
      }
    });
    setAllMangas(result);
  };

  return (
    <div className="libraryContainer">
      <h1>Search for your favourite manga!</h1>
      <h3>Try Berserk for example...</h3>
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={handleOnChange}
      />

      <div className="libraryCollection">
        {allMangas.map((e, i) => (
          <NavLink to={`/manga/${e.mal_id}`} key={i}>
            <div key={i} className="libraryCard">
              <img src={e.images.webp.image_url} alt={e.title} />
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Library;
