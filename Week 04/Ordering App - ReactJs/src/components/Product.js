import React from 'react';
import './style.css'
export default function Product(props) {
  const { product , onAdd} = props;
  return (
    <div className='card'>
          <div className='box'>
						<div class="text">{product.name}</div>
						<h3>Rs.{product.price} per KG</h3>
						<p>{product.description}</p>
           <button onClick={() => onAdd(product)}>Add+</button>
                </div>
            </div> 
  );
}
