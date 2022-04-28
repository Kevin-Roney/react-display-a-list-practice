import CustomerList from './CustomerList';
import BandList from './BandList';
import FriendList from './FriendList';
import './App.css';
// import your arrays here
import { customers } from './customers.js';
import { bands } from './bands.js';
import { friends } from './friends';

function App() {
  return (
    <div className="App">
      <CustomerList customers={customers}/>
      <BandList bands={bands}/>
      <FriendList friends={friends}/>
    </div>
  );
}

export default App;
