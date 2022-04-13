import "./expense.css";
import moment from "moment";
import Card from "../Card/Card";
import { useState } from "react";
const ExpenseItem = props => {
  const { id, expenseDate, expenseTitle, expenseAmount } = props;
  const [title, setTitle] = useState(expenseTitle);
  return (
    <Card className="expense-item">
      <div className="expense-date">
        {moment(expenseDate).format("LL")}
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={ () => setTitle("hello")}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
