"use client"
import DashboardCoursesCard from "@/components/Courses/DashboardCoursesCard";
import TopCard from "@/components/TopCard";
import { Col, Row } from "reactstrap";

export default function Page() {
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
        <DashboardCoursesCard />
        </Col>
      </Row>
        </>

    );
}