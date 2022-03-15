import React from 'react';

export default function Basket(props) {
  const {cartitems, onAdd, onRemove} = props;
  const itemsPrice = cartitems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <div className='left'>
        <div className='cart'>
                <div className='outer'>
                    <h1> Your Cart</h1>
                        <div className='block'>
                          {cartitems == 0 && <div>Cart is Empty</div>}</div>
                        {cartitems.map((items) => (
                          <div className='text'>
                          <div key={items.id} className="row">
                            <div className='col-2'>{items.name}</div>
                            <div  className='col-2'>
                            <button onClick={() => onAdd(items)} className="add">+</button>
                            <button onClick={() => onRemove(items)} className="remove">-</button>
                            </div>
                          </div>
                          <div className='col-2'>
                            {items.qty} * Rs. {items.price.toFixed(2)}
                          </div>
                          </div>
                          
                        ))}

          {cartitems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
          </>
        )}

                </div>
            
        </div>
    </div>
  );
  }