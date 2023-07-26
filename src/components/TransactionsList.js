import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
  const list = transactions.map((item) => {
    return (
      <Transaction
        key={item.id}
        date={item.date}
        description={item.description}
        category={item.category}
        amount={item.amount}
      />
    );
  });
  return (
    <div className="transaction-list">
      <table className="transaction-table">
        <tbody>
          <tr>
            <th>
              <h3 className="date">Date</h3>
            </th>
            <th>
              <h3 className="description">Description</h3>
            </th>
            <th>
              <h3 className="category">Category</h3>
            </th>
            <th>
              <h3 className="amount">Amount</h3>
            </th>
          </tr>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
