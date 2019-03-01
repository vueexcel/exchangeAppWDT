import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import createPersistedState from "vuex-persistedstate";
import attachCognitoModule from "@vuetify/vuex-cognito-module";

Vue.use(Vuex);

const store = new Vuex.Store({
  // plugins: [createPersistedState()],

  state: {
    baseUrl: "https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev",
    cognito: {},
    currentUser: "",
    isReady: false,
    email: "",
    password: "",
    alert: false,
    isLoader: false, //loader for buttons, turns on while API call
    // selectExchangeUser: "client@gmail.com", //v-model SelectUser Component
    selectExchangeUser: "",
    exchangeTitle: "", //v-model for ExchangeInfo title
    getLogo: "",
    color1: "", //colors for ColorSchemeComponent
    color2: "",
    color3: "",
    color4: "",
    color5: "",
    selectLogo: "https://s3.us-east-2.amazonaws.com/wdt-logos/world.png",
    selectedSubHeader: "exchange",
    sidebar: [],
    userPoolID: "",
    identityPoolID: "",
    clientID: "",
    region: "",
    currentclient_ID: "",
    //===== Cognito credentials =====
    cognito_clientID: "",
    cognito_identityPoolID: "",
    cognito_region: "",
    cognito_userPoolID: "",
    selectedExchangeUserName: "starbucks",
    //=======exchange info page v-model's =======
    exchangeWebsite: "",
    exchangeEmail: "",
    exchangeContract: "",
    exchangeCustomer: "",
    exchangeUrl: "",
    exchangeContactName: "",
    exchangePhone: "",
    exchangeNotes: "",
    addnewEx: false
  },
  getters: {
    getalertInfo: state => state.alert,
    getexchangeInfo: state => state
  },
  mutations: {
    removeCognito: state => {
      state.cognito.session = {};
      state.cognito.user = {};
    },
    setcurrentUser: (state, data) => {
      state.currentUser = data;
    },
    setemail: (state, data) => {
      state.email = data;
    },
    setpassword: (state, data) => {
      state.password = data;
    },
    setExchangeUser: (state, data) => {
      state.selectExchangeUser = data;
    },
    setexchangeTitle: (state, data) => {
      state.exchangeTitle = data;
    },
    setisLoader: (state, data) => {
      state.isLoader = data;
    },
    setgetLogo: (state, data) => {
      state.getLogo = data;
    },
    setselectLogo: (state, data) => {
      state.selectLogo = data;
    },
    set_selectedSubHeader: (state, data) => {
      state.selectedSubHeader = data;
    },
    setaddnewEx: (state, data) => {
      state.addnewEx = data;
    },
    setAllValues: (state, data) => {
      if (!data.colorTheme.length) {
        state.color1 = "";
        state.color2 = "";
        state.color3 = "";
        state.color4 = "";
        state.color5 = "";
      } else {
        state.color1 = data.colorTheme[0].color1;
        state.color2 = data.colorTheme[0].color2;
        state.color3 = data.colorTheme[0].color3;
        state.color4 = data.colorTheme[0].color4;
        state.color5 = data.colorTheme[0].color5;
      }
      if (!data.logo.length) {
        state.getLogo = "";
      } else {
        state.getLogo = data.logo[0].logoPath;
      }
      if (!data.cognito) {
        state.clientID = "";
        state.identityPoolID = "";
        state.region = "";
        state.userPoolID = "";
      } else {
        state.clientID = data.cognito.clientID;
        state.identityPoolID = data.cognito.identityPoolID;
        state.region = data.cognito.region;
        state.userPoolID = data.cognito.userPoolID;
      }
      if (data.exchange.wdtUrl == "") {
        state.exchangeTitle = "";
        state.exchangeWebsite = "";
        state.exchangeEmail = "";
        state.exchangeContract = "";
        state.exchangeCustomer = "";
        state.exchangeUrl = "";
        state.exchangeContactName = "";
        state.exchangePhone = "";
        state.exchangeNotes = "";
      } else {
        state.exchangeTitle = data.exchange.exchangeName;
        state.exchangeWebsite = data.exchange.website;
        state.exchangeEmail = data.exchange.email;
        state.exchangeContract = data.exchange.contract;
        state.exchangeCustomer = data.exchange.exchangeCustomer;
        state.exchangeUrl = data.exchange.wdtUrl;
        state.exchangeContactName = data.exchange.contactName;
        state.exchangePhone = data.exchange.phone;
        state.exchangeNotes = data.exchange.notes;
      }
    },
    //v-model ColorScheme component
    setcolor1: (state, data) => {
      state.color1 = data;
    },
    setcolor2: (state, data) => {
      state.color2 = data;
    },
    setcolor3: (state, data) => {
      state.color3 = data;
    },
    setcolor4: (state, data) => {
      state.color4 = data;
    },
    setcolor5: (state, data) => {
      state.color5 = data;
    },
    setIsReady: (state, data) => {
      state.isReady = data;
    },
    //v-model ColorScheme component ENDS
    set_sideBar: (state, data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].exchangeName) {
          state.sidebar.push(data[i]);
        }
      }
    },
    setuserPoolID: (state, data) => {
      state.userPoolID = data;
    },
    setidentityPoolID: (state, data) => {
      state.identityPoolID = data;
    },
    setclientID: (state, data) => {
      state.clientID = data;
    },
    setregion: (state, data) => {
      state.region = data;
    },
    setcurrentclient_ID: (state, data) => {
      state.currentclient_ID = data;
    },
    setselectedExchangeUserName: (state, data) => {
      state.selectedExchangeUserName = data;
    },
    setexchangeWebsite: (state, data) => {
      state.exchangeWebsite = data;
    },
    setexchangeEmail: (state, data) => {
      state.exchangeEmail = data;
    },
    setexchangeContract: (state, data) => {
      state.exchangeContract = data;
    },
    setexchangeCustomer: (state, data) => {
      state.exchangeCustomer = data;
    },
    setexchangeUrl: (state, data) => {
      state.exchangeUrl = data;
    },
    setexchangeContactName: (state, data) => {
      state.exchangeContactName = data;
    },
    setexchangePhone: (state, data) => {
      state.exchangePhone = data;
    },
    setexchangeNotes: (state, data) => {
      state.exchangeNotes = data;
    },
    setcognitoCredentials: (state, data) => {
      state.cognito_clientID = data.clientID; //==
      state.cognito_identityPoolID = data.identityPoolID; //====
      state.cognito_region = data.region; //==
      state.cognito_userPoolID = data.userPoolID; //==
    }
  },
  actions: {
    //###################### exchange info API #####################
    // -------------- GET ALL EXCHANGE i.e., SIDEBAR VALUES ----------
    async getallExchange({ state, commit }, payload) {
      await axios
        .get(`${state.baseUrl}/exchange/getAllExchange`)
        .then(response => {
          commit("set_sideBar", response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // -------------- GET ALL EXCHANGE i.e., SIDEBAR VALUES ENDS----------

    // -------------- GET COGNITO CREDENTIALS VIA URL ----------
    async getCognitoCredentials({ state, commit }, payload) {
      var exUserFromUrl = state.selectExchangeUser;
      try {
        let response = await axios.get(
          `${state.baseUrl}/cognito/getCognitoCredentials/${exUserFromUrl}`
        );
        if (response) {
          commit("setcognitoCredentials", response.data.data);
          attachCognitoModule(
            store,
            {
              userPoolId: response.data.data.userPoolID,
              identityPoolId: response.data.data.identityPoolID,
              userPoolWebClientId: response.data.data.clientID,
              region: response.data.data.region
            },
            "cognito"
          );

          // // === For login ===
          store
            .dispatch("cognito/fetchSession")
            .finally(() => store.commit("setIsReady", true));
        }
      } catch (err) {
        return err;
      }
    },
    // -------------- GET COGNITO CREDENTIALS VIA URL ENDS----------

    // -----------common API to fetch data for SelectUser-----------
    async getUserDetails({ state, commit }, payload) {
      var presentUser = state.selectedExchangeUserName;

      await axios
        .get(
          `${state.baseUrl}/exchange/getLogoAndTheme/${state.currentclient_ID}`
        )
        .then(response => {
          commit("setAllValues", response.data.data);
        })
        .catch(err => {
          return err;
        });
    },
    // -----------common API to fetch data for SelectUser ENDS-----------
    // ============------------send COgnito Info ------------==========
    async cognitoInfo({ state, commit, dispatch }, payload) {
      var presentUser = state.selectExchangeUser;

      commit("setisLoader", true);
      await axios
        .post(`${state.baseUrl}/cognito/saveCognitoCredentials`, {
          exchangeId: state.currentclient_ID,
          clientID: state.clientID,
          userPoolID: state.userPoolID,
          identityPoolID: state.identityPoolID,
          region: state.region
        })
        .then(response => {
          if (response.data.error == 0) {
            dispatch("getUserDetails");
            commit("setisLoader", false);
          }
        })
        .catch(err => {
          commit("setisLoader", false);
          return err;
        });
    },
    // ============------------send COgnito Info ENDS ------------==========

    // -----------exchange info send title value -----------
    async update_exchangeInfo({ state, commit, dispatch }, payload) {
      var presentUser = state.selectExchangeUser;
      if (state.addnewEx == true) {
        var endPoint = "createExchange";
        commit("setisLoader", true);
        await axios
          .post(`${state.baseUrl}/exchange/${endPoint}`, {
            exchangeName: payload.exchangeName,
            website: payload.website,
            email: payload.email,
            contract: payload.contract,
            notes: payload.notes,
            exchangeCustomer: payload.exchangeCustomer,
            wdtUrl: payload.wdtUrl,
            contactName: payload.contactName,
            phone: payload.phone
          })
          .then(response => {
            if (response.data.error == 0) {
              dispatch("getUserDetails");
              dispatch("getallExchange");
              commit("setisLoader", false);
              commit("setaddnewEx", false);
            }
          })
          .catch(err => {
            commit("setisLoader", false);
            return err;
          });
      } else {
        var endPoint = "updateExchange";
        commit("setisLoader", true);
        await axios
          .put(`${state.baseUrl}/exchange/${endPoint}`, {
            _id: state.currentclient_ID,
            website: payload.website,
            email: payload.email,
            contract: payload.contract,
            notes: payload.notes,
            exchangeCustomer: payload.exchangeCustomer,
            wdtUrl: payload.wdtUrl,
            contactName: payload.contactName,
            phone: payload.phone
          })
          .then(response => {
            if (response.data.error == 0) {
              dispatch("getUserDetails");
              dispatch("getallExchange");
              commit("setisLoader", false);
              commit("setaddnewEx", false);
            }
          })
          .catch(err => {
            commit("setisLoader", false);
            return err;
          });
      }
    },
    // -----------exchange info send title value ENDS-----------

    // =======-----------LogoComponent API --------------======
    async sendLogoInfo({ state, commit, dispatch }, payload) {
      var presentUser = "walmart";
      commit("setisLoader", true);
      let res = await axios
        .post(`${state.baseUrl}/logo/createLogo`, {
          exchangeId: state.currentclient_ID,
          logoPath: payload.logo,
          type: payload.type
        })
        .then(res => {
          dispatch("getUserDetails");
          commit("setisLoader", false);
        })
        .catch(err => {
          commit("setisLoader", false);
          return err;
        });
    },
    //--XX------------ Get Current Logo APi------------XX-
    async getLogo({ state, commit }, payload) {
      var presentUser = state.selectExchangeUser;
      let res = await axios
        .get(`${state.baseUrl}/logo/getLogo/${presentUser}`)
        .then(res => {
          commit("setgetLogo", res.data.data[0].logoPath);
        })
        .catch(err => {
          return err;
        });
    },
    // ========-----------LogoComponent API ENDS-----------============

    // ========-----------ColorSchemeComponent API -----------============
    async saveColorScheme({ state, commit, dispatch }, payload) {
      var presentUser = "walmart";
      commit("setisLoader", true);
      let res = await axios
        .post(`${state.baseUrl}/theme/saveColorTheme`, {
          exchangeId: state.currentclient_ID,
          color1: state.color1,
          color2: state.color2,
          color3: state.color3,
          color4: state.color4,
          color5: state.color5
        })
        .then(res => {
          dispatch("getUserDetails");
          commit("setisLoader", false);
        })
        .catch(err => {
          commit("setisLoader", false);
          return err;
        });
    }
    // ========-----------ColorSchemeComponent API ENDS-----------============

    //####### exchange info API ENDS #####
  }
});

export default store;
