const AdddNew = (props) => {
    const { onAddNewExpense } = props;
    return ( 
        <section>
            <button onClick={ () => onAddNewExpense(true)}>Add New Expense</button>
        </section>
     );
}
 
export default AdddNew;