import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";



const NewBeer = ({ onBeerAdded }) => {
    const [beerName, setBeerName] = useState('');
    const [beerStyle, setBeerStyle] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(false);

    const handleChangeBeerName = (event) => {
        setBeerName(event.target.value)
    }

    const handleChangeBeerStyle = (event) => {
        setBeerStyle(event.target.value)
    }

    const handleChangePrice = (event) => {
        setPrice(event.target.value)
    }

    const handleChangeAvailability = (event) => {
        setAvailable(event.target.checked)
    }

    const handleAddBeer = (event) => {
        event.peventDefault();
        const newBeer = {
            beerName,
            beerStyle,
            price,
            available
        };

        onBeerAdded(newBeer);
        setBeerName('');
        setBeerStyle('');
        setPrice('');
        setAvailable(false);
    }

    return (
        <Card>
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddBeer} >
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="beerName">
                                <Form.Label>Nombre de Cerveza</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar Nombre"
                                    onChange={handleChangeBeerName}
                                    value={beerName}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="beerStyle">
                                <Form.Label>Estilo de Cerveza</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar Estilo"
                                    onChange={handleChangeBeerStyle}
                                    value={beerStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar Precio"
                                    max={5}
                                    min={0}
                                    onChange={handleChangePrice}
                                    value={price}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleChangeAvailability}
                                checked={available}

                            />
                            <Button variant="primary" type="submit">
                                Agregar Cerveza
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    
  )
}

export default NewBeer