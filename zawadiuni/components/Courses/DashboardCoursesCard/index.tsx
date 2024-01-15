"use client"
import { Button, Card, CardText, CardTitle, Col, Table } from "reactstrap";
import { DashboardCoursesProps } from "../interface";
import Link from "next/link";


const DashboardCoursesCard: React.FC<DashboardCoursesProps> = (props) => {
    return (
        <Col md={{
            size: 10
        }} sm={{
            size: 12
        }} lg={{
            size: 6
        }}>
            <Card body>
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
                <Col sm="8" md="8" lg="4">
                    <Button color="primary"
                        size="md">
                        <Link
                            className="button-link"
                            href="/students">
                            View all courses
                        </Link>
                    </Button>
                </Col>
            </Card>
        </Col>
    );
};

export default DashboardCoursesCard