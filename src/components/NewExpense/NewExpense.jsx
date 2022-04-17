import Card from "../Card/Card";
import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
    const { onAppendData } = props;
    const onExpenseDataHandler = (entered) => {
        const expenseData = { ...entered, id: Math.random().toString() };
        onAppendData(expenseData);
    };
    return (
        <Card className="new-expense">
            <ExpenseForm onExpenseData={onExpenseDataHandler} />
        </Card>
    );
};

export default NewExpense;
