<script setup>
import Layout from "../components/Layout/Layout.vue";
import Invoices from "../components/Invoices/Invoices.vue";
import ControlBar from "../components/ControlBar/ControlBar.vue";

import { useInvoicesStore } from "../stores/invoices";

const store = useInvoicesStore();
</script>

<template>
  <Layout>
    <main class="home">
      <ControlBar :fetchInvoiceByStatus="store.fetchInvoicesByStatus" />
      <Invoices />
    </main>
  </Layout>
</template>

<style scoped>
.home {
  padding: 1.2rem;
}
@media screen and (min-width: 768px) {
  .home {
    width: 80vw;
    margin: 0 auto;
    margin-right: 1rem;
  }
}
@media screen and (min-width: 976px) {
  .home {
    width: 65vw;
    margin: 0 auto;
  }
}
</style>
