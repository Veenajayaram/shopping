import "./Product.css"
import React, { useEffect, useState } from 'react';
function Product() {
 
  const [value, setValue] = useState([]);

  function fetchdata() {
    fetch('https://fakestoreapi.com/products')
      .then((rs) => rs.json())
      .then((resp) => {
        setValue(resp);
      });
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="container">
      {value.map((item) => (
        <div className="main" >
          <img src={item.image} alt='' />
          <p>{item.title}</p>
          <h3>{item.price}</h3>
          <button>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default Product