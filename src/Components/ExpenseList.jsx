/* eslint-disable react/prop-types */

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <ul>
      {expenses.map((expense, index) => (
        <li key={index}>
          {expense.name} - Rs.{expense.amount.toFixed(2)}/- {expense.date}
          <button onClick={() => deleteExpense(index)} id="btn">
            <i className="fa-solid fa-trash"></i>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
