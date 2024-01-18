
import React, { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Col, Table } from "reactstrap";
import { DashboardDepartmentsProps } from "../interface";
import Link from "next/link";
import axiosApi from '@/helpers/axios';
import { Batch } from '@/app/interface';
import moment from 'moment';


const DashboardDepartmentsCard: React.FC<DashboardDepartmentsProps> = () => {

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
                                <Link
                                    className="button-link"
                                    href="/courses">
                                    {data.batchName}
                                </Link>
                            </td>
                            <td>
                                {data.description}
                            </td>
                            <td>
                                {moment(data.dateCreated).format('MMMM DD YYYY')}
                            </td>
                        </tr>
                    );

                })}
            </>
        );
    }

    return (
        <Card>
            <CardHeader tag="h1">
                <b>Departments</b>
            </CardHeader>
            <CardBody>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                        </tr>
                    </thead>
                    <tbody>{renderTableRows(departments)}
                    </tbody>
                </Table>
            </CardBody>
            <CardFooter>
                <Button color="primary"
                    size="sm">
                    <Link
                        className="button-link"
                        href="/departments">
                        View all departments
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default DashboardDepartmentsCard