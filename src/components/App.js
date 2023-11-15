import React, { useState, useEffect } from 'react';
import ListTransaction from './ListTransaction';
import FormTransaction from './FormTransaction';


function App() {
  // State variables
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

const API_URL ='http://localhost:3000/transactions'
  // Fetch data and update state
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  // Handle search
  function handleSearch ()  {
    const filtered = transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };


  // Update filtered transactions when searchTerm changes
  useEffect(() => {
    handleSearch();
  }, [searchTerm, transactions]);


  return (
    <div className="App">
      <div>
        <h1>Transactions</h1>
        <div>
          <input
            type="text"
            placeholder="Please search here"
            value={searchTerm}
          
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>


      {/* Display the filtered transactions */}
      {filteredTransactions && <ListTransaction transaction={filteredTransactions} />}


     
      <div>
        <h1>Add Transaction</h1>
        <FormTransaction />
      </div>
    </div>
  );
};


export default App;


