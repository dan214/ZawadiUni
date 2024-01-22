"use client"
import React from 'react';
import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Row, Table } from 'reactstrap';
import DashboardCoursesCard from '@/components/Courses/DashboardCoursesCard';
import TopCard from '@/components/TopCard';
import DashboardDepartmentsCard from '@/components/Departments/DashboardDepartmentsCard';


export default function Home() {
  return (
    <>
      <TopCard cardTitle="Zawadi University"
        cardSubtitle="Zawadi University"
        cardText="Please review the data here below" />

      <Row className="mb-3 mt-3">
        <Col md={{
          size: 10
        }} sm={{
          size: 12
        }} lg={{
          size: 12
        }}>
          <DashboardCoursesCard />

        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col md={{
          size: 10
        }} sm={{
          size: 12
        }} lg={{
          size: 12
        }}>
          <DashboardDepartmentsCard />
        </Col>
      </Row>
    </>
  )
}