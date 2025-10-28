import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Dashboard = () => {
    const logout = useNavigate();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Container className="mt-5">
            <h2>Dashboard</h2>
            <p>ruta protegida</p>
            <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
        </Container>
    );
};


export default Dashboard;