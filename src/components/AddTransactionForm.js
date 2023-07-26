import React, { useState } from "react";

import Transaction from "./Transaction";

function AddTransactionForm({ handleFormUpdate }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleFormUpdate({ date, description, category, amount });
  }

  return (
    <div className="wrap">
      <form
        onSubmit={handleSubmit}
        className="submit-form"
      >
        <div className="inline-fields ">
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            className=" "
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            name="description"
            placeholder="Description"
            className=""
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="category"
            placeholder="Category"
            className=""
          />
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            className=""
          />
        </div>

        <div>
          <button
            className="submit-btn"
            type="submit"
            color="red"
          >
            SUBMIT
            <Transaction />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTransactionForm;
