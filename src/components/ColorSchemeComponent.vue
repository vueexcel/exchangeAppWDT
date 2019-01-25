<template>
  <!-- <div id="project" class="tabcontent" v-if="sendName === 'Exchange Info'"> -->
  <div>
    <SubHeader></SubHeader>

    <div id="project" class="tabcontent">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <!--####### alert ######-->
        <!-- <div v-if="alert">
          <b-alert show dismissible>
            Color Scheme has been Submitted successfully
            <b>&rArr;</b>
          </b-alert>
        </div>-->
        <!--###### alert ends #######-->
        <form @submit.prevent>
          <div class="card-body">
            <!-- <h3 class="mt-0 header-title" id="headingJob">Logo</h3> -->
            <div class="row">
              <SelectUser></SelectUser>
            </div>
            <div class="row">
              <div class="col-md-12">
                <h6 class="text-primary">Enter Color Scheme</h6>
                <hr>
                <!-- <div class="form-group">
                <label class="control-label">Notes</label>
                <textarea class="form-control" rows="4" placeholder="Notes..."></textarea>
                </div>-->
                <!--=============== first row ================ -->
                <div class="row">
                  <div class="col-md-1">Color 1</div>
                  <div class="col-md-11">
                    <input type="text" size="7" v-model="color1" maxlength="7">
                    <span id="colorBox" :style="{ background: color1 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">Color 2</div>
                  <div class="col-md-11">
                    <input type="text" size="7" v-model="color2" maxlength="7">
                    <span id="colorBox" :style="{ background: color2 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">Color 3</div>
                  <div class="col-md-11">
                    <input type="text" size="7" v-model="color3" maxlength="7">
                    <span id="colorBox" :style="{ background: color3 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">Color 4</div>
                  <div class="col-md-11">
                    <input type="text" size="7" v-model="color4" maxlength="7">
                    <span id="colorBox" :style="{ background: color4 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-1">Color 5</div>
                  <div class="col-md-11">
                    <input type="text" size="7" v-model="color5" maxlength="7">
                    <span id="colorBox" :style="{ background: color5 }">&nbsp;</span>
                  </div>
                </div>

                <!--========= submit button row ===============-->
                <div class="row mt-2">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <!-- <a class="btn btn-primary" @click="submitColor">Submit</a> -->
                    <button class="btn btn-primary btnCustom" :disabled="isLoader" @click="submitColor">
                      <span v-if="!isLoader">Submit</span>
                      <span v-if="isLoader">
                        <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SubHeader from "./../components/SubHeader";
import SelectUser from "./../components/SelectUserComponent";
export default {
  name: "ColorSchemeComponent",
  props: ["sendName"],
  components: {
    SubHeader,
    SelectUser
  },
  data: function() {
    return {
      // color1: "",
      // color2: "",
      // color3: "",
      // color4: "",
      // color5: ""
    };
  },
  watch: {
    color1: function(val) {
      this.color1 = val;
    },
    color2: function(val) {
      this.color2 = val;
    },
    color3: function(val) {
      this.color3 = val;
    },
    color4: function(val) {
      this.color4 = val;
    },
    color5: function(val) {
      this.color5 = val;
    }
  },
  computed: {
    ...mapGetters({
      alert: "getalertInfo",
      colorInfo: "getexchangeInfo"
    }),
    isLoader: {
      set(val) {
        this.$store.commit("updateisLoader", val);
      },
      get() {
        return this.$store.state.headers.isLoader;
      }
    },
    // ------- all colors v-model from header.js -------
    color1: {
      get() {
        return this.colorInfo.color1;
      },
      set(val) {
        this.$store.commit("updatecolor1", val);
      }
    },
    color2: {
      get() {
        return this.colorInfo.color2;
      },
      set(val) {
        this.$store.commit("updatecolor2", val);
      }
    },
    color3: {
      get() {
        return this.colorInfo.color3;
      },
      set(val) {
        this.$store.commit("updatecolor3", val);
      }
    },
    color4: {
      get() {
        return this.colorInfo.color4;
      },
      set(val) {
        this.$store.commit("updatecolor4", val);
      }
    },
    color5: {
      get() {
        return this.colorInfo.color5;
      },
      set(val) {
        this.$store.commit("updatecolor5", val);
      }
    }
  },
  methods: {
    ...mapActions(["exchangeInfo", "saveColorScheme"]),
    // sendExchangeInfo: function() {
    //   this.exchangeInfo({
    //     title: this.exchangeTitle
    //   });
    //   this.exchangeTitle = "";
    // }
    submitColor: function() {
      this.saveColorScheme({
        color1: this.color1,
        color2: this.color2,
        color3: this.color3,
        color4: this.color4,
        color5: this.color4
      });
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
#colorBox {
  display: inline-block;
  width: 86px;
  /* background-color: blueviolet; */
  border: 1px solid black;
}
</style>
