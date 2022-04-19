import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import AddNew from "./AddNew";
import { useState } from "react";

import "./newExpense.css";

const NewExpense = (props) => {
    const { onAppendData } = props;
    const [add, setAdd] =  useState(false)
    const onExpenseDataHandler = (entered) => {
        const expenseData = { ...entered, id: Math.random().toString() };
        onAppendData(expenseData);
    };
    console.log(add);
    const onAddNewExpenseHandler = (entered) => {
        setAdd(entered);
    }
    const onResetAddNewHandler = (entered) => {
        setAdd(entered);
    }
    if (!add) {
        return (
            <Card className="new-expense">
                <AddNew onAddNewExpense={onAddNewExpenseHandler} />
            </Card>
        );
    } else if (add) {
        return (
            <Card className="new-expense">                
                <ExpenseForm
                    onExpenseData={onExpenseDataHandler}
                    onResetAddNew={onResetAddNewHandler} 
                />
            </Card>
        );
    }    
};

export default NewExpense;
