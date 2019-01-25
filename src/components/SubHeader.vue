<template>
  <div id="topnav">
    <div class="navbar-custom active" id="navigation_4">
      <div class="container-fluid" id="fluid">
        <div id="navigation" class="active">
          <ul class="navigation-menu">
            <!-- <li
            class="has-submenu"
            v-for="(val,index) in roleContent.subchild"
            :key="index"
            v-bind:class="{ active_bg: (pageInfo.index === index)}"
          >
            <a href="#" @click="getpage(val, index)">{{val.name}}</a>
            </li>-->
            <!-- <li
            class="has-submenu"
            v-for="(val,index) in roleContent.subchild"
            :key="index"
            v-bind:class="{ active_bg: (pageInfo.index === index)}"
          >
            <a href="#" @click="getpage(val, index)">{{val.name}}</a>
            </li>-->
            <li class="has-submenu">
              <a href="#" @click="exchange">Exchange Info</a>
            </li>
            <li class="has-submenu">
              <a href="#" @click="logo">Logo</a>
            </li>
            <li class="has-submenu">
              <a href="#" @click="colorScheme">Color Scheme</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SubHeader",
  props: ["roleContent", "pageInfo"],
  methods: {
    ...mapActions(["sendContentInfo"]),
    getpage: function(e, index) {
      // console.log(e.name, index, "======== clicked ");
      this.sendContentInfo({
        index: index,
        name: e.name,
        pagetitle: e.pagetitle,
        prefix: e.prefix
      });
      if (e.name === "Job Postings") {
        this.$router.push("/jobPostingPage");
      }
      if (e.name === "Create New Job") {
        this.$router.push("/createNewJob");
      }
      if (e.name === "Candidates") {
        this.$router.push("/clientCandidates");
      }
      //new fields ================================
      if (e.name === "Exchange Info") {
        // this.$router.push("exchangeInfoPage");
        // this.$router.push({ path: '/createNewJob/exchangeInfoPage' });
        this.$router.push({ name: "ExchangeInfoPage" });
      }
      if (e.name === "Logo") {
        // this.$router.push("/logo");
        this.$router.push({ name: "Logo" });
      }
    },
    exchange: function() {
      this.$router.push("/createNewUser/exchangeInfo");
    },
    logo: function() {
      this.$router.push("/createNewUser/logo");
    },
    colorScheme: function() {
      this.$router.push("/createNewUser/colorScheme");
    }
  }
};
</script>

<style>
#topnav .navigation-menu > li.active_bg {
  /* background-color: #0097a7 !important; */
  border-radius: 5px 5px 0px 0px;
  /* margin: 0 10px 0 10px; */
  color: #212529;
  /* background-color:#0f9cf3; */
}
#topnav .navigation-menu > li.active_bg a {
  /* color: #ffffff !important; */
  color: #212529 !important;
  border-radius: 5px 5px 0px 0px;
  /* margin: 0 10px 0 10px; */
}
#topnav .navigation-menu > li.active_bg a:hover {
  color: #212529 !important;
  border-radius: 5px 5px 0px 0px;
}
#fluid {
  width: 95%;
}
#topnav .navigation-menu > li {
  float: left;
}
a,
a:hover {
  text-decoration: none;
  border-radius: 5px 5px 0px 0px;
}
#topnav .navbar-custom {
  /* background-color: #b0dbe9; */
  background-color: #fff;
  display: -webkit-box;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding-left: 0;
  border-radius: 5px 5px 0px 0px;
}
.btn-primary {
  background-color: #0f9cf3;
  border: 1px solid #0f9cf3;
}
.btn-primary:hover {
  background-color: #0b8ddd;
  border: 1px solid #0b8ddd;
}
@media (min-width: 992px) {
  #topnav .navigation-menu > li:first-of-type > a {
    padding-left: 15px;
  }
}
</style>
