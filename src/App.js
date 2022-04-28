import CustomerList from './CustomerList';
import BandList from './BandList';
import './App.css';
// import your arrays here
import { customers } from './customers.js';
import { bands } from './bands.js';

function App() {
  return (
    <div className="App">
      <CustomerList customers={customers}/>
      <BandList bands={bands}/>
    </div>
  );
}

export default App;
