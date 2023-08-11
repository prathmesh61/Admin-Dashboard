import { Link } from "react-router-dom";
import "./ChartBox.scss";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};
const ChartBox = (props: Props) => {
  return (
    <div className="ChartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to={"/"} style={{ color: props.color }}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart width={300} height={100} data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <div
            className="per"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            45%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
