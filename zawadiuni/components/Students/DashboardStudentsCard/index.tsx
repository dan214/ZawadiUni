
import React, { useState, useEffect } from 'react';
import { Button, Card, CardText, CardTitle, Col, Table } from "reactstrap";
import { DashboardStudentsProps } from "../interface";
import Link from "next/link";


const DashboardStudentsCard: React.FC<DashboardStudentsProps> = () => {

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
                        </tr>
                    );

                })}
            </>
        );
    }

    return (
        <Card body>
            <CardTitle tag="h1">
                <b>Students</b>
            </CardTitle>
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
                <tbody>{renderTableRows(courses)}
                </tbody>
            </Table>
            <Col sm="8" md="8" lg="4">
                <Button color="primary"
                    size="md">
                    <Link
                        className="button-link"
                        href="/students">
                        View all students
                    </Link>
                </Button>
            </Col>
        </Card>
    );
};

export default DashboardStudentsCard