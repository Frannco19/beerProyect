import { Badge, Card, Button} from "react-bootstrap";
import "./beerItem.css"

const BeerItem = ({
    beerName,
    beerStyle,
    price,
    available,
    dollarValue 
}) => {
  return (
    <Card className="beer-container mx-3 mb-2">
            <Card.Img
                variant="top"
            />
            <Card.Body>
                <div className="mb-2">
                    {available ?
                        <Badge bg="success">Disponible</Badge>
                        : <Badge bg="danger">Reservado</Badge>
                    }
                </div>
                <Card.Title>{beerName}</Card.Title>
                <Card.Subtitle>{beerStyle}</Card.Subtitle>
                <p>{price} precio</p>
                <p>{available ? "Disponible" : "No disponible"}</p>
                <Button>Actualizar título</Button>
                <p>Precio en pesos: ${(price * dollarValue).toFixed(2)} ARS</p>
            </Card.Body>
        </Card>
  )
}

export default BeerItem