import CustomerList from './CustomerList';
import './App.css';
// import your arrays here
import { customers } from './customers.js';

function App() {
  return (
    <div className="App">
      Current Customers:
      <CustomerList customers={customers}/>
    </div>
  );
}

export default App;
