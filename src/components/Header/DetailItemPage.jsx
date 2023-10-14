import { useState, useEffect } from 'react';

function DetailItem  (){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=bicicletas')
      .then(response => response.json())
      .then(data => {
        setProducts(data.results.slice(0, 10)); 
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="Detalle">
      <h1>Lista de Productos de Mercadolibre</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default DetailItem;
