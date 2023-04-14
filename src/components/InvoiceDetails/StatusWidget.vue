<script>
import LightBox from "../Layout/LightBox.vue";
export default {
  components: {
    LightBox,
  },
  props: {
    status: {
      type: String,
    },
    deleteInvoice: {
      type: Function,
    },
  },
  data: function () {
    return {
      showLightBox: false,
    };
  },
  methods: {
    handleConfirmDelete() {
      this.deleteInvoice(this.$route.params.id);
      this.showLightBox = false;
    },
  },
  computed: {
    setStatus: (state) => (state.status !== "paid" ? "paid" : "pending"),
    isDraft: (state) => state.status === "draft",
  },
};
</script>
<template>
  <section class="widget">
    <div class="widget__status">
      <h2>Status</h2>
      <p :class="`invoice__status ${status}`">{{ status }}</p>
    </div>
    <div class="widget__buttons">
      <button class="button edit">Edit</button>
      <Button class="button delete" @click="showLightBox = true">Delete</Button>
      <Button class="button mark-as" v-show="!isDraft"
        >Mark as {{ setStatus }}</Button
      >
    </div>
  </section>
  <lightBox :show="showLightBox">
    <h2>Confirm Deletion</h2>
    <p class="lightbox__text">
      Are you sure you want to delete invoice #{{ this.$route.params.id }}? This
      action cannot be undone.
    </p>
    <div class="lightbox__btns">
      <button class="button" @click="showLightBox = false">Cancel</button>
      <button class="button delete" @click="handleConfirmDelete">Delete</button>
    </div>
  </lightBox>
</template>

<style scoped>
.widget__status,
.widget__buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.7rem 1rem;
  border-radius: 10px;
}
.widget__status > h2 {
  font-size: 1.2rem;
  color: var(--text-primary-color);
}
.invoice__status {
  width: 100px;
  text-align: center;
  border-radius: 10px;
  font-weight: bolder;
  font-size: small;
  padding: 0.5rem;
  padding-top: 0;
}
.paid {
  background-color: rgba(204, 246, 218, 0.5);
  color: rgb(80, 221, 127);
}
.pending {
  background-color: rgba(246, 232, 211, 0.5);
  color: orange;
}
.draft {
  background-color: rgba(231, 233, 233, 0.5);
  color: black;
}
.invoice__status::before {
  content: "\2022";
  display: inline-block;
  position: relative;
  top: 3px;
  margin-right: 0.3rem;
  font-size: x-large;
}

.widget__buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0;
}
.button {
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
}
.edit {
  background-color: var(--bg-light-color);
  color: var(--text-secondary-color);
}
.delete {
  background-color: var(--delete-color);
  color: white;
}
.mark-as {
  background-color: var(--primary-color);
  color: white;
}

.lightbox__text {
  font-size: 0.9rem;
  margin: 1rem 0 1.5rem 0;
}
.lightbox__btns {
  display: flex;
  justify-content: end;
  gap: 1rem;
}

@media screen and (min-width: 480px) {
  .widget {
    display: flex;
    background-color: white;
    border-radius: 10px;
  }
  .widget__buttons {
    position: static;
    justify-content: end;
    overflow: hidden;
    border-radius: 10px;
  }

  .widget__buttons,
  .widget__status {
    gap: 0.3rem;
  }
}

@media screen and (min-width: 480px) {
  .widget__buttons,
  .widget__status {
    gap: 1rem;
  }
}
</style>
