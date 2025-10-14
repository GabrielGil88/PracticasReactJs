import { Card,Spinner,Button } from 'react-bootstrap';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserCard = () => {

    const {user}= useContext(UserContext);

    if(!user){
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    }
    return (
        <Card style={{ width: '24rem', height: '100%' }} className="mb-3">
            <Card.Img variant="top" src={user.picture.large} />
            <Card.Body>
                <Card.Title>{user.name.first} {user.name.last}</Card.Title>
                <Card.Text>
                    <b>Email:</b> {user.email} <br />
                    <b>Teléfono:</b> {user.phone} <br />
                    <b>Ciudad:</b> {user.location.city} <br />
                    <b>País:</b> {user.location.country}
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default UserCard;