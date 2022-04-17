import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenseItem = [
    {
        id: "e1",
        expenseDate: "2021-05-28",
        expenseTitle: "Car Insurance",
        expenseAmount: 294.67,
    },
    {
        id: "e2",
        expenseDate: "2022-10-21",
        expenseTitle: "Car Box",
        expenseAmount: 199.67,
    },
    {
        id: "e3",
        expenseDate: "2019-06-18",
        expenseTitle: "Car Care",
        expenseAmount: 499.99,
    },
    {
        id: "e4",
        expenseDate: "2020-07-20",
        expenseTitle: "Car Shell",
        expenseAmount: 500.67,
    },
];
const App = () => {
    const [data, setData] = useState(expenseItem);
    const onAppendDataHandler = (entered) => {
        setData((previous) => {
            return [entered, ...previous];
        })
    };
    return (
        <div className="App">
            <NewExpense onAppendData={onAppendDataHandler} />
            <Expenses expenseItem={data} />
        </div>
    );
};

export default App;
