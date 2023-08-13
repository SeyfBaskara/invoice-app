import axios from "axios";

// const url = "http://localhost:5000";
const url = "https://invoice-app-opal.vercel.app/api/data";

export const fetchInvoices = async () => await axios.get(`${url}/invoices`);
export const fetchInvoicesByStatus = async (status) =>
  await axios.get(`${url}/invoices?status=${status}`);
export const deleteInvoice = async (id) =>
  await axios.delete(`${url}/invoices/${id}`);
