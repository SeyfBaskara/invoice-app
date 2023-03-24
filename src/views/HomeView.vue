<script>
import Layout from "../components/Layout/Layout.vue";
import Invoices from "../components/Invoices/Invoices.vue";
import ControlBar from "../components/ControlBar/ControlBar.vue";

export default {
  components: {
    Layout,
    Invoices,
    ControlBar,
  },
};
</script>

<template>
  <Layout>
    <main class="home">
      <ControlBar />
      <Invoices />
    </main>
  </Layout>
</template>

<style scoped>
.home {
  padding: 1.2rem;
}
</style>
