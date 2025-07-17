import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom'; // 👉 dùng để chuyển trang

function ProductForm() {
  const [product, setProduct] = useState({ id: '', name: '', price: '', catalogs: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // 👉 khởi tạo navigate

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...product,
      price: parseFloat(product.price),
      catalogs: product.catalogs.split(',').map(c => c.trim())
    };

    console.log('🚀 Gửi product:', productData);

    // 👉 dispatch xong thì chuyển trang về /
    dispatch(addProductAsync(productData)).then(() => {
      navigate('/');
    });

    setProduct({ id: '', name: '', price: '', catalogs: '' });
  };

  return (
    <form className="container mt-4" onSubmit={handleSubmit}>
      <h3>Add Product</h3>
      <div className="mb-3">
        <label>ID</label>
        <input
          className="form-control"
          value={product.id}
          onChange={e => setProduct({ ...product, id: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label>Name</label>
        <input
          className="form-control"
          value={product.name}
          onChange={e => setProduct({ ...product, name: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          className="form-control"
          type="number"
          value={product.price}
          onChange={e => setProduct({ ...product, price: e.target.value })}
          required
        />
      </div>
      <div className="mb-3">
        <label>Catalogs (comma separated)</label>
        <input
          className="form-control"
          value={product.catalogs}
          onChange={e => setProduct({ ...product, catalogs: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
