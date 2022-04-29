import React from 'react';
import BirthdayItem from './BirthdayItem';


export default function BirthdayList({ birthdays }) {
  return (
    <div className='bithday-list'>
      {
        birthdays.map((birthday, index) => 
          <BirthdayItem 
            key={birthday.name + index} 
            birthdays={birthday}
          />)
      }
    </div>
  );
}

