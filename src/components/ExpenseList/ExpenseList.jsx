import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expense_list.css";
import moment from "moment";

const ExpenseList = (props) => {
    const { expenseItem, year } = props;
    // TODO outputing conditional content
    // let expenseContent = <p className="expense-list-default">No expenses found</p>
    // const filterExpenseByYear = expenseItem.filter(expense => {
    //     return moment(expense.expenseDate).format("YYYY") === year
    // });
    // if (filterExpenseByYear.length > 0) {
    //     expenseContent = filterExpenseByYear.map(e => {
    //         return (
    //             <ExpenseItem
    //                 key={e.id}
    //                 expenseDate={e.expenseDate}
    //                 expenseTitle={e.expenseTitle}
    //                 expenseAmount={e.expenseAmount}
    //             />
    //         )
    //     })
    // }
    let expenseContent = <p className="expense-list-default">No expenses found</p>
    const filterByYear = expenseItem.filter(e => {
        return moment(e.expenseDate).format("YYYY") === year
    });
    if (filterByYear.length > 0) {
        expenseContent = filterByYear.map(e => {
            return (
                <ExpenseItem
                    key={e.id}
                    expenseDate={e.expenseDate}
                    expenseTitle={e.expenseTitle}
                    expenseAmount={e.expenseAmount}
                />
            )
        })
    }
    return ( 
        <ul className="expense-list">
            { expenseContent }
        </ul>
     );
}
 
export default ExpenseList;