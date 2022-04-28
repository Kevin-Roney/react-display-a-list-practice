import React from 'react';
import BandItem from './BandItem';

export default function BandList({ bands }) {
  return (
    <div className='band-list'>
      {
        bands.map((band, index) => 
          <BandItem 
            key={band.name + index} 
            bands={band}
          />)
      }
    </div>
  );
}