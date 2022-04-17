import ExpenseForm from "./ExpenseForm";
import "./newExpense.css";

const NewExpense = (props) => {
    const { onAppendData } = props;
    const onExpenseDataHandler = (entered) => {
        const expenseData = { ...entered, id: Math.random().toString() };
        onAppendData(expenseData);
    };
    return (
        <section className="new-expense">
            <ExpenseForm onExpenseData={onExpenseDataHandler} />
        </section>
    );
};

export default NewExpense;
