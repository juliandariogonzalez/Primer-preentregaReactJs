import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';
import Spinner from 'react-bootstrap/Spinner';


import {  useParams } from 'react-router-dom';

const DetailItemPage = () => {
  let {id} =useParams();
  const [ char, setChar] = useState([])
  console.log(char);
  useEffect ( () => {
    axios (`https://api.mercadolibre.com/sites/MLA/search?q=bicicletas/${id}`).then((res)=> setChar(res.data));
  }, [id]  );

  return (
    <div>
      <h1>Detalle del Producto</h1>
      {char.id ? ( <CardBikes id={char.id} title={char.title} thumbnail={char.thumbnail} />
      ) : (     
        <div style={{ display: 'flex', justifyContent:"center"}}>

          <Spinner animation="border" variant="danger" />
          <p >Cargando...</p>

        </div> 
   
      )}
    </div>
  )
}

export default DetailItemPage;