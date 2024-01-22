"use client"
import TopCard from "@/components/TopCard";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import { Course } from "../interface";
import ViewIcon from "@/components/icons/ViewIcon";
import AddCourseModal from "@/components/Modal/AddCourseModal";

export default function Page() {

    const [courses, setCourses] = useState(Array<Course>);

    useEffect(() => {
        try {
            axiosApi.getAllData("course").then((response) => {
                setCourses(response.data);
            });
        }
        catch (error) {
            console.log(error);
        }

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
                            <td>
                                <Button type="button" color="primary"
                                    size="sm">
                                    <Link
                                        className="button-link"
                                        href={`/courses/${data.courseId}`}>
                                        {<ViewIcon />}View
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
                    <Card>
                        <CardHeader>
                            <Col md={{
                                size: 1
                            }} sm={{
                                size: 1
                            }} lg={{
                                offset: 10,
                                size: 4
                            }}>

                                <AddCourseModal />

                            </Col>
                        </CardHeader>
                        <CardBody>
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
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>

    );
}