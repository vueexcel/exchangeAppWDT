<template>
  <!-- <div class="home"> -->
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <ExchangeInfo msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ExchangeInfo from "@/components/ExchangeInfoComponent.vue";

export default {
  name: "exchangeInfo",
  components: {
    ExchangeInfo
  }
};
</script>
