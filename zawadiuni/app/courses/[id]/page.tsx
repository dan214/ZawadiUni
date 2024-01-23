"use client"
import { Course } from "@/app/interface";
import DeleteModal from "@/components/Modal/DeleteModal";
import TopCard from "@/components/TopCard";
import EditIcon from "@/components/icons/EditIcon";
import axiosApi from "@/helpers/axios";
import moment from "moment";
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

    }, []);

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
                            size: 4
                        }} sm={{
                            size: 4
                        }} lg={{
                            size: 4
                        }}>
                            Date added: <b>{moment(course?.dateCreated).format('MMMM DD YYYY')}</b>
                        </Col>
                        <Col md={{
                            size: 1
                        }} sm={{
                            size: 1
                        }} lg={{
                            offset: 4,
                            size: 4
                        }}>
                            <Button className="buttons-icons" color="primary" size="md">{<EditIcon />}Edit course</Button>
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