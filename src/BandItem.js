import React from 'react';

export default function BandItem({ bands }) {
  return (
    <div className='band-item'>
      <h2>{bands.name}</h2>
      <h3>Genre: {bands.genre}</h3>
      <h3>Year Formed: {bands.year}</h3>
    </div>
  );
}

