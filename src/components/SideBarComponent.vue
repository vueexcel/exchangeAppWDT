<template>
  <div>
    <h2 class="text-left">Exchanges</h2>
    <h5 v-if="!exchangeName">error while fetching data</h5>
    <b-nav v-if="exchangeName" class="text-left mt-4 p-2 bg-white customNav" pills>
      <b-nav-item
        v-for="(name, index) in exchangeName"
        :key="index"
        :active="exName === name.exchangeName"
        @click="knowExchangeName(name, index)"
        class="w-100"
      >{{ name.wdtUrl && name.wdtUrl.split("//")[1].split('.')[0]}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "SideBarComponent",
  watch: {
    exchangeName(newV) {
      this.exName = this.exchangeName[0].exchangeName;
      this.currentclient_ID = this.exchangeName[0]._id;
    }
  },
  data() {
    return {
      exName: ""
    };
  },
  computed: {
    exchangeName: {
      set(val) {
        this.$store.commit("setExchangeUser", val);
      },
      get() {
        return this.$store.state.sidebar;
      }
    },
    currentclient_ID: {
      set(val) {
        this.$store.commit("setcurrentclient_ID", val);
      },
      get() {
        // return this.$store.state.sidebar;
      }
    },
    selectedExchangeUserName: {
      set(val) {
        this.$store.commit("setselectedExchangeUserName", val);
      },
      get() {
        // return this.$store.state.sidebar;
      }
    }
  },
  methods: {
    ...mapActions("cognito", ["getUserDetails", "registerUser"]),
    knowExchangeName: function(name, i) {
      this.exName = name.exchangeName;
      this.currentclient_ID = name._id;
      this.selectedExchangeUserName = name.exchangeName;
      this.$store.dispatch("getUserDetails");
    }
  }
};
</script>

<style>
.customNav {
  border-radius: 5px 5px 5px 5px;
  overflow: auto;
  max-height: 460px;
}
</style>
