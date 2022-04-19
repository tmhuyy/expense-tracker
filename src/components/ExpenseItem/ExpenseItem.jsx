import "./expense.css";
import moment from "moment";
import Card from "../Card/Card";
const ExpenseItem = (props) => {
    const { expenseDate, expenseTitle, expenseAmount } = props;
    return (
        <li>
            <Card className="expense-item">
                <div className="expense-date">
                    {moment(expenseDate).format("LL")}
                </div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
