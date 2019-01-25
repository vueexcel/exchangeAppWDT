<template>
  <!-- <div class="home"> -->
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ColorScheme/>
  </div>
</template>

<script>
// @ is an alias to /src
import ColorScheme from "@/components/ColorSchemeComponent.vue";

export default {
  name: "colorScheme",
  components: {
    ColorScheme
  }
};
</script>
