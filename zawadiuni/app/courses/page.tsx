"use client"
import TopCard from "@/components/TopCard";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import ViewIcon from "@/components/icons/ViewIcon";
import AddCourseModal from "@/components/Modal/AddCourseModal";
import { toastNotification } from "@/components/NotificationBar";

export default function Page() {

    const [courses, setCourses] = useState<any[]>([]);

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

    const handleAddCourse = async (item: { courseId: number; courseName: string, courseDescription: string, dateCreated: string }) => {
        try {
            const result = await axiosApi.postData('course', item);
            const data = result.data;
            toastNotification("success", "Successfully added course to our database")
        } catch (error) {
            console.error('An error occurred while adding the item', error);
            toastNotification("error", "There wa an error trying to add the course")
        }
        finally {
            toastNotification("success", "The course has successfully been added");
        }
    };


    const renderTableRows = () => {
        return (
            <>
                {courses.map((data) => {
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
                            {(data.batch == null)?
                            (<td>
                            <i>No department</i>
                        </td>):(<td>
                                <Link href={`/departments/${data.batch.batchId}`}>{data.batch?.batchName}</Link>
                            </td>)
                            }
                            
                            <td>
                                <Button type="submit" color="primary"
                                    size="md">
                                    <Link
                                        className="button-link"
                                        href={`/courses/${data.courseId}`}>View
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

                                <AddCourseModal onAddCourse={handleAddCourse} />

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
                                            Department
                                        </th>
                                        <th>
                                            View
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{renderTableRows()}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>

    );
}