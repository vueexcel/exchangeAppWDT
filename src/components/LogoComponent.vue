<template>
  <!-- <div id="project" class="tabcontent" v-if="sendName === 'Exchange Info'"> -->
  <div class="mb-5 pb-5">
    <SubHeader></SubHeader>

    <div id="project" class="tabcontent">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <!--####### alert ######-->
        <div>
          <b-alert :show="alert" @dismissed="alert=false" dismissible>
            Data has been Submitted successfully
            <b>&rArr;</b>
          </b-alert>
        </div>
        <!--###### alert ends #######-->
        <!-- <form @submit.prevent="sendLogo"> -->
        <div class="card-body">
          <!-- <h3 class="mt-0 header-title" id="headingJob">Logo</h3> -->
          <div class="row">
            <SelectUser></SelectUser>
          </div>
          <h6 class="text-primary">Portal Logo Settings</h6>
          <hr>
          <div class="row">
            <div class="col-md-4">
              <label class="control-label">Current Logo</label>
              <!-- {{ curentLogo.getLogo }} -->
              <br>
              <div>
                <!-- <img src="./.././../static/brand_image/world.png" alt="logo" height="48px"> -->
                <img :src="curentLogo.getLogo" alt="logo" height="48px">
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <label class="control-label">New Logo</label>
              </div>
              <div class="row">
                <div>
                  <img :src="selectLogo" alt="logo" height="48px">
                </div>
              </div>
              <div class="row mt-4">
                <div>
                  <div class="form-group">
                    <select class="form-control" v-model="selectLogo">
                      <option value="./.././../static/brand_image/world.png">WDT</option>
                      <option value="./.././../static/brand_image/starbucks.png">Starbucks</option>
                      <option
                        value="./.././../static/brand_image/Radiant_Communications_Logo.png"
                      >Radiant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div>
                  <!-- <a class="btn btn-primary" @click="updateNewLogo">Update Logo</a> -->
                  <button
                    class="btn btn-primary btnCustom"
                    :disabled="isLoader"
                    @click="updateNewLogo"
                  >
                    <span v-if="!isLoader">Update</span>
                    <span v-if="isLoader">
                      <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!--=================
          ===== portal favicons 
          =====================-->
          <div class="row">
            <div class="col-md-12">
              <h6 class="text-primary">Portal Favicon Settings</h6>
              <hr>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <!-- ###################################
                ########## new favicon needs  to be here
              ########################################-->
              <label class="control-label">Current Favicon</label>
              <br>
              <div>
                <img :src="curentLogo.getLogo" alt="logo" height="32px">
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div>
                  <img :src="selectLogo" alt="logo" height="32px">
                </div>
              </div>
              <div class="row mt-4">
                <div>
                  <div class="form-group">
                    <select class="form-control" v-model="selectLogo">
                      <option value="./.././../static/brand_image/world.png">WDT</option>
                      <option value="./.././../static/brand_image/starbucks.png">Starbucks</option>
                      <option
                        value="./.././../static/brand_image/Radiant_Communications_Logo.png"
                      >Radiant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div>
                  <!-- <a class="btn btn-primary" @click="updateNewFavicon">Update Logo</a> -->
                  <button
                    class="btn btn-primary btnCustom"
                    :disabled="isLoader"
                    @click="updateNewFavicon"
                  >
                    <span v-if="!isLoader">Update</span>
                    <span v-if="isLoader">
                      <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
                    </span>
                  </button>
                </div>
              </div>
              <!-- <button class="btn btn-primary pull-right" type="submit">Submit</button> -->
            </div>
          </div>
        </div>
        <!-- </form> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SubHeader from "./../components/SubHeader";
import SelectUser from "./../components/SelectUserComponent";
export default {
  name: "LogoComponent",
  props: ["sendName"],
  components: {
    SubHeader,
    SelectUser
  },
  data: function() {
    return {
      exchangeTitle: "",
      selectLogo: "./.././../static/brand_image/world.png"
    };
  },
  computed: {
    ...mapGetters({
      // alert: "getalertInfo",
      curentLogo: "getexchangeInfo"
    }),
    alert: {
      set(val) {
        this.$store.commit("updateAlert", val);
      },
      get() {
        // console.log(this.$store.state.headers.isLoader, "from isloader vmodel");
        // return this.exchangeInfo.selectExchangeUser;
        return this.$store.state.headers.alert;
      }
    },
    isLoader: {
      set(val) {
        this.$store.commit("updateisLoader", val);
      },
      get() {
        return this.$store.state.headers.isLoader;
      }
    }
  },
  methods: {
    ...mapActions(["exchangeInfo", "sendLogoInfo"]),
    sendExchangeInfo: function() {
      this.exchangeInfo({
        title: this.exchangeTitle
      });
      this.exchangeTitle = "";
    },
    updateNewLogo: function() {
      this.sendLogoInfo({
        logo: this.selectLogo,
        type: "Logo"
      });
      // this.exchangeTitle = "";
    },
    updateNewFavicon: function() {
      this.sendLogoInfo({
        logo: this.selectLogo,
        type: "Favicon"
      });
      // this.exchangeTitle = "";
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
