// File: src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Giả sử API trả về một danh sách sản phẩm
    axios.get('/products.json')
      .then(res => {
        setProducts(res.data.products);
      })
      .catch(error => {
        console.error("Error fetching products", error);
      });
  }, []);

  return (
    <Router>
      <div className="container">
        <h1 className="app-title">Laptop Shop</h1>
        <Routes>
          <Route path="/" element={<ProductList products={products} />} /> {/* Trang danh sách sản phẩm */}
          <Route path="/product/:id" element={<ProductDetail products={products} />} /> {/* Trang chi tiết sản phẩm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
