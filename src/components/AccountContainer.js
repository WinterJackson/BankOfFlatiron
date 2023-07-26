
import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((resp) => resp.json())
      .then((data) => {
        setTransactions(data);
        setSearch(data);
      });
  }, []);

  function handleSearch(e) {
    setTransactions(
      search.filter((transaction) => {
        return transaction.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  }

  function handleFormUpdate(formData) {
    // create a new array with the form data added to it
    const updatedTable = [...transactions, formData];
    // update the transactions state with the new array
    setTransactions(updatedTable);
    // send the updated data to the server
    fetch("http://localhost:8001/transactions", { 
      method: "POST",
      body: JSON.stringify(updatedTable),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="">
      <div className="">
        <div className="search">
          <Search handleSearch={handleSearch} />
        </div>
      </div>

      <div className="transaction-form">
        <AddTransactionForm handleFormUpdate={handleFormUpdate} />
        <TransactionsList transactions={transactions} />
      </div>
    </div>
  );
}

export default AccountContainer;
