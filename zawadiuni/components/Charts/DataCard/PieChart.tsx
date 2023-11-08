import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from 'recharts';

import { PieChartProps } from '../interface';

const StabilityPieChart: React.FC<PieChartProps> = (props) => {
  const { data } = props;
  const COLORS = ['#027C02', '#6F65DD', '#EE0700', '#017ACD', '#A76906'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel: React.ElementType = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        aria-label={`${(percent * 100).toFixed(0)}%`}
        tabIndex={0}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Card aria-label='Completed tests pie chart' tabIndex={0} className="text-center">
      <CardTitle tag="h5">Completed tests pie chart</CardTitle>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          <Pie
            dataKey="value"
            data={data}
            labelLine={false}
            outerRadius={200}
            fill="#003366"
            isAnimationActive={false}
            label={renderCustomizedLabel}
            cx="50%"
            cy="50%"
            legendType="circle"
            aria-label='Completed tests pie chart'
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default StabilityPieChart;