import {Navbar, Container, Nav, Button, NavbarCollapse} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Header()
{
    const navigate= useNavigate();
    const isAuth= localStorage.getItem("auth")==="true";

    const cerrarSesion=()=>{
        localStorage.removeItem("auth");
        navigate("/login");
    }
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">Mi App</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/productos">Productos</Nav.Link>

                        {/* Enlases que solo se muestran si el usuario esta auth */}
                        {isAuth && <Nav.Link as={Link} to="/admin">Administración</Nav.Link>}
                    </Nav>
                    <Nav>
                        {/* Mostrar boton de login o logout segun auth */}
                        {!isAuth ? (
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        ) : (
                            <Button variant="outline-light" onClick={cerrarSesion}>Cerrar Sesión</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}