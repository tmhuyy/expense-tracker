import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./expenses.css";
const Expenses = props => {
  const { expenseItem } = props;
  return (
    <Card className="expenses">
      {expenseItem.map((e) => {
        return (
          <ExpenseItem
            id={e.id}
            expenseDate={e.expenseDate}
            expenseTitle={e.expenseTitle}
            expenseAmount={e.expenseAmount}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
