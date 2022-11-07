import React, { Suspense } from 'react';
import SingleView from './SingleView';

function Item() {
  return (
    <div>
      <Suspense fallback={<h1>Loading profile, please wait...</h1>}>
        <SingleView />
      </Suspense>
    </div>
  );
}

export default Item;
