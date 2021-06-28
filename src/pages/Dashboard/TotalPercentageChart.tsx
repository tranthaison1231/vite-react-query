import { Card } from 'antd';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const DATA = [
  {
    name: 'Group A',
    value: 400,
  },
  {
    name: 'Group B',
    value: 300,
  },
  {
    name: 'Group C',
    value: 300,
  },
  {
    name: 'Group D',
    value: 200,
  },
  {
    name: 'Group E',
    value: 278,
  },
  {
    name: 'Group F',
    value: 189,
  },
];

const TotalPercentageChart = () => {
  return (
    <Card title="Total Percentage">
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            data={DATA}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default TotalPercentageChart;
