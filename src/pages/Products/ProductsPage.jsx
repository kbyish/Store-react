import React, { useEffect, useState } from 'react';
import {
  getProducts, createProduct, updateProduct, deleteProduct
} from '../../Api/ProductApi';
import ProductList from '../../components/Products/ProductList';
import ProductForm from '../../components/Products/ProductForm';
import CsvUpload from '../../components/CsvUpload';
import Spinner from '../../components/spinner';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    setProducts(await getProducts());
    setLoading(false);
  }

  async function handleCreate(product) {
    await createProduct(product);
    fetchProducts();
  }

  async function handleUpdate(product) {
    await updateProduct(editing.id, product);
    setEditing(null);
    fetchProducts();
  }

  async function handleDelete(id) {
    await deleteProduct(id);
    fetchProducts();
  }

  return (
    <div>
      <h1>Products</h1>
      <CsvUpload onUpload={fetchProducts} />
      {loading ? <Spinner /> : (
        <>
          <ProductList
            products={products}
            onEdit={p => setEditing(p)}
            onDelete={handleDelete}
          />
          <h2>{editing ? 'Edit Product' : 'Add Product'}</h2>
          <ProductForm
            initial={editing}
            onSubmit={editing ? handleUpdate : handleCreate}
            onCancel={() => setEditing(null)}
          />
        </>
      )}
    </div>
  );
}