import './ListaItems.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CardBikes from './CardBikes';

const ListaItems = () => {
  const [ chars, setChars] = useState([])

  useEffect ( () => {
    axios ("https://api.mercadolibre.com/sites/MLA/search?q=bicicletas").then((res)=> setChars(res.data.results));
  }  );

  return (
    <div className='Card-List'>
    {chars.map((char) =>{
      return <CardBikes key={char.id} char={char}/>;
    })}
    </div>
    
  );
}

export default ListaItems;