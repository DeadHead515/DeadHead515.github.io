import Nav from 'react-bootstrap/Nav';
import React from 'react';


export class Navbar extends React.Component {
    render(){
        return (
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#about">Interests</Nav.Link>
                </Nav.Item>
            </Nav>
        )

        };
}

