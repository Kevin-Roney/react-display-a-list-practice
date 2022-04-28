import React from 'react';

export default function BirthdayItem({ birthdays }) {
  return (
    <div className='birthday-item'>
      <h3>{birthdays.name}</h3>
      <h5>{birthdays.birthday}</h5>
      <ul>
        {
          birthdays.giftideas.map((gift, index) => 
            <li key={gift + index}>{gift}</li>)
        }
      </ul>
    </div>
  );
}

