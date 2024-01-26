"use client"
import TopCard from "@/components/TopCard";
import { Batch, Course } from "../interface";
import { useEffect, useState } from "react";
import axiosApi from "@/helpers/axios";
import moment from "moment";
import Link from "next/link";
import { Button, Row, Col, Card, Table, CardHeader, CardBody } from "reactstrap";
import ViewIcon from "@/components/icons/ViewIcon";
import AddModal from "@/components/Modal/AddDepartmentModal";
import AddDepartmentModal from "@/components/Modal/AddDepartmentModal";
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

    const handleAddDepartment = async (item: { batchId: number; batchName: string, description: string, dateCreated: string }) => {
        try {
            const result = await axiosApi.postData('batch', item);
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
                                <Button type="button" color="primary"
                                    size="md">
                                    <Link
                                        className="button-link"
                                        href={`/departments/${data.batchId}`}>View
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

                                <AddDepartmentModal onAddDepartment={handleAddDepartment} />

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
                                <tbody>{renderTableRows(departments)}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>

            </Row>
        </>

    );
}