import React, { useEffect, useState } from 'react';
import "./Popular.css";
import Item from '../Item/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then(response => response.json())
      .then(data => setPopularProducts(data))
      .catch(err => console.error('Failed to fetch:', err));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.newprice} 
            old_price={item.oldprice} 
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
