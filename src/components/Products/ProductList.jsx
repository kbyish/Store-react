import React from 'react';

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Description</th><th>Price</th><th>Category</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>{p.price}</td>
            <td>{p.category}</td>
            <td>
              <button onClick={() => onEdit(p.id)}>Edit</button>
              <button onClick={() => onDelete(p.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}