<template>
  <div class="row ml-4">
    <label class="control-label">Select User</label>
    <div class="col-md-2">
      <select v-model="exchangeUser" @change="fetchUserDetails">
        <option value="client@gmail.com">Client</option>
        <option value="member@gmail.com">Member</option>
        <option value="hr@gmail.com">Hr</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SelectUser",
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
    }
  },
  methods: {
    ...mapActions(["getUserDetails"]),
    fetchUserDetails: function() {
      this.getUserDetails(); //on change fetch changed user details
    }
  }
};
</script>

<style>
#project {
  text-align: left;
  /* margin-top: 50px; */
}
#headingJob {
  font-weight: bold;
  margin-top: 10px;
}
.card {
  border: none;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.05);
}
</style>
