// API helper functions for products

//const BASE_URL = '/api/products';
const BASE_URL = '/api/products';

export async function getProducts() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function getProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

export async function createProduct(product) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
}

export async function updateProduct(id, product) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error('Failed to update product');
  return res;
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  console.log('ProductApi::res= ', res);
  
if(res.status === 204) alert(`product ${id}  deleted successfully`);
else{
  alert(`there was error deleting product ${id} `);
}
  return res;
}

export async function uploadCsv(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${BASE_URL}/UploadCsv/getCsvData`, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('CSV upload failed');
  return res.json();
}