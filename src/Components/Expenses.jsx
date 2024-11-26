import { useEffect, useState } from "react";
import "../App.css";
import Trackerdata from "./TrackerData";
import TrackerForm from "./TrackerForm";
import ExpenseList from "./ExpenseList";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [filterMonth, setFilterMonth] = useState("");

  // Load expenses from localStorage when the component mounts
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  // Save expenses to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add a new expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...newExpense, amount: parseFloat(newExpense.amount) },
    ]);
  };

  // Delete an expense
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  // Filter expenses by month
  const filteredExpenses = filterMonth
    ? expenses.filter(
        (expense) => new Date(expense.date).getMonth() === parseInt(filterMonth)
      )
    : expenses;

  // Calculate total expense
  const total = filteredExpenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div className="App">
      <h1>Expense Tracker</h1>

      {/* Form to add expenses */}
      <TrackerForm addExpense={addExpense} />

      {/* Month filter */}
      <Trackerdata setFilterMonth={setFilterMonth} filterMonth={filterMonth} />

      {/* Display expenses */}
      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />

      {/* Total Calculation */}
      <h2>Total: Rs:{total.toFixed(2)}/-</h2>
    </div>
  );
}

export default Expenses;
