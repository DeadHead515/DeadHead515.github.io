import { Card, Row, Col, Container } from "react-bootstrap";
import React from "react";
import Ewok from './media/Ewok.png';

export const Projects= () => {
    const projectlist = [{title: 'Towers of Hano', img: {Ewok}, description: 'Text based game'}, 
    {title: 'Project 2', img: {Ewok}, description: 'Project 2 Description'}];
    
    return (
        
            <Container className='projects-div'>
                <Col lg={4}>
                    <Card className='projects'>
                        <Card.Img variant="top" src={Ewok}/>
                        <Card.Body>
                            <Card.Title>{projectlist[0].title}</Card.Title>
                            <Card.Text>
                                {projectlist[0].description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card className='projects'>
                        <Card.Img variant="top" src={Ewok}/>
                        <Card.Body>
                            <Card.Title>{projectlist[0].title}</Card.Title>
                            <Card.Text>
                                {projectlist[0].description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        );
    
}

