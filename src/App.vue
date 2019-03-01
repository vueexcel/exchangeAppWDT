<template>
  <div id="app">
    <div id="nav"></div>
    <!-- <router-view/> -->
    <div>
      <AppContainer></AppContainer>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
import { mapActions, mapGetters } from "vuex";
import AppContainer from "./views/AppContainer.vue";
import LoginForm from "@/components/LoginFormComponent";
import LoginBox from "@/components/LoginBox";
export default {
  data() {
    return {
      redirectUrl: "https://starbucks.pvauction.com"
    };
  },
  components: {
    AppContainer,
    LoginForm,
    LoginBox
  },
  created() {
    var fullUrl = window.location.href;
    this.fetchUrlSetUser();
    this.callApi(fullUrl);
  },
  computed: {
    ...mapGetters({
      exchangeInfo: "getexchangeInfo"
    }),
    exchangeUser: {
      set: function(val) {
        this.$store.commit("setExchangeUser", val);
      },
      get: function() {
        return this.exchangeInfo.selectExchangeUser;
      }
    },
    client_id: {
      set: function(val) {
        this.$store.commit("setExchangeUser", val);
      },
      get: function() {
        return this.exchangeInfo.cognito_clientID;
      }
    }
  },
  methods: {
    ...mapActions("cognito", ["getUserDetails", "registerUser"]),
    async callApi() {
      await this.$store.dispatch("getCognitoCredentials");
      await this.$store.dispatch("getallExchange");
      if (localStorage.getItem("currentUser") && this.$route.path !== "/") {
        this.$store.dispatch("getUserDetails");
      }
      if (this.$route.hash) {
        var jwtToken = this.$route.hash.slice(10, 1000);
        var jwtTokenDecoded = VueJwtDecode.decode(jwtToken);
      }
      if (jwtTokenDecoded) {
        this.$router.push("/exchangeInfo");
        this.$store.dispatch("getUserDetails");
      }
      var fullUrl = window.location.href;
      var startPos = fullUrl.indexOf(":");
      var endPos = fullUrl.indexOf(".pvauction");
      var lengthUser = endPos - (startPos + 3);
      var exchangeUserName = fullUrl.substr(startPos + 3, lengthUser);
      this.exchangeUser = exchangeUserName;

      this.$store.dispatch("getUserDetails"); // need to run every time

      if (fullUrl == "https://pvauction.com/#/") {
        this.$router.push("/exchangeInfo");
      }
      if (fullUrl == "https://starbucks.pvauction.com/") {
        this.$router.push("/login");
      }

      if (
        fullUrl == "https://starbucks.pvauction.com/#/login" ||
        fullUrl == "https://walmart.pvauction.com/#/login" ||
        fullUrl == "https://mcdonalds.pvauction.com/#/login"
      ) {
        var pathArray = fullUrl.split("/");
        var protocol = pathArray[0];
        const redirectUrl = fullUrl.slice(0, -8); // needs to be changed
        var client_id = this.client_id;
        window.location.href = `https://exchange${
          this.exchangeUser
        }.auth.us-east-2.amazoncognito.com/login?response_type=token&client_id=${
          this.client_id
        }&redirect_uri=${redirectUrl}`;
      }
    },
    createUser() {
      this.registerUser({
        username: "hr@gmail.com", //CHANGE to create new user
        password: "xS&d$?3bJ",
        attributes: {
          name: "hr", //CHANGE to create new user
          email: "hr@gmail.com", //CHANGE to create new user
          "custom:exchangeID": "003" //CHANGE to create new user
        }
      })
        .then(() => {})
        .catch(err => {});
    },
    fetchUrlSetUser() {
      var fullUrl = window.location.href;
      var startPos = fullUrl.indexOf(":");
      var endPos = fullUrl.indexOf(".pvauction");
      var lengthUser = endPos - (startPos + 3);
      var exchangeUserName = fullUrl.substr(startPos + 3, lengthUser);
      this.exchangeUser = exchangeUserName;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eff3f6;
}
#nav {
  padding: 3px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.btnCustom {
  width: 100px;
}
</style>
