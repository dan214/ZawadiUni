"use client"
import { Course } from "@/app/interface";
import TopCard from "@/components/TopCard";
import axiosApi from "@/helpers/axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardText, CardTitle, Table } from "reactstrap";

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
            <TopCard cardTitle="Courses"
                cardSubtitle="Courses"
                cardText="Please review the courses here below" />

            <Card body>
                <CardHeader>
                    Course
                </CardHeader>
                <CardBody>
                    <CardTitle tag="h1">
                        <b>Courses {course?.courseName}</b>
                    </CardTitle>
                    <CardText>

                    </CardText>
                </CardBody>
            </Card>
            <h1>Course:</h1>
        </>
    );
}