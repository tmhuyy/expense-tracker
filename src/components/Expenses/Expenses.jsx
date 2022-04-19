import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import "./expenses.css";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../Chart/ExpenseChart";
import moment from "moment";

const Expenses = (props) => {
    const [year, setYear] = useState("2022");
    const { expenseItem } = props;
    const onYearHandler = (entered) => {
        setYear(entered);
    };
    const filterByYear = expenseItem.filter(e => moment(e.expenseDate).format("YYYY") === year);
    console.log(filterByYear)
    return (
        <Card className="expenses">
            <ExpenseFilter onYear={onYearHandler} />
            <ExpenseChart filterByYear={ filterByYear}/>
            <ExpenseList
                filterByYear={ filterByYear}
            />
        </Card>
    );
};

export default Expenses;
