import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenseItem = [
    {
      id: "e1",
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "Car Insurance",
      expenseAmount: 294.67,
    },
    {
      id: "e2",
      expenseDate: new Date(2022, 2, 21),
      expenseTitle: "Car Box",
      expenseAmount: 199.67,
    },
    {
      id: "e3",
      expenseDate: new Date(2019, 2, 18),
      expenseTitle: "Car Care",
      expenseAmount: 499.99,
    },
    {
      id: "e4",
      expenseDate: new Date(2020, 7, 20),
      expenseTitle: "Car Shell",
      expenseAmount: 500.67,
    },
  ];
  return (
    <div className="App">
      <Expenses expenseItem={ expenseItem }/>
    </div>
  );
}

export default App;
