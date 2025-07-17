import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="/">🛒 ReduxCart</a>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Cart</Link>
          <Link className="nav-link" to="/form">Add Product</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/form" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
