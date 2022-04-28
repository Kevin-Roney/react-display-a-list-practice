import React from 'react';

export default function CustomerItem({ customers }) {
  return (
    <div className='customer-item'>
      <h5>{customers.name} is a {customers.gender}</h5>
      <h5>They are {customers.age} years old and work at {customers.company}</h5>
      <h5>you can reach them at {customers.phone}</h5>
      <div>Known associates:
        <ul>
          {customers.friends.map(friend => <li key={friend}>{friend.name}</li>)}
        </ul>
      </div>  
    </div> 
  );
}

