import React from 'react';
import { Row } from 'react-bootstrap';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Table } from 'reactstrap';
import DashboardStudentsCard from '@/components/Students/DashboardStudentsCard';
import DashboardCoursesCard from '@/components/Courses/DashboardCoursesCard';


export default async function Home() {
  return (
    <>
      <Row className="mb-3 mt-3"><Col md={{
        size: 12
      }} sm={{
        size: 12
      }} lg={{
        size: 12
      }}>
        <Card>
          <CardBody>
            <CardTitle tag="h1">
              <b>Zawadi University</b>
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Dashboard
            </CardSubtitle>
            <CardText>
              Please review below data on Zawadi University
            </CardText>
          </CardBody>
        </Card></Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col xl={3} lg={12} md={12} sm={12} xs={24}>
        </Col>
      </Row>
      <Row>
        <DashboardStudentsCard />
        <DashboardCoursesCard />

      </Row>
      <Row><Col md={{
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