<template>
  <div class="card m-b-30 setup-content form" style="display: flex;" id="step-1">
    <div class="card-body form-body">
      <h3 class="mt-0 header-title loginHeader">LOGIN</h3>
      <div class="form-content">
        <div class="form-group">
          <label class="control-label inputLabel">Email</label>
          <input
            maxlength="50"
            type="text"
            required="required"
            class="form-control"
            placeholder="Enter Email"
            v-model="email"
          >
        </div>
        <div class="form-group">
          <label class="control-label inputLabel">Password</label>
          <input
            maxlength="16"
            type="password"
            required="required"
            class="form-control"
            placeholder="Enter Password"
            v-model="password"
            @keyup.enter="login"
          >
        </div>
        <button class="btn btn-primary button btnCustom" :disabled="isLoader" @click="login">
          <span v-if="!isLoader">Login</span>
          <span v-if="isLoader">
            <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
          </span>
        </button>
      </div>
    </div>
    <div class="error" v-if="isError == true">
      <p>{{getErrorMessage}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginFormComponent",
  data() {
    return {
      isError: false // going to come from store
    };
  },
  computed: {
    ...mapGetters({
      getEmailPass: "getexchangeInfo" //get full state
    }),
    isLoader: {
      get() {
        return this.getEmailPass.isLoader;
      },
      set(val) {
        this.$store.commit("setisLoader", val);
      }
    },
    //v-model for email and pass input field
    email: {
      get() {
        return this.getEmailPass.email;
      },
      set(val) {
        this.$store.commit("setemail", val);
      }
    },
    password: {
      get() {
        return this.getEmailPass.password;
      },
      set(val) {
        this.$store.commit("setpassword", val);
      }
    }
  },
  methods: {
    ...mapActions("cognito", ["signInUser", "getUserDetails"]),

    login() {
      this.$store.commit("setisLoader", true);

      this.signInUser({
        username: this.email,
        password: this.password
      })
        .then(() => {
          localStorage.setItem("currentUser", this.email); //setting up currentUser
          var user = localStorage.getItem("USER");
          user = JSON.parse(user);
          this.$store.commit("setcurrentUser", user.username);
          this.$store.dispatch("getUserDetails");
          this.$router.push("/exchangeInfo");
        })
        .catch(res => {
          this.$store.commit("setisLoader", false);
        })
        .finally(() => {
          this.$store.commit("setisLoader", false);
        });
    }
  }
};
</script>

<style>
.form {
  margin-top: 100px !important;
  width: 50%;
  margin: 0 auto;
}
.inputLabel {
  float: left;
}
.button {
  float: right;
}
</style>
