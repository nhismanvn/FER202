// File: src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();  // Lấy id từ URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Tìm sản phẩm từ mảng products dựa trên id
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) return <p>Product not found!</p>;  // Nếu không tìm thấy sản phẩm

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={`/assets/img/${product.image}`} alt={product.name} />
      <p>{product.description}</p>
      <p><s>{product.price}</s> <strong>{product.currentPrice}</strong></p>
    </div>
  );
};

export default ProductDetail;
