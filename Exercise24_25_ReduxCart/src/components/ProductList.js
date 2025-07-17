// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../redux/cartSlice';

const products = [
  { id: '1', name: 'Product A', price: 10, catalogs: ['Food'] },
  { id: '2', name: 'Product B', price: 15, catalogs: ['Tech'] },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.name} - ${product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <button onClick={() => dispatch(updateCart({ ...product, price: product.price + 5 }))}>Update to Cart</button>
          <button onClick={() => dispatch(deleteFromCart(product.id))}>Delete from Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
