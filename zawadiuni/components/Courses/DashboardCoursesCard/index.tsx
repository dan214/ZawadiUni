import React, { useState, useEffect } from 'react';
import { Button, Card, CardText, CardTitle, Col, Table } from "reactstrap";
import { DashboardCoursesProps } from "../interface";
import Link from "next/link";
import { Course } from '@/app/interface';
import moment from 'moment';


const DashboardCoursesCard: React.FC<DashboardCoursesProps> = (props) => {
    const [courses, setCourses] = useState(Array<Course>);

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

    const renderTableRows = (tableData: Array<Course>) => {
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
                        </tr>
                    );

                })}
            </>
        );
    }

    return (

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
                                Course Name
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Date Created
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderTableRows(courses)}
                    </tbody>
                </Table>
            </CardText>
            <Col sm="8" md="8" lg="4">
                <Button color="primary"
                    size="md">
                    <Link
                        className="button-link"
                        href="/courses">
                        View all courses
                    </Link>
                </Button>
            </Col>
        </Card>
    );
};

export default DashboardCoursesCard