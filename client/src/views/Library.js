import React from 'react';
// import { useRecoilValue } from 'recoil';
// import { mangasState } from '../atoms';

function Library() {
  //   const mangas = useRecoilValue(mangasState);
  return (
    <div>
      <h1>Search for your favourite manga!</h1>
      <h3>Try Berserk for example...</h3>
      <input type="text" placeholder="Search Berserk..." />

      <div className="optionLibrary">
        <span>Categories: </span>
        <select>
          <option>Action</option>
          <option>Adventure</option>
          <option>Fantasy</option>
          <option>Seinen</option>
          <option>Comedy</option>
          <option>Sports</option>
        </select>
      </div>
      {/* {mangas.slice(0, 25).map((e, i) => (
        <h1 key={i}>{e.title}</h1>
      ))} */}
    </div>
  );
}

export default Library;
