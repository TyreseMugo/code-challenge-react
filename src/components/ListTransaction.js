import React, { useState } from 'react';

// import Delete from './delete';
function ListTransaction({ transaction }) {
  const [data, setData] = useState(transaction);
  console.log(data);








  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>description</th>
            <th>category</th>
            <th>date</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((element) => (
            <tr key={element.id}>
              <td>{element.description}</td>
              <td>{element.category}</td>
              <td>{element.date}</td>
              <td>{element.amount}</td>
                <td>
                    {/* <Delete data={data} setData={setData} dataId={element.id} /> */}
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}




export default ListTransaction;






