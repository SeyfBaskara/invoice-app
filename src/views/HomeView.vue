<script>
import HelloWorld from "../components/HelloWorld.vue";
import Layout from "../components/Layout/Layout.vue";

export default {
  components: {
    Layout,
    HelloWorld,
  },
};
</script>

<template>
  <Layout>
    <main><HelloWorld /></main>
  </Layout>
</template>
