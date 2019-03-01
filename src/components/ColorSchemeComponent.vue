<template>
  <div>
    <SubHeader></SubHeader>
    <div id="project">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <form @submit.prevent>
          <div class="card-body">
            <div class="row"></div>
            <div class="row">
              <div class="col-md-12">
                <h3 class="mt-0 header-title" id="headingJob">Enter Color Scheme</h3>
                <hr>
                <!--=============== first row ================ -->
                <div class="row">
                  <div class="col-md-2">Color 1</div>
                  <div class="col-md-10">
                    <input type="text" size="7" v-model="color1" maxlength="7">
                    <span id="colorBox" :style="{ background: color1 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">Color 2</div>
                  <div class="col-md-10">
                    <input type="text" size="7" v-model="color2" maxlength="7">
                    <span id="colorBox" :style="{ background: color2 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">Color 3</div>
                  <div class="col-md-10">
                    <input type="text" size="7" v-model="color3" maxlength="7">
                    <span id="colorBox" :style="{ background: color3 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">Color 4</div>
                  <div class="col-md-10">
                    <input type="text" size="7" v-model="color4" maxlength="7">
                    <span id="colorBox" :style="{ background: color4 }">&nbsp;</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-2">Color 5</div>
                  <div class="col-md-10">
                    <input type="text" size="7" v-model="color5" maxlength="7">
                    <span id="colorBox" :style="{ background: color5 }">&nbsp;</span>
                  </div>
                </div>

                <!--========= submit button row ===============-->
                <div class="row mt-2">
                  <div class="col-md-2"></div>
                  <div class="col-md-10">
                    <button
                      class="btn btn-primary btnCustom"
                      :disabled="isLoader"
                      @click="submitColor"
                    >
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
import SubHeader from "./SubHeader";
import SelectUser from "./SelectUser";
export default {
  name: "ColorSchemeComponent",
  components: {
    SubHeader,
    SelectUser
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
      alert: "getalertInfo", //show alert on API success
      colorInfo: "getexchangeInfo" //throwing full state
    }),
    isLoader: {
      set(val) {
        this.$store.commit("setisLoader", val);
      },
      get() {
        return this.$store.state.isLoader;
      }
    },
    // // ------- all colors v-model from store/state -------
    color1: {
      get() {
        return this.colorInfo.color1;
      },
      set(val) {
        this.$store.commit("setcolor1", val);
      }
    },
    color2: {
      get() {
        return this.colorInfo.color2;
      },
      set(val) {
        this.$store.commit("setcolor2", val);
      }
    },
    color3: {
      get() {
        return this.colorInfo.color3;
      },
      set(val) {
        this.$store.commit("setcolor3", val);
      }
    },
    color4: {
      get() {
        return this.colorInfo.color4;
      },
      set(val) {
        this.$store.commit("setcolor4", val);
      }
    },
    color5: {
      get() {
        return this.colorInfo.color5;
      },
      set(val) {
        this.$store.commit("setcolor5", val);
      }
    }
  },
  methods: {
    ...mapActions(["saveColorScheme"]),
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
#colorBox {
  display: inline-block;
  width: 86px;
  border: 1px solid black;
}
</style>
