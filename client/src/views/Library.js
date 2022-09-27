import React from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mangasState } from '../atoms';

function Library() {
  const mangas = useRecoilValue(mangasState);
  return (
    <div className="libraryContainer">
      <h1>Search for your favourite manga!</h1>
      <h3>Try Berserk for example...</h3>
      <input type="text" placeholder="Search ..." />

      <div className="libraryOption">
        <span>Categories:</span>
        <select>
          <option></option>
          <option>Action</option>
          <option>Adventure</option>
          <option>Fantasy</option>
          <option>Seinen</option>
          <option>Comedy</option>
          <option>Sports</option>
        </select>
        <span>Order:</span>
        <select>
          <option>ASC</option>
          <option>DESC</option>
        </select>
      </div>
      <div className="libraryCollection">
        {mangas.slice(0, 18).map((e, i) => (
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
