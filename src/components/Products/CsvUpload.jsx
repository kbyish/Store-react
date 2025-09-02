import React, { useState } from 'react';
import { uploadCsv } from '../../Api/ProductApi';

export default function CsvUpload({ onUploadSuccess }) {
  const [file, setFile] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!file) return;
    try {
      await uploadCsv(file);
      onUploadSuccess && onUploadSuccess();
    } catch (err) {
      alert('CSV upload failed');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Upload CSV</button>
    </form>
  );
}