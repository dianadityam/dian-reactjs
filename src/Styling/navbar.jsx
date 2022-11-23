import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';



export default class Navigation extends React.Component {

    render () {
        return (
            <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Dian Aditya</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#Bio">Bio</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#tugasKomponen">Tugas Basic Component</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        )
    }
}