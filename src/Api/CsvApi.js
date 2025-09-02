import { BASE_URL } from '../constants';

// Handles CSV upload API
export async function uploadCsv(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch(`${BASE_URL}/UploadCsv/getCsvData`, {
    method: 'POST',
    body: formData,
  });

  console.log('CsvApi:: uploadCsv:: res type =', typeof  res , '--res = ', res);
  return res
}