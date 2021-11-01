import { Card, Row, Col } from "react-bootstrap";
import React from "react";
import Ewok from './media/Ewok.png';
export class Projects extends React.Component {
    render() {
        return (
            <Row xs={1} md={2} className="g-4">
                {Array.from({length: 2}).map((_, idx) => (
                    <Col>
                        <Card className='projects'>
                            <Card.Img variant="top" src={Ewok}/>
                            <Card.Body>
                                <Card.Title>CARD TITLE TEST</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>);
    }
}
