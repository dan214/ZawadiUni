"use client"
import { Course } from "@/app/interface";
import TopCard from "@/components/TopCard";
import DeleteIcon from "@/components/icons/DeleteIcon";
import EditIcon from "@/components/icons/EditIcon";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Row, Table } from "reactstrap";

export default function CoursePage({ params }: { params: { id: string } }) {
    const [course, setCourse] = useState<Course>();

    useEffect(() => {
        try {
            axiosApi.getCourseData(params.id).then((response) => {
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
                            <Button className="buttons-icons" color="danger" size="md">{<DeleteIcon />}Delete course</Button>
                        </Col>

                    </Row>

                </CardFooter>
            </Card>
        </>
    );
}