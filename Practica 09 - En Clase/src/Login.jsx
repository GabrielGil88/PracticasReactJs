import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");




    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(username, password);


        if (success) {
            navigate("/dashboard");
        }
        else {
            setError("Usuario o contraseña incorrectos");
        }
    };

    return (
        <Container className="seccion">
            <Row className="w-100 justify-content-center">
                <Col md={8} lg={6} xl={4}>
                    <Card className="shadow-lg border-0 rounded-4 p-3">
                        <Card.Body>
                            <h2 className="text-center mb-4">Iniciar Sesión</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-4" controlId="formUsername">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese su usuario" required />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPassword">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                                </Form.Group>
                                <Button className="btn-primario w-100 my-3">
                                    Ingresar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default login;