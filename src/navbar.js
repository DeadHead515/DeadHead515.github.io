import Nav from 'react-bootstrap/Nav';
import React from 'react';


export class Navbar extends React.Component {
    render(){
        return (
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Nav.Link style={{color: 'white', fontWeight:'bolder'}} href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'white', fontWeight:'bolder'}} eventKey="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'white', fontWeight:'bolder'}} eventKey="#about">Interests</Nav.Link>
                </Nav.Item>
            </Nav>
        )

        };
}

