import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ListaItems.css';

function ListaItems() {
  return (
    <Container>
      <Row className='text-center' >
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"/>
            <Card.Body>
              <Card.Title>Raleigh Mojave 4.0</Card.Title>
              <Card.Text>Rodado 29 21v Color: Negro y gris.</Card.Text>
              <Button variant="danger">Ver Producto</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top" src="src\imagenes\Bicicleta-Rango-Probike-R26-21v-NaranjaNegro-1.jpg"/>
            <Card.Body>
              <Card.Title>Bicicleta Rango Probike</Card.Title>
              <Card.Text>Rodado26 21v Color: Naranja y negro.</Card.Text>
              <Button variant="danger">Ver Producto</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"src="src\imagenes\Bicicleta-SBK-Fatboy-X8-R26-NegroRojo.jpg"/>
            <Card.Body>
              <Card.Title>Bicicleta SBK Fatboy</Card.Title>
              <Card.Text>Rodado 26 X8 Color: Negro y rojo.</Card.Text>
              <Button variant="danger">Ver Producto</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="src\imagenes\Zenith-Cima-URB-R28-Azul.jpg" />
            <Card.Body>
              <Card.Title>Zenith Cima URB</Card.Title>
              <Card.Text>Rodado 28 21v Color: Azul.</Card.Text>
              <Button variant="danger">Ver Producto</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ListaItems;