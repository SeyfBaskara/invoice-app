import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import InvoiceDetailsView from "../views/InvoiceDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/invoiceDetails",
      name: "invoiceDetails",
      component: InvoiceDetailsView,
    },
  ],
});

export default router;
