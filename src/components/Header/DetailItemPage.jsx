import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';



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
      <h1>detail</h1>
      
    </div>
  )
}

export default DetailItemPage