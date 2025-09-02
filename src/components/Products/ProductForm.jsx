import React, { useState } from 'react';

export default function ProductForm({ initialData = {}, onSave }) {
  const [product, setProduct] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    price: initialData.price || '',
    category: initialData.category || '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(product);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={product.name} onChange={handleChange} placeholder="Name" required />
      <input name="description" value={product.description} onChange={handleChange} placeholder="Description" required />
      <input name="price" type="number" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
      <button type="submit">Save</button>
    </form>
  );
}