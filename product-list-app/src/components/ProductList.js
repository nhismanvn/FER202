// File: src/components/ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newId = Date.now().toString(); // Generate unique ID
    const addedProduct = { ...newProduct, id: newId };
    products.push(addedProduct); // Thêm sản phẩm vào danh sách
    setNewProduct({ name: '', description: '', price: '', currentPrice: '', image: '' }); // Reset form
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Form thêm sản phẩm */}
      <form className="add-form" onSubmit={handleAdd}>
        <input name="name" value={newProduct.name} onChange={handleChange} placeholder="Name" required />
        <input name="description" value={newProduct.description} onChange={handleChange} placeholder="Description" required />
        <input name="price" value={newProduct.price} onChange={handleChange} placeholder="Price" required />
        <input name="currentPrice" value={newProduct.currentPrice} onChange={handleChange} placeholder="Current Price" required />
        <input name="image" value={newProduct.image} onChange={handleChange} placeholder="Image filename (e.g., laptop1.png)" required />
        <button type="submit">Add Product</button>
      </form>

      {/* Tìm kiếm sản phẩm */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      
      {/* Hiển thị danh sách sản phẩm */}
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={`/assets/img/${product.image}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><s>{product.price}</s> <strong>{product.currentPrice}</strong></p>
            <div className="product-actions">
              {/* Dẫn đến trang chi tiết sản phẩm */}
              <Link to={`/product/${product.id}`} className="detail-link">Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
