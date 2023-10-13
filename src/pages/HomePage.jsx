import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import relleno from "./relleno.png"




const homePage = () => {
  return (
    <div>
      <h1>Bienvenidos</h1>
        <Container className="text-center">
          <img src={relleno} alt="foto-relleno" />
        </Container>
      
    </div>
  );
};

export default homePage;
