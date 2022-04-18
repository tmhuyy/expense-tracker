import { useState } from "react";
import "./expenseForm.css";
const ExpenseForm = (props) => {
    const [expenseTitle, setTitle] = useState("");
    const [expenseAmount, setAmount] = useState("");
    const [expenseDate, setDate] = useState("");
    const { onExpenseData } = props;
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = { expenseTitle, expenseAmount, expenseDate };
        onExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
        // document.querySelector(".new-expense__actions").style.display = "none";
    };
    const cancelBtn = function () {
        document.querySelector(".new-expense__controls").style.display = "none";
    }
    return (
        <form onSubmit={submitHandler}>
            <section className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={expenseTitle}
                        placeholder="e.g Fix Laptop"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>  
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        placeholder="e.g 12.34"
                        value={expenseAmount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={expenseDate}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </section>
            <div className="new-expense__actions">
                {/* <button className="cancel" onClick={ cancelBtn }>Cancel</button> */}
                <button type="submit">Add Expense</button>
                {/* <button style="display: none">Add New Expense</button> */}
            </div>
        </form>
    );
};

export default ExpenseForm;
