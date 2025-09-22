import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

const Main = () => {
    return (
        <main className="bg-light py-4 shadow-sm">
            <Container>
                <Row className="align-items-center">
                    <Col md={8}>
                        <h2>Bienvenido a Nuestra Empresa</h2>
                        <p className="lead">Esta empresa es ficticia, para practicar la creación de una aplicación utilizando React y Bootstrap para crear una interfaz amigable y responsiva.</p>
                        <Button variant="primary" href="#gallery">Ver Galería</Button>
                    </Col>
                    <Col md={4}>
                        <img 
                            src="https://picsum.photos/600/400" 
                            alt="Ejemplo" 
                            className="img-fluid rounded shadow-sm" 
                        />
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
export default Main;