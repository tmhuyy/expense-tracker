import Card from "../Card/Card";
import "./chartbar.css"
const ChartBar = (props) => {
    const { label, value, maxValue} = props;
    let height = "0%"
    if (maxValue > 0) {
        height = (value / maxValue) * 100 + "%"
    }
    return ( 
        <div className="chart-bar">
            <Card className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: height}}>
                </div>
            </Card>
            <div className="chart-bar__label">{ label }</div>
        </div>
     );
}
 
export default ChartBar;