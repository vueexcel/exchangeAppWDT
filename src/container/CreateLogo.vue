<template>
  <div>
    <LogoComponent></LogoComponent>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LogoComponent from "./../components/LogoComponent.vue";

export default {
  name: "CreateLogo",
  components: {
    LogoComponent
  },
  computed: {
    ...mapGetters({
      getLeftMenuName: "getLeftMenuName"
    })
  }
};
</script>

<style>
</style>
