import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import DataCard from '../components/Charts/DataCard';
import StabilityPieChart from '../components/Charts/DataCard/PieChart';
import StabilityLineChart from '../components/Charts/DataCard/BarChart';
import axiosApi from '@/helpers/axios';

export default async function Home() {

  const courses = await getData()

  return (
    <div className="stability-report">
      <Row className="mb-4 mt-4">
        <Col xl={3} lg={12} md={12} sm={12} xs={24}>
          {/* <DataCard
            cardTitle="Total Completed Tests"
            cardValue={courses.toString()}
            chartData={courses}
            styles={{
              cardBackground: '#0175e4',
              fill: '#092453',
            }}
          /> */}
        </Col>
        <Col xl={3} lg={12} md={12} sm={12} xs={24}>
          {/* <DataCard
            cardTitle="Total User Errors"
            cardValue={chartsData.totalUserErrors.toString()}
            chartData={chartsData.totalUserErrorFailsChart}
            styles={{
              cardBackground: '#7066E0',
              fill: '#4d0099',
            }}
          /> */}
        </Col>
        <Col xl={3} lg={12} md={12} sm={12} xs={24}>
          {' '}
          {/* <DataCard
            cardTitle="Total Infra Fails"
            cardValue={chartsData.totalInfraFails.toString()}
            chartData={chartsData.totalInfraFailsChart}
            styles={{
              cardBackground: '#DC353D',
              fill: 'red',
            }}
          /> */}
        </Col>
        <Col xl={3} lg={12} md={12} sm={12} xs={24}>
          {/* <DataCard
            cardTitle="Stability"
            cardValue={chartsData.overallStability.toString() + ' %'}
            chartData={chartsData.stabilityChart}
            styles={{
              cardBackground: '#027C02',
              fill: '#158765',
            }}
          /> */}
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {/* <StabilityPieChart data={chartsData.pieChartData} /> */}
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {/* <StabilityLineChart data={chartsData.lineChartData} /> */}
        </Col>
      </Row>


    </div>
  )
}


async function getData() {

  const suffixUrl = `/course`;
  const courses = await axiosApi.getData(suffixUrl);
  console.log("calling");
  console.log(courses);
  return courses;
}