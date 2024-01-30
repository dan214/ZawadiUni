"use client"
import { Course } from "@/app/interface";
import DeleteModal from "@/components/Modal/DeleteModal";
import EditCourseModal from "@/components/Modal/EditCourseModal";
import { toastNotification } from "@/components/NotificationBar";
import TopCard from "@/components/TopCard";
import EditIcon from "@/components/icons/EditIcon";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, Col, Row } from "reactstrap";

export default function CoursePage({ params }: { params: { id: string } }) {
    const [course, setCourse] = useState<Course>();

    useEffect(() => {
        try {
            axiosApi.getData(params.id, "course").then((response) => {
                setCourse(response.data);
            });
        }
        catch (error) {
            console.log(error);
        }

    }, [params.id]);

    const handleEditCourse = async (course: Course) => {
        try {
            console.log("edited course, submitting");
            console.log(course);
            const result = await axiosApi.putData('course',course.courseId.toString(), course);
            toastNotification("success", "Successfully added course to our database")
        } catch (error) {
            console.error('An error occurred while adding the item', error);
            toastNotification("error", "There wa an error trying to add the course")
        }
        finally {
            toastNotification("success", "The course has successfully been added");
        }
    };

    return (
        <>
            <TopCard cardTitle="Course"
                cardSubtitle="Course"
                cardText="Please review the courses here below" />
            <Card>
                <CardHeader>
                    <b>{course?.courseName}</b>
                </CardHeader>
                <CardBody>
                    <CardText>
                        {course?.description}
                    </CardText>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col md={{
                            size: 3
                        }} sm={{
                            size: 3
                        }} lg={{
                            size: 3
                        }}>
                            Date added: <b>{moment(course?.dateCreated).format('MMMM DD YYYY')}</b>
                        </Col>

                        <Col md={{
                            size: 3
                        }} sm={{
                            size: 3
                        }} lg={{
                            size: 3
                        }}>
                            
                            Department: <Link href={`/departments/${course?.batch?.batchId}`}><b>{course?.batch?.batchName}</b></Link>
                        </Col>

                        <Col md={{
                            size: 1
                        }} sm={{
                            size: 1
                        }} lg={{
                            offset: 2,
                            size: 4
                        }}>
                             <EditCourseModal onEditCourse={handleEditCourse} course={course} />
                            
                            {' '}
                            <DeleteModal
                                itemId={params.id}
                                itemType="course"
                                deleteText="Delete course"
                                deleteTitle="Delete Course"
                                deleteDescription="Do you really want to delete this course? This action is permanent"
                                redirectUrl="courses" />
                        </Col>

                    </Row>

                </CardFooter>
            </Card>
        </>
    );
}