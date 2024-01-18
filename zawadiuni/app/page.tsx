"use client"
import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Table } from 'reactstrap';
import DashboardStudentsCard from '@/components/Students/DashboardStudentsCard';
import DashboardCoursesCard from '@/components/Courses/DashboardCoursesCard';
import TopCard from '@/components/TopCard';


export default function Home() {
  return (
    <>
      <TopCard cardTitle="Zawadi University"
        cardSubtitle="Zawadi University"
        cardText="Please review the data here below" />

      <Row className="mb-3 mt-3">
        <DashboardStudentsCard />
        <Col md={{
          size: 10
        }} sm={{
          size: 12
        }} lg={{
          size: 6
        }}>
          <DashboardCoursesCard />
        </Col>
      </Row>

      <Row className="mb-3 mt-3"><Col md={{
        size: 5
      }} sm={{
        size: 5
      }} lg={{
        size: 6
      }}>    <Card body>
          <CardTitle tag="h1">
            <b>Students</b>
          </CardTitle>
          <CardText>
            <Table striped>
              <thead>
                <tr>
                  <th>
                    #
                  </th>
                  <th>
                    First Name
                  </th>
                  <th>
                    Last Name
                  </th>
                  <th>
                    Username
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    1
                  </th>
                  <td>
                    Mark
                  </td>
                  <td>
                    Otto
                  </td>
                  <td>
                    @mdo
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    2
                  </th>
                  <td>
                    Jacob
                  </td>
                  <td>
                    Thornton
                  </td>
                  <td>
                    @fat
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    3
                  </th>
                  <td>
                    Larry
                  </td>
                  <td>
                    the Bird
                  </td>
                  <td>
                    @twitter
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardText>
        </Card></Col><Col md={{
          size: 5
        }} sm={{
          size: 5
        }} lg={{
          size: 6
        }}>    <Card body>
            <CardTitle tag="h1">
              <b>Courses</b>
            </CardTitle>
            <CardText>
              <Table striped>
                <thead>
                  <tr>
                    <th>
                      #
                    </th>
                    <th>
                      First Name
                    </th>
                    <th>
                      Last Name
                    </th>
                    <th>
                      Username
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      1
                    </th>
                    <td>
                      Mark
                    </td>
                    <td>
                      Otto
                    </td>
                    <td>
                      @mdo
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      2
                    </th>
                    <td>
                      Jacob
                    </td>
                    <td>
                      Thornton
                    </td>
                    <td>
                      @fat
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      3
                    </th>
                    <td>
                      Larry
                    </td>
                    <td>
                      the Bird
                    </td>
                    <td>
                      @twitter
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardText>
          </Card></Col></Row>
    </>
  )
}