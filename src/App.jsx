import "./App.css";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
//Pages
import HomePage from "./pages/HomePage";
import BicicletasPage from "./pages/BicicletasPage";
import Indumentaria_accesoriosPage from "./pages/Indumentaria_accesoriosPage";
import ConsejosPage from "./pages/ConsejosPage";
import ContactoPage from "./pages/ContactoPage";
import Sobre_nosotrosPage from "./pages/Sobre_nosotrosPage";
import CarritoPage from "./pages/CarritoPage";

//React router DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Header/> 
      </div>

      <div>
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/bicicletas" element={<BicicletasPage />} />
          <Route path="/indumentaria_accesorios" element={<Indumentaria_accesoriosPage/>}/>
          <Route path="/consejos" element={<ConsejosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/sobre_nosotros" element={<Sobre_nosotrosPage />} />
          <Route path="/carrito" element={<CarritoPage />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
