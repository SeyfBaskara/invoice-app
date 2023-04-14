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
        const { data } = await API.fetchInvoices();

        this.invoiceLists = data;
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
        await API.deleteInvoice(id);

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
