import React, { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../../Api/ProductApi';
import ProductList from '../../components/Products/ProductList';
import CsvUpload from '../../components/Products/CsvUpload';
import { useNavigate } from 'react-router-dom';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  async function loadProducts() {
    setProducts(await getProducts());
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleDelete(id) {
    await deleteProduct(id);
    loadProducts();
  }

  return (
    <div>
      <h1>Products</h1>
      <button onClick={() => navigate('/add')}>Add Product</button>
      <CsvUpload onUploadSuccess={loadProducts} />
      <ProductList products={products} onEdit={id => navigate(`/edit/${id}`)} onDelete={handleDelete} />
    </div>
  );
}