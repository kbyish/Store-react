import React, { useEffect, useState } from 'react';
import ProductForm from '../../components/Products/ProductForm';
import { getProduct, updateProduct } from '../../Api/ProductApi';
import { useNavigate, useParams } from 'react-router-dom';

export default function () {
  const { id } = useParams();
  const [initialData, setInitialData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getProduct(id).then(setInitialData);
  }, [id]);

  async function handleSave(data) {
    await updateProduct(id, data);
    navigate('/');
  }

  if (!initialData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Product</h2>
      <ProductForm initialData={initialData} onSave={handleSave} />
    </div>
  );
}