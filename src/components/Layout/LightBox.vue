<script>
export default {
  name: "Lightbox",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="lightbox" v-if="show">
    <div class="lightbox__overlay"></div>
    <div class="lightbox__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.lightbox__content {
  position: relative;
  background-color: #fff;
  padding: 20px;
  max-width: 330px;
  overflow: auto;
  border-radius: 10px;
}
</style>
