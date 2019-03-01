<template>
  <div class="mb-5 pb-5">
    <SubHeader></SubHeader>
    <div id="project">
      <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
        <form @submit.prevent>
          <div class="card-body">
            <h3 class="mt-0 header-title" id="headingJob">Exchange Info</h3>
            <div class="row"></div>
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
                    v-model="exchangeWebsite"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Email</label>
                  <input
                    maxlength
                    type="email"
                    class="form-control"
                    placeholder="Enter Email"
                    v-model="exchangeEmail"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Contract</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Enter Contract Details..."
                    v-model="exchangeContract"
                  >
                </div>
              </div>
              <!--===================== right side form group ================ -->
              <div class="col-md-6">
                <div class="form-group">
                  <label class="control-label">Exchange Customer</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Exchange Customer"
                    v-model="exchangeCustomer"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">WDT URL</label>
                  <input
                    maxlength
                    type="url"
                    class="form-control"
                    placeholder="WDT URL"
                    v-model="exchangeUrl"
                    :disabled="addnewEx == false"
                  >
                  <!-- :disabled="addnewEx == false" -->
                </div>
                <div class="form-group">
                  <label class="control-label">Contact Name</label>
                  <input
                    maxlength
                    type="text"
                    class="form-control"
                    placeholder="Contact Name"
                    v-model="exchangeContactName"
                  >
                </div>
                <div class="form-group">
                  <label class="control-label">Phone</label>
                  <input
                    maxlength
                    type="number"
                    class="form-control"
                    placeholder="Phone"
                    v-model="exchangePhone"
                  >
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label class="control-label">Notes</label>
                  <textarea
                    class="form-control"
                    rows="4"
                    placeholder="Notes..."
                    v-model="exchangeNotes"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <button
                  class="btn btn-primary pull-right btnCustom"
                  :disabled="isLoader"
                  type="submit"
                  @click="sendExchangeInfo"
                >
                  <span v-if="!isLoader">Submit</span>
                  <span v-if="isLoader">
                    <ball-spin-fade-loader color="#fff" size="3px"></ball-spin-fade-loader>
                  </span>
                </button>
                <button
                  class="btn btn-primary pull-right mr-5"
                  @click="clearAllFields"
                >add new exchange</button>
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
  name: "ExchangeInfoComponent",
  components: {
    SelectUser,
    SubHeader
  },
  computed: {
    ...mapGetters({
      alertInfo: "getalertInfo"
    }),
    exchangeWebsite: {
      set(val) {
        this.$store.commit("setexchangeWebsite", val);
      },
      get() {
        return this.$store.state.exchangeWebsite;
      }
    },
    exchangeEmail: {
      set(val) {
        this.$store.commit("setexchangeEmail", val);
      },
      get() {
        return this.$store.state.exchangeEmail;
      }
    },
    exchangeContract: {
      set(val) {
        this.$store.commit("setexchangeContract", val);
      },
      get() {
        return this.$store.state.exchangeContract;
      }
    },
    exchangeCustomer: {
      set(val) {
        this.$store.commit("setexchangeCustomer", val);
      },
      get() {
        return this.$store.state.exchangeCustomer;
      }
    },
    exchangeUrl: {
      set(val) {
        this.$store.commit("setexchangeUrl", val);
      },
      get() {
        return this.$store.state.exchangeUrl;
      }
    },
    exchangeContactName: {
      set(val) {
        this.$store.commit("setexchangeContactName", val);
      },
      get() {
        return this.$store.state.exchangeContactName;
      }
    },
    exchangePhone: {
      set(val) {
        this.$store.commit("setexchangePhone", val);
      },
      get() {
        return this.$store.state.exchangePhone;
      }
    },
    exchangeNotes: {
      set(val) {
        this.$store.commit("setexchangeNotes", val);
      },
      get() {
        return this.$store.state.exchangeNotes;
      }
    },
    exchangeTitle: {
      set(val) {
        this.$store.commit("setexchangeTitle", val);
      },
      get() {
        return this.$store.state.exchangeTitle;
      }
    },
    isLoader: {
      set(val) {
        this.$store.commit("setisLoader", val);
      },
      get() {
        return this.$store.state.isLoader;
      }
    },
    addnewEx: {
      set(val) {
        this.$store.commit("setaddnewEx", val);
      },
      get() {
        return this.$store.state.addnewEx;
      }
    }
  },
  methods: {
    ...mapActions(["update_exchangeInfo"]),
    sendExchangeInfo: function() {
      this.update_exchangeInfo({
        exchangeName: this.exchangeTitle,
        website: this.exchangeWebsite,
        email: this.exchangeEmail,
        contract: this.exchangeContract,
        notes: this.exchangeNotes,
        exchangeCustomer: this.exchangeCustomer,
        wdtUrl: this.exchangeUrl,
        contactName: this.exchangeContactName,
        phone: this.exchangePhone
      });
      this.exchangeTitle = "";
      this.exchangeWebsite = "";
      this.exchangeEmail = "";
      this.exchangeContract = "";
      this.exchangeNotes = "";
      this.exchangeCustomer = "";
      this.exchangeUrl = "";
      this.exchangeContactName = "";
      this.exchangePhone = "";
    },
    clearAllFields: function() {
      this.addnewEx = true;
      this.exchangeTitle = "";
      this.exchangeWebsite = "";
      this.exchangeEmail = "";
      this.exchangeContract = "";
      this.exchangeNotes = "";
      this.exchangeCustomer = "";
      this.exchangeUrl = "";
      this.exchangeContactName = "";
      this.exchangePhone = "";
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
