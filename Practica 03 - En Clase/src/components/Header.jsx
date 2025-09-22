import React from "react";
import {Container} from "react-bootstrap";

const Header = () => {
    
    return (
        <header className="bg-black py-3 shadow-sm">
            <Container>
                <h1 className="text-white">Mi Aplicación React - Práctica Nº3</h1>
                <p className="text-white lead">Página de prueba</p>
            </Container>
        </header>
        
    );
};

export default Header;