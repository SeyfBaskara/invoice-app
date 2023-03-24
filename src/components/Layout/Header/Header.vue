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
    <div class="logo">
      <Logo />
    </div>
    <div class="header-right">
      <IconMoon />
      <img class="avatar" :src="avatarImage" alt="avatar image" />
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: var(--bg-secondary-color);
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  height: 100%;
  width: 80px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
.header-right {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 160px;
}
.avatar {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}
@media screen and (min-width: 768px) {
  .header {
    flex-direction: column;
    height: inherit;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  .logo {
    height: 12%;
    width: 95px;
  }
  .header-right {
    flex-direction: column;
    width: auto;
    height: 200px;
  }
}
</style>
