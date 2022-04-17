import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
const Expenses = (props) => {
    const [year, setYear] = useState("2022");
    const { expenseItem } = props;
    const onYearHandler = (entered) => {
        setYear(entered);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter onYear={onYearHandler} />
            <ExpenseList expenseItem={expenseItem} year={ year }/>
        </Card>
    );
};

export default Expenses;
