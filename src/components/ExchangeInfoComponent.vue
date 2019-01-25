<template>
  <div class="mb-5 pb-5">
    <SubHeader></SubHeader>
    <div id="project" class="tabcontent">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <!--####### alert ######-->
        <div>
          <!-- <b-alert :show="alert" @dismissed="alert=false" dismissible>
            Data has been Submitted successfully
            <b>&rArr;</b>
          </b-alert>-->
        </div>
        <!--###### alert ends #######-->
        <form @submit.prevent="sendExchangeInfo">
          <div class="card-body">
            <h3 class="mt-0 header-title" id="headingJob">Exchange Info</h3>
            <div class="row">
              <SelectUser></SelectUser>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Title</label>
                  <input
                    maxlength
                    type="text"
                    required="required"
                    class="form-control"
                    placeholder="Enter Exchange Title"
                    v-model="exchangeTitle"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Website</label>
                  <input
                    maxlength
                    type="url"
                    class="form-control"
                    placeholder="Enter Website URL Title"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Email</label>
                  <input maxlength type="email" class="form-control" placeholder="Enter Email">
                </div>
                <div class="form-group">
                  <label class="control-label">Contract</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Enter Contract Details..."
                  >
                </div>
              </div>
              <!--===================== right side form group ================ -->
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Exchange Customer</label>
                  <input maxlength type="text" class="form-control" placeholder="Exchange Customer">
                </div>
                <div class="form-group">
                  <label class="control-label">WDT URL</label>
                  <input maxlength type="url" class="form-control" placeholder="WDT URL">
                </div>
                <div class="form-group">
                  <label class="control-label">Contact Name</label>
                  <input maxlength type="text" class="form-control" placeholder="Contact Name">
                </div>
                <div class="form-group">
                  <label class="control-label">Phone</label>
                  <input maxlength type="number" class="form-control" placeholder="Phone">
                </div>
              </div>
            </div>
            <div class="row">
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
import SubHeader from "@components/SubHeader";
import SelectUser from "@components/SelectUserComponent";
export default {
  name: "exchangeInfo",
  props: ["sendName"],
  components: {
    SubHeader,
    SelectUser
  },
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      alertInfo: "getalertInfo"
    }),
    exchangeUser: {
      set(val) {
        this.$store.commit("updateExchangeUser", val);
      },
      get() {
        return this.$store.state.selectExchangeUser;
      }
    },
    exchangeTitle: {
      set(val) {
        this.$store.commit("updateexchangeTitle", val);
      },
      get() {
        return this.$store.state.headers.exchangeTitle;
      }
    },
    isLoader: {
      set(val) {
        this.$store.commit("updateisLoader", val);
      },
      get() {
        return this.$store.state.headers.isLoader;
      }
    },
    alert: {
      set(val) {
        this.$store.commit("updateAlert", val);
      },
      get() {
        return this.$store.state.headers.alert;
      }
    }
  },
  methods: {
    ...mapActions(["exchangeInfo", "getLogo"]),
    sendExchangeInfo: function() {
      this.exchangeInfo({
        title: this.exchangeTitle
      });
      this.exchangeTitle = "";
    },
    loadLogo: function() {
      // this.getLogo();
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
