<template>
  <div id="app">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="3">
          <SideBar></SideBar>
        </b-col>
        <b-col cols="9">
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import SideBar from "@/components/SideBarComponent";
export default {
  name: "AppContainer",
  components: {
    SideBar
  }
};
</script>
<style>
</style>




