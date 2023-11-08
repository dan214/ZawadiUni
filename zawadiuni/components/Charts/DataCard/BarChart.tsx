import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { BarChartProps } from '../interface';

const StabilityBarChart: React.FC<BarChartProps> = (props) => {
  const { data } = props;

  const renderLabel = function (entry: any) {
    if (entry && data && data.length > 0) {
      let dataRow = data[entry.index];
      let labelValue = `Date ${dataRow.name} Passed ${dataRow.passedValue} User Error ${dataRow.userErrorValue} Infra Issues ${dataRow.infraValue} Product Issues ${dataRow.productValue} Unknown ${dataRow.unknownFails}`;
      return (
        <text
          x={entry.x}
          y={entry.y}
          textAnchor={'middle'}
          dominantBaseline="central"
          aria-label={`${labelValue}`}
          tabIndex={0}
        >
          .
        </text>
      );
    }

    return (<></>);
  }

  return (
    <Card tabIndex={0} aria-label='Completed tests bar graph' className="text-center">
      <CardTitle tag="h5">Completed tests bar graph</CardTitle>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={10} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar label={renderLabel} name="Passed" dataKey="passedValue" stackId="a" fill="#027C02" />
          <Bar name="User Errors" dataKey="userErrorValue" stackId="a" fill="#6F65DD" />
          <Bar name="Infra Issues" dataKey="infraValue" stackId="a" fill="#EE0700" />
          <Bar name="Product Issues" dataKey="productValue" stackId="a" fill="#017ACD" />
          <Bar name="Unknown" dataKey="unknownFails" stackId="a" fill="#A76906" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
export default StabilityBarChart;