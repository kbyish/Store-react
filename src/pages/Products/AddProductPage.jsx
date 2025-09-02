import React from 'react';
import ProductForm from '../../components/Products/ProductForm';
import { createProduct } from '../../Api/ProductApi';
import { useNavigate } from 'react-router-dom';

export default function AddProductPage() {
  const navigate = useNavigate();

  async function handleSave(data) {
    await createProduct(data);
    navigate('/');
  }

  return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSave={handleSave} />
    </div>
  );
}