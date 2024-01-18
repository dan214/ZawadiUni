"use client"
import DashboardCoursesCard from "@/components/Courses/DashboardCoursesCard";
import TopCard from "@/components/TopCard";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardTitle, Col, Row, Table } from "reactstrap";

export default function Page() {

    const [courses, setCourses] = useState(Array<any>);

    useEffect(() => {
        const getAllCourses = async () => {
            try {
                const res = await fetch(
                    `https://localhost:7250/course`
                );
                const data = await res.json();

                setCourses(data);
            } catch (error) {
                //const errorMessage = apiErrorHandler(error, 'Get courses redux action');
                //toastNotification('error', errorMessage);
                console.log(error);
            }
        }
        getAllCourses();
    }, []);

    const renderTableRows = (tableData: Array<any>) => {
        return (
            <>
                {tableData.map((data, index) => {
                    return (
                        <tr key={data.courseId}>
                            <th scope="row">
                                {data.courseId}
                            </th>
                            <td>
                                {data.courseName}
                            </td>
                            <td>
                                {data.description}
                            </td>
                            <td>
                                {moment(data.dateCreated).format('MMMM DD YYYY')}
                            </td>
                            <td>
                                <Button color="primary"
                                    size="md">
                                    <Link
                                        className="button-link"
                                        href={`/courses/${data.courseId}`}>
                                        View
                                    </Link>
                                </Button>
                            </td>
                        </tr>
                    );

                })}
            </>
        );
    }

    return (
        <><TopCard cardTitle="Courses"
            cardSubtitle="Courses"
            cardText="Please review the courses here below" />

            <Row className="mb-3 mt-3">
                <Col md={{
                    size: 10
                }} sm={{
                    size: 12
                }} lg={{
                    size: 12
                }}>
                    <Card body>
                        <CardTitle tag="h1">
                            <b>Courses</b>
                        </CardTitle>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Date Created
                                    </th>
                                    <th>
                                        View
                                    </th>
                                </tr>
                            </thead>
                            <tbody>{renderTableRows(courses)}
                            </tbody>
                        </Table>
                    </Card>
                </Col>

            </Row>
        </>

    );
}