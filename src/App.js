import "./App.css";
import NewExpense from "./components/new-expenses/NewExpense";
import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const saveExpense = (savedExpense) => {
    setExpenses((previousExpenses) => {
      return [savedExpense, ...previousExpenses];
    });
  };

  const deleteExpense = (id) => {
    console.log(id);
    let filteredExpenses = expenses.filter((e) => e.id !== id);
    setExpenses((_) => {
      return [...filteredExpenses];
    });
  };

  return (
    <div className="bg-zinc-700 px-10 sm:px-24 py-5">
      <NewExpense saveExpenseHandler={saveExpense}></NewExpense>

      <div className="bg-zinc-800 py-5 px-10 rounded-lg">
        <Expenses
          expenses={expenses}
          deleteExpenseHandler={deleteExpense}
        ></Expenses>
      </div>
    </div>
  );
};

export default App;
