import React from 'react';

const Cart = ({ cart, saveBill, printBill }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Keranjang Belanja</h2>
      <div className="cart-content">
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.quantity} x Rp {item.price}
            </li>
          ))}
        </ul>
        <div className="cart-total">
          <strong>Total: Rp {totalAmount}</strong>
        </div>
      </div>
      <div className="cart-buttons">
        <center>
        <button  className="full-width-button"  onClick={saveBill}>Save Bill</button>
        <button  className="full-width-button"  onClick={printBill}>Print Bill</button>
        <button className="full-width-button2">Charge</button>
        </center>
      </div>
    </div>
  );
};

export default Cart;
