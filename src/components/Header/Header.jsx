import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img from "./logo-rocky-bikes.png";
import carrito from "./carrito.png";
import relleno from "./relleno.png"

const Header = ()=> {
  return (
    <>
      <header>

        <div>
        <h4> Abona en cuotas sin interes! </h4>
        </div>

        <Container className="text-center">
          <img src={img} width="30%" height="30%" alt="Logo-Bike" />

        </Container>


        <Nav expand="lg" className="mi-navbar">
          <Container>
          <ul className='text-center'>
          <Button variant="outline-danger m-3" size='sm' >  <Nav.Link href="#home"> Bicicletas </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="#features"> Indumentaria / Accesorios </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="#pricing"> Consejos </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="#pricing"> Contacto </Nav.Link> </Button>{' '}
          <Button variant="outline-danger m-3" size='sm'>   <Nav.Link href="#pricing"> Sobre nosotros </Nav.Link> </Button>{' '}
          <Navbar.Brand href="#"><img src={carrito} alt="carrito-contador" width="9%" height="9%" /></Navbar.Brand>
          </ul>
          </Container>


        </Nav >

        <Container className="text-center">
          <img src={relleno} alt="foto-relleno" />
        </Container>

      </header>
    </>
  );
}

export default Header;


