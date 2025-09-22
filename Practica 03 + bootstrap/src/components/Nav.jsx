import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                <Navbar.Brand href="#logo" className="fw-bold">Empresa Techtop</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Productos</Nav.Link>
                    <Nav.Link href="#">Sobre nosotros</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;