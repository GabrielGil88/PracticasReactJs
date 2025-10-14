import { Container } from "react-bootstrap";
import { UserProvider } from "./context/UserContext";
import UserCard from "./components/UserCard";
import CargarBotonDeUsuario from "./components/CargarBotonDeUsuario";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <UserProvider>
      <Container className="mt-5 align-items-center d-flex flex-column justify-content-center w-100 bg-dark text-white p-4">
        <h1>Usuario Aleatorio</h1>
        <UserCard />
        <CargarBotonDeUsuario />
      </Container>
    </UserProvider>    
  )
}

export default App
