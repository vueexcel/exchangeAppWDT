<template>
  <div class="row ml-4">
    <label class="control-label">Select User</label>
    <div class="col-md-2">
      <select v-model="exchangeUser" @change="loadLogo">
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
  name: "SelectUserComponent",
  props: ["sendName"],
  components: {},
  data: function() {
    return {
      exchangeTitle: ""
      // exchangeUser: "worldDesign"
    };
  },
  mounted() {
    // console.log(this.exchangeInfo.selectExchangeUser, "from mounted ");
  },
  computed: {
    ...mapGetters({
      alert: "getalertInfo",
      exchangeInfo: "getexchangeInfo"
    }),
    exchangeUser: {
      set: function(val) {
        this.$store.commit("updateExchangeUser", val);
      },
      get: function() {
        // console.log(this.$store.state.headers.selectExchangeUser);

        return this.exchangeInfo.selectExchangeUser;
        // return this.$store.state.selectExchangeUser;
      }
    }
  },
  methods: {
    ...mapActions(["getLogo", "getColorScheme","getUserDetails"]),
    loadLogo: function() {
      // this.getLogo(); //Api to fetch current logo for user (select)
      // this.getColorScheme(); //Api to fetch stored color for the current user (select)
      this.getUserDetails(); // delete above 2 API's getLogo & getColorScheme
    }
  }
};
</script>

<style>
#project {
  text-align: left;
  margin-top: 50px;
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
