<template>
  <div>
    <ColorScheme></ColorScheme>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ColorScheme from "./../components/ColorSchemeComponent";

export default {
  name: "ColorSchemeContainer",
  components: {
    ColorScheme
  },
  computed: {
    ...mapGetters({
      //   getLeftMenuName: "getLeftMenuName"
    })
  }
};
</script>

<style>
</style>
