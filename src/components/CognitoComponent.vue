<template>
  <div class="mb-5 pb-5">
    <SubHeader></SubHeader>
    <div id="project">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <form @submit.prevent="sendCognitoInfo">
          <div class="card-body">
            <h3 class="mt-0 header-title" id="headingJob">Cognito</h3>
            <div class="row"></div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">User Pool ID</label>
                  <input
                    maxlength
                    type="text"
                    required="required"
                    class="form-control"
                    placeholder="Enter User Pool ID"
                    v-model="userPoolID"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Identity Pool ID</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Enter Identity Pool ID"
                    v-model="identityPoolID"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Client ID</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Enter Client ID"
                    v-model="clientID"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Region</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Enter Region"
                    v-model="region"
                  >
                </div>
              </div>
            </div>
            <div class="row" v-if="false">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Notes</label>
                  <textarea class="form-control" rows="4" placeholder="Notes..."></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button
                  class="btn btn-primary pull-right btnCustom"
                  :disabled="isLoader"
                  type="submit"
                >
                  <span v-if="!isLoader">Submit</span>
                  <span v-if="isLoader">
                    <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
                  </span>
                </button>
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
import SubHeader from "./SubHeader.vue";
import SelectUser from "./SelectUser";
export default {
  name: "cognito",
  components: {
    SelectUser,
    SubHeader
  },
  computed: {
    ...mapGetters({
      alertInfo: "getalertInfo"
    }),
    userPoolID: {
      set(val) {
        this.$store.commit("setuserPoolID", val);
      },
      get() {
        return this.$store.state.userPoolID;
      }
    },
    identityPoolID: {
      set(val) {
        this.$store.commit("setidentityPoolID", val);
      },
      get() {
        return this.$store.state.identityPoolID;
      }
    },
    clientID: {
      set(val) {
        this.$store.commit("setclientID", val);
      },
      get() {
        return this.$store.state.clientID;
      }
    },
    region: {
      set(val) {
        this.$store.commit("setregion", val);
      },
      get() {
        return this.$store.state.region;
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
    ...mapActions(["cognitoInfo"]),
    sendCognitoInfo: function() {
      this.cognitoInfo();
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
