import Chart from "./Chart";
import moment from "moment"

const changeToNumber = (month) => {
    if (month === "Jan") return 0
    if (month === "Feb") return 1
    if (month === "Mar") return 2
    if (month === "Apr") return 3
    if (month === "May") return 4
    if (month === "Jun") return 5
    if (month === "Jul") return 6
    if (month === "Aug") return 7
    if (month === "Sep") return 8
    if (month === "Oct") return 9
    if (month === "Nov") return 10
    if (month === "Dec") return 11
}
const ExpenseChart = (props) => {
    const { filterByYear } = props;
    const monthData = [
        { label: "Jan", value: 0 },
        { label: "Feb", value: 0},
        { label: "Mar", value: 0},
        { label: "Apr", value: 0},
        { label: "May", value: 0},
        { label: "Jun", value: 0},
        { label: "Jul", value: 0},
        { label: "Aug", value: 0},
        { label: "Sep", value: 0},
        { label: "Oct", value: 0},
        { label: "Nov", value: 0},
        { label: "Dec", value: 0},
    ]
    for (let data of filterByYear) {
        const month = moment(data.expenseDate).format("MMM")
        const number = changeToNumber(month);
        monthData[number].value += data.expenseAmount;
        console.log(monthData);
    }
    return ( 
        <div>
            <Chart monthData={ monthData }/>
        </div>
     );
}
 
export default ExpenseChart;