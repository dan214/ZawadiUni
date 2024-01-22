"use client"
import TopCard from "@/components/TopCard";
import { Batch, Course } from "../interface";
import { useEffect, useState } from "react";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import Link from "next/link";
import { Button, Row, Col, Card, Table } from "reactstrap";
import ViewIcon from "@/components/icons/ViewIcon";
import { toastNotification } from "@/components/NotificationBar";

export default function Page() {
    const [departments, setDepartments] = useState(Array<Batch>);

    useEffect(() => {
        try {
            axiosApi.getAllData("batch").then((response) => {
                setDepartments(response.data);
            });
        }
        catch (error) {
            console.log(error);
        }

    }, []);

    const renderTableRows = (tableData: Array<Batch>) => {
        return (
            <>
                {tableData.map((data, index) => {
                    return (
                        <tr key={data.batchId}>
                            <th scope="row">
                                {data.batchId}
                            </th>
                            <td>
                                {data.batchName}
                            </td>
                            <td>
                                {data.description}
                            </td>
                            <td>
                                {moment(data.dateCreated).format('MMMM DD YYYY')}
                            </td>
                            <td>
                                <Button type color="primary"
                                    size="md">
                                    <Link
                                        className="button-link"
                                        href={`/departments/${data.batchId}`}>
                                        {<ViewIcon />} View
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
        <><TopCard cardTitle="Departments"
            cardSubtitle="Departments"
            cardText="Please review the courses here below" />

            <Row className="mb-3 mt-3">
                <Col md={{
                    size: 10
                }} sm={{
                    size: 12
                }} lg={{
                    size: 12
                }}>
                    <Card body>
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
                            <tbody>{renderTableRows(departments)}
                            </tbody>
                        </Table>
                    </Card>
                </Col>

            </Row>
        </>

    );
}