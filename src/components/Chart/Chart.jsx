import ChartBar from "./ChartBar";
import "./chart.css"
import Card from "../Card/Card";
const Chart = (props) => {
    const { monthData } = props;
    const values = monthData.map(e => e.value);
    const maxValue = Math.max(...values);
    return ( 
        <Card className="chart">
            {monthData.map(e => {
                return (
                    <ChartBar
                        key={e.label}
                        value={e.value}
                        label={e.label}
                        maxValue={ maxValue }
                    />
                )
            })}
            
        </Card>
     );
}
 
export default Chart;