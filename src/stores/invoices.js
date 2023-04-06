import { defineStore } from "pinia";
import { formatCurrency } from "../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

export const useInvoicesStore = defineStore("invoices", {
  state: () => ({
    isLoading: false,
    hasError: false,
    errorMessage: "",
    isMobile: false,
    invoiceLists: [],
    invoiceDetails: {},
  }),
  getters: {
    capitalizeFirstLetter: () => {
      return (str) => str.charAt(0).toUpperCase() + str.slice(1);
    },
    isInvoicesEmpty: (state) => state.invoiceLists.length === 0,
    isLargeScreen: () => window.innerWidth > 480,
  },
  actions: {
    async fetchInvoiceLists() {
      try {
        this.isLoading = true;
        const res = await fetch("http://localhost:5000/invoices");

        if (!res.ok) {
          const message = `An Error has accured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
        this.invoiceLists = await res.json();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.hasError = true;
        this.errorMessage = error.message;
      }
    },
    formatCurrency,
    formatDate,
    getInvoiceDetails(invoice) {
      this.invoiceDetails = invoice;
    },
  },
});
