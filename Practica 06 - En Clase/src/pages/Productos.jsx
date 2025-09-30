import { Card, Button, Row, Col, Container } from "react-bootstrap";


export default function Productos() {

    const productos = [
        { id: 1, nombre: "Producto 1", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 1", precio: 100 },
        { id: 2, nombre: "Producto 2", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 2", precio: 200 },
        { id: 3, nombre: "Producto 3", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 3", precio: 300 },
        { id: 4, nombre: "Producto 4", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 4", precio: 400 },
        { id: 5, nombre: "Producto 5", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 5", precio: 500 },
        { id: 6, nombre: "Producto 6", img: "https://placehold.co/300x200", descripcion: "Descripcion del producto 6", precio: 600 },
    ];

    return (
        <div>
            <Row>
                {productos.map((producto) => (
                <Col key={producto.id}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title>
                            <Card.Text>{producto.descripcion}</Card.Text>
                            <Card.Text>${producto.precio}</Card.Text>
                            <Button variant="primary">Agregar al carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </div>
    )
}