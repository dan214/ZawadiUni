"use client"
import { Batch } from "@/app/interface";
import DeleteModal from "@/components/Modal/DeleteModal";
import TopCard from "@/components/TopCard";
import EditIcon from "@/components/icons/EditIcon";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, Col, Row } from "reactstrap";

export default function DepartmentPage({ params }: { params: { id: string } }) {
    const [department, setDepartment] = useState<Batch>();

    useEffect(() => {
        try {
            axiosApi.getData(params.id, "batch").then((response) => {
                setDepartment(response.data);
            });
        }
        catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <>
            <TopCard cardTitle="Department"
                cardSubtitle="Department"
                cardText="Please review the department here below" />
            <Card>
                <CardHeader>
                    <b>{department?.batchName}</b>
                </CardHeader>
                <CardBody>
                    <CardText>
                        {department?.description}
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
                            Date added: <b>{moment(department?.dateCreated).format('MMMM DD YYYY')}</b>
                        </Col>
                        <Col md={{
                            size: 1
                        }} sm={{
                            size: 1
                        }} lg={{
                            offset: 4,
                            size: 4
                        }}>
                            <Button className="buttons-icons" color="primary" size="md">{<EditIcon />}Edit department</Button>
                            {' '}
                            <DeleteModal itemId={params.id} itemType="batch" deleteText="Delete department" deleteTitle="Delete Department" deleteDescription="Do you really want to delete this department? This action is permanent" />
                        </Col>

                    </Row>

                </CardFooter>
            </Card>
        </>
    );
}