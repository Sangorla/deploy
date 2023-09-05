import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjetas({personaje}) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={personaje.image} />
            <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Card.Text>
                    {personaje.species}
                </Card.Text>
                <Button variant="primary">{personaje.status}</Button>
            </Card.Body>
        </Card>
    );
}

export default Tarjetas;
