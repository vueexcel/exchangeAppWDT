<template>
  <!-- <div class="home"> -->
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Logo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from "@/components/LogoComponent.vue";

export default {
  name: "logo",
  components: {
    Logo
  }
};
</script>
