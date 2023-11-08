import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

import { DataCardProps } from '../interface';
import './card.scss';

const DataCard: React.FC<DataCardProps> = (props) => {
  const { cardTitle, cardValue, chartData, styles } = props;
  return (
    <div tabIndex={0} className="card-overlay">
      <Card
        className="text-center"
        style={{ backgroundColor: styles?.cardBackground, borderColor: styles?.cardBackground }}
      >
        <CardTitle tag="h5">{cardTitle}</CardTitle>
        <div role="presentation" aria-hidden="true">
          <ResponsiveContainer width="100%" height={75}>
            <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <Area
                dataKey="dataValue"
                strokeWidth={0}
                stackId="2"
                stroke="#C87000"
                fill={styles?.fill}
                fillOpacity={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <CardText>{cardValue}</CardText>
      </Card>
    </div>
  );
};

export default DataCard;
