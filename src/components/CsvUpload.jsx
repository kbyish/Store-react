import React, { useState } from 'react';
import Spinner from '../components/spinner';
import { uploadCsv } from '../Api/CsvApi';

export default function CsvUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    try {
      await uploadCsv(file);
      onUpload();
    } finally {
      setUploading(false);
    }
  }

  return (
    <form onSubmit={handleUpload}>
      <input type="file" accept=".csv" onChange={e => setFile(e.target.files[0])} />
      <button type="submit" disabled={uploading}>Upload CSV</button>
      {uploading && <Spinner />}
    </form>
  );
}