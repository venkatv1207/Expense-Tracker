/* eslint-disable react/prop-types */
import { useState } from "react";

function TrackerForm({ addExpense }) {
  const [newExpense, setNewExpense] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newExpense.name && newExpense.amount && newExpense.date) {
      addExpense(newExpense);
      setNewExpense({ name: "", amount: "", date: "" }); // Reset form fields
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={newExpense.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newExpense.date}
          onChange={handleChange}
          required
        />
        <button type="submit" id="submit">
          Add Expense
        </button>
      </form>
      <hr />
    </>
  );
}

export default TrackerForm;
