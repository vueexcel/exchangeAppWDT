<template>
  <div class="mb-5 pb-5">
    <SubHeader></SubHeader>
    <div id="project">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <div class="card-body">
          <div class="row"></div>
          <h3 class="mt-0 header-title" id="headingJob">Portal Logo Settings</h3>
          <hr>
          <div class="row">
            <div class="col-md-4">
              <label class="control-label">Current Logo</label>
              <br>
              <div>
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
                      <option value="https://s3.us-east-2.amazonaws.com/wdt-logos/world.png">WDT</option>
                      <option
                        value="https://s3.us-east-2.amazonaws.com/wdt-logos/starbucks.png"
                      >Starbucks</option>
                      <option
                        value="https://s3.us-east-2.amazonaws.com/wdt-logos/radiant_communications_logo.png"
                      >Radiant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div>
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
                      <option value="https://s3.us-east-2.amazonaws.com/wdt-logos/world.png">WDT</option>
                      <option
                        value="https://s3.us-east-2.amazonaws.com/wdt-logos/starbucks.png"
                      >Starbucks</option>
                      <option
                        value="https://s3.us-east-2.amazonaws.com/wdt-logos/radiant_communications_logo.png"
                      >Radiant</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="row">
                <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SubHeader from "./SubHeader";
import SelectUser from "./SelectUser";
import world from "./../static/brand_image/world.png";
export default {
  name: "LogoComponent",
  components: {
    SubHeader,
    SelectUser
  },
  computed: {
    ...mapGetters({
      curentLogo: "getexchangeInfo" //throwing full state
    }),
    selectLogo: {
      set(val) {
        this.$store.commit("setselectLogo", val);
      },
      get() {
        return this.$store.state.selectLogo;
      }
    },
    isLoader: {
      set(val) {
        this.$store.commit("setisLoader", val);
      },
      get() {
        return this.$store.state.isLoader;
      }
    }
  },
  methods: {
    ...mapActions(["sendLogoInfo"]),
    updateNewLogo: function() {
      this.sendLogoInfo({
        logo: this.selectLogo,
        type: "Logo"
      });
    },
    updateNewFavicon: function() {
      this.sendLogoInfo({
        logo: this.selectLogo,
        type: "Favicon"
      });
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
