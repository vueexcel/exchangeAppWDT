<template>
  <div id="topnav">
    <div class="navbar-custom active" id="navigation_4">
      <div class="container-fluid" id="fluid">
        <div id="navigation" class="active">
          <ul class="navigation-menu">
            <li class="has-submenu">
              <a href="#" @click="exchange">Exchange Info</a>
            </li>
            <li class="has-submenu">
              <a href="#" @click="logo">Logo</a>
            </li>
            <li class="has-submenu">
              <a href="#" @click="colorScheme">Color Scheme</a>
            </li>
            <li class="has-submenu" v-if="hidecognitoPanel">
              <a href="#" @click="cognito">Cognito</a>
            </li>
          </ul>
          <ul v-if="false" class="navigation-menu" style="float:right; width:60px;">
            <li>
              <a class="bg-danger w-75 text-white" href="#" @click="logout">
                <i class="fa fa-power-off" style="color:#fff !important"></i>
              </a>
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
  data() {
    return {
      hidecognitoPanel: true //make it false if using created hook
    };
  },
  computed: {
    selectedSubHeader: {
      get() {
        return this.$store.state.selectedSubHeader;
      },
      set(v) {
        this.$store.commit("set_selectedSubHeader", v);
      }
    }
  },
  created() {
    var fullUrl = window.origin;
  },
  methods: {
    ...mapActions("cognito", ["signOut", "sendContentInfo"]),
    exchange: function() {
      this.selectedSubHeader = "exchange";
      this.$router.push("/");
    },
    logo: function() {
      this.selectedSubHeader = "logo";
      this.$router.push("/logo");
    },
    colorScheme: function() {
      this.selectedSubHeader = "colorScheme";
      this.$router.push("/colorScheme");
    },
    cognito: function() {
      this.selectedSubHeader = "cognito";
      this.$router.push("/cognito");
    },
    logout() {
      this.signOut().finally(() => {
        localStorage.removeItem("currentUser");
        this.$router.push("/");
      });
    }
  }
};
</script>

<style>
#topnav {
  position: sticky !important;
}
#topnav .navigation-menu > li.active_bg {
  border-radius: 5px 5px 0px 0px;
  color: #212529;
}
#topnav .navigation-menu > li.active_bg a {
  color: #212529 !important;
  border-radius: 5px 5px 0px 0px;
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
.bgColor {
  background-color: cadetblue;
}
@media (min-width: 992px) {
  #topnav .navigation-menu > li:first-of-type > a {
    padding-left: 15px;
  }
}
</style>
