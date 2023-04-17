import { defineStore } from "pinia";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";
import * as API from "../api/index";

export const useInvoicesStore = defineStore("invoices", {
  state: () => ({
    isLoading: false,
    hasError: false,
    errorMessage: "",
    isMobile: false,
    invoiceLists: [],
    invoiceDetails: JSON.parse(localStorage.getItem("invoiceDetails")),
  }),
  getters: {
    capitalizeFirstLetter: () => {
      return (str) => str.charAt(0).toUpperCase() + str.slice(1);
    },
    isInvoicesEmpty: (state) => state.invoiceLists.length === 0,
    isLargeScreen: () => window.innerWidth > 480,
  },
  actions: {
    async fetchInvoices() {
      try {
        this.isLoading = true;
        const res = await API.fetchInvoices();

        if (res.status !== 200) {
          const message = `Something went wrong! status:${res.status}, statusText:${res.statusText}`;
          throw Error(message);
        }

        this.invoiceLists = res.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = error.message;
      }
    },
    async fetchInvoicesByStatus(status) {
      try {
        this.isLoading = true;
        const res = await API.fetchInvoicesByStatus(status);

        if (res.status !== 200) {
          const message = `Something went wrong! status:${res.status}, statusText:${res.statusText}`;
          throw Error(message);
        }

        this.invoiceLists = res.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = error.message;
      }
    },
    fetchInvoice(id) {
      this.invoiceDetails = this.invoiceLists.find((item) => item.id === id);
      localStorage.setItem(
        "invoiceDetails",
        JSON.stringify(this.invoiceDetails)
      );
    },
    async deleteInvoice(id) {
      try {
        const res = await API.deleteInvoice(id);

        if (res.status !== 200) {
          const message = `Something went wrong! status:${res.status}, statusText:${res.statusText}`;
          throw Error(message);
        }

        this.invoiceLists = this.invoiceLists.filter((el) => el.id !== id);
      } catch (error) {
        this.hasError = true;
        this.errorMessage = error.message;
      }
    },
    formatCurrency,
    formatDate,
    setHasError() {
      this.hasError = false;
    },
  },
});
