import React from 'react';

export default function CustomerItem({ customers }) {
  return (
    <div className='customer-item'>
      <h2>{customers.name} is a {customers.gender}</h2>
      <h2>They are {customers.age} years old and work at {customers.company}</h2>
      <h2>you can reach them at {customers.phone}</h2>
      <div>Known associates:
        <ul>
          {customers.friends.map(friend => <li key={friend}>{friend.name}</li>)}
        </ul>
      </div>  
    </div> 
  );
}

