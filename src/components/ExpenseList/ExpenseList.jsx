import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expense_list.css";
import moment from "moment";
const ExpenseList = (props) => {
    const { expenseItem, year } = props;
    return ( 
        <ul className="expense-list">
            {expenseItem.map((e) => {
                if (moment(e.expenseDate).format("YYYY") === year) {
                    return (
                        <ExpenseItem
                            key={e.id}
                            expenseDate={e.expenseDate}
                            expenseTitle={e.expenseTitle}
                            expenseAmount={e.expenseAmount}
                        />
                    );
                }
            })}
        </ul>
     );
}
 
export default ExpenseList;