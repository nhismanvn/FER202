import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {
  const cart = useSelector(state => state.cart);
  console.log('🧾 Cart state:', cart);

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Catalogs</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.catalogs.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
