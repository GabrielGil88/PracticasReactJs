import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";

const Gallery = () => {
    
    const imagenes = [
        {id: 1, src: "https://picsum.photos/300/200?1", title: "Imagen random 1", description: "lorem ipsum dolor sit amet."},
        {id: 2, src: "https://picsum.photos/300/200?2", title: "Imagen random 2", description: "lorem ipsum dolor sit amet. Consectetur adipiscing elit."},
        {id: 3, src: "https://picsum.photos/300/200?3", title: "Imagen random 3", description: "lorem ipsum dolor sit amet. Consectetur adipiscing elit sed do eiusmod."},
        {id: 4, src: "https://picsum.photos/300/200?4", title: "Imagen random 4", description: "lorem ipsum dolor sit amet. Consectetur adipiscing elit"},
    ]

    return (
        <Container className="my-4">
            <section>
                <h2 className="mb-4 text-center">Galería de Imágenes</h2>
                <Row>
                    {imagenes.map((img) => (    
                        <Col key={img.id} md={6} lg={3} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img variant="top" src={img.src} alt={img.title} />
                                <Card.Body>
                                    <Card.Title>{img.title}</Card.Title>
                                    <Card.Text>{img.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row> 
            </section>
        </Container>
    );
};

export default Gallery;