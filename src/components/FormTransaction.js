import React, { useState } from 'react';
import ListTransaction from './ListTransaction';




function FormTransaction ()  {
  // State variables
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });




  const [form, setForm] = useState([]);




  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    setForm([...form, formData]);




   
//fetch to submit form data
    fetch( 'http://localhost:3000/transactions',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
  }
//JSX form
  return (
    <form onSubmit={handleSubmit}>
      <div>
    {/* Transaction date input */}
        <label style={{paddingTop:"40px"}}>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={(event) => setFormData({ ...formData, date: event.target.value })}
        />
      </div>
      <div>
      {/* //Transaction description input */}
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(event) => setFormData({ ...formData, description: event.target.value })}
        />
      </div>
      <div>
      {/* //Transaction Category input */}
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={(event) => setFormData({ ...formData, category: event.target.value })}
        />
      </div>
      <div>
      {/* //Transaction Amount input */}
        <label>Amount:</label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={(event) => setFormData({ ...formData, amount: event.target.value })}
        />
      </div>
      {/* //Submit button */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};




export default FormTransaction;







