import React from 'react';
import BandItem from './BandItem';

export default function BandList({ bands }) {
  return (
    <div className='band-list'>
      {
        bands.map((band) => 
          <BandItem 
            key={band.name} 
            bands={band}/>)
      }
    </div>
  );
}

