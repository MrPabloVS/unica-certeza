import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function Contacto() {
    return ( 
    <Row xs={1} md={2} className="g-4">
        
        <Col>
            <Card style={{  }}>
                <Card.Body>
                    <Card.Title>Lucas Martinez</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Productor y Lucutor</Card.Subtitle>
                    <Card.Text>
                        email: ztmlucas@gmail.com
                        alguna otra forma de comunicarse o descripcion
                    </Card.Text>
                    <Card.Link href="#">Instagram</Card.Link>
                    <Card.Link href="#">LinkedIn</Card.Link>
                </Card.Body>
            </Card>
        </Col>

        <Col>
        <Card style={{ }}>
                <Card.Body>
                    <Card.Title>Pablo Vazquez Soldano</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Locutor</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>

        <Col>
        <Card style={{ }}>
                <Card.Body>
                    <Card.Title>Pedro Costa del Vigo</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Produccion de Audio</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the 
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>

        <Col>
        <Card style={{  }}>
                <Card.Body>
                    <Card.Title>Nicolas Fernandez</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Produccion de Audio</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </Col>
        
    </Row> );
}

export default Contacto;