import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expenses.css";
import moment from "moment";
const Expenses = (props) => {
    const [year, setYear] = useState("2022");
    const { expenseItem } = props;
    const onYearHandler = (entered) => {
        setYear(entered);
    };
    return (
        <Card className="expenses">
            <ExpenseFilter onYear={onYearHandler} />
            {expenseItem.map((e) => {
                if (moment(e.expenseDate).format("YYYY") === year) {
                    return (
                        <ExpenseItem
                            id={e.id}
                            expenseDate={e.expenseDate}
                            expenseTitle={e.expenseTitle}
                            expenseAmount={e.expenseAmount}
                        />
                    );
                }
                
            })}
        </Card>
    );
};

export default Expenses;
