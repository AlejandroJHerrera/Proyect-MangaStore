import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mangasState } from '../atoms';

function Searchbar() {
  const mangas = useRecoilValue(mangasState);
  const [allMangas, setAllMangas] = useState(mangas);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);

  const handleOnChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
    e.target.value ? setVisible(true) : setVisible(false);
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
    <div>
      <input
        type="text"
        placeholder="Search.."
        value={search}
        onChange={handleOnChange}
      />
      <div style={visible ? { display: 'flex' } : { display: 'none' }}>
        <div className="searchResult">
          {allMangas &&
            allMangas.map((e, i) => (
              <NavLink to={`/manga/${e.mal_id}`} key={i}>
                <h1 key={i}>{e.title}</h1>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
