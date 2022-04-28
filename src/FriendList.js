import React from 'react';
import FriendItem from './FriendItem';

export default function FriendList({ friends }) {
  return (
    <div className='friend-list'>
      {
        friends.map((friend, index) =>
          <FriendItem 
            key={friend + index}
            friend={friend}/>)
      }
    </div>
  );
}

