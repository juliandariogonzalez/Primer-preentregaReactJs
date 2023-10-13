import {  Row, Col, Card, Button } from 'react-bootstrap';
import './ListaItems.css';
import { Link } from 'react-router-dom';

function ListaItems() {
  return (
    <div className='Card-List'>

      <Row >
        <Col>
          <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top"src="src\imagenes\Bicicleta-Raleigh-Mojave-4.0-R29-2023-NegroGris.jpg"/>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Raleigh Mojave 4.0</Card.Title>
              <Card.Text>Rodado 29 21v Color: Negro y gris.</Card.Text>
              <Link to="/detailItem"> <Button variant="danger">Ver Producto</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top" src="src\imagenes\Bicicleta-Rango-Probike-R26-21v-NaranjaNegro-1.jpg"/>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Bicicleta Rango Probike</Card.Title>
              <Card.Text>Rodado26 21v Color: Naranja.</Card.Text>
              <Link to="/detailItem"> <Button variant="danger">Ver Producto</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant="top"src="src\imagenes\Bicicleta-SBK-Fatboy-X8-R26-NegroRojo.jpg"/>
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Bicicleta SBK Fatboy</Card.Title>
              <Card.Text>Rodado 26 X8 Color: Negro y rojo.</Card.Text>
              <Link to="/detailItem"> <Button variant="danger">Ver Producto</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="src\imagenes\Zenith-Cima-URB-R28-Azul.jpg" />
            <Card.Body style={{ textAlign: 'center' }}>
              <Card.Title>Zenith Cima URB</Card.Title>
              <Card.Text>Rodado 28 21v Color: Azul.</Card.Text>
              <Link to="/detailItem"> <Button variant="danger">Ver Producto</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    
  );
}

export default ListaItems;