import CustomerList from './CustomerList';
import BandList from './BandList';
import FriendList from './FriendList';
import BirthdayList from './BirthdayList';
import './App.css';
// import your arrays here
import { customers } from './customers.js';
import { bands } from './bands.js';
import { friends } from './friends.js';
import { birthdays } from './birthdays.js';

function App() {
  return (
    <div className="App">
      <div>Customers:
        <CustomerList customers={customers}/>
      </div>
      <div>Bands:
        <BandList bands={bands}/>
      </div>
      <div>Friends:
        <FriendList friends={friends}/>
      </div>
      <div>Birthdays:
        <BirthdayList birthdays={birthdays}/>
      </div>
    </div>
  );
}

export default App;
