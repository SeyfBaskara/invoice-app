<script>
import avatarImage from "../../../assets/images/image-avatar.jpg";
import IconMoon from "../../../assets/icons/IconMoon.vue";
import Logo from "../../../assets/Logo.vue";

export default {
  name: "Header",
  components: { IconMoon, Logo },
  data: function () {
    return {
      avatarImage: avatarImage,
    };
  },
};
</script>

<template>
  <header class="header">
    <Logo />
    <div>
      <IconMoon />
      <img :src="avatarImage" alt="avatar image" />
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: purple;
}
</style>
