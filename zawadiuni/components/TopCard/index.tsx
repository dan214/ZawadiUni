"use client"
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row, Table } from "reactstrap";
import { TopCardProps } from "../interface";
import Link from "next/link";


const TopCard: React.FC<TopCardProps> = (props) => {
    const { cardTitle, cardSubtitle, cardText } = props;
    return (
        <Row className="mb-3 mt-3"><Col md={{
            size: 12
        }} sm={{
            size: 12
        }} lg={{
            size: 12
        }}>
            <Card>
                <CardBody>
                    <CardTitle tag="h1">
                        <b>{cardTitle}</b>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {cardSubtitle}
                    </CardSubtitle>
                    <CardText>
                        {cardText}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
        </Row>
    );
};

export default TopCard