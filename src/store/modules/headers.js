import UserRoleComponent from "./../../json/UserRoleComponentNew.json"; //added New for previos Json
import LeftMenuJson from "./../../json/LeftMenuData.json";
import axios from "axios";
export default {
  state: {
    roleContentJson: UserRoleComponent,
    leftMenuJsonData: LeftMenuJson,
    RoleContent: [],
    pageInfo: {},
    LeftmenuObject: {},
    brandData: {
      exchangeLogo: "",
      exchangeName: "",
      largeAppMenuItems: "",
      smallMenuItems: "",
      themeColors: "",
      userName: ""
    },
    alert: false,
    exchangeTitle: '',
    selectExchangeUser: 'client@gmail.com',
    getLogo: '',
    color1: '',
    color2: '',
    color3: '',
    color4: '',
    color5: '',
    isLoader: false
  },
  getters: {
    getRoleJson: state => state.roleContentJson,
    getRoleContent: state => state.RoleContent,
    getPageInfo: state => state.pageInfo,
    getLeftMenuData: state => state.leftMenuJsonData,
    getLeftMenuName: state => state.LeftmenuObject,
    getbrandData: state => state.brandData,
    getalertInfo: state => state.alert,
    getexchangeInfo: state => state
  },
  actions: {
    sendRoleContent({
      commit
    }, payload) {
      commit("setRoleContent", payload);
    },
    sendContentInfo({
      commit
    }, payload) {
      commit("setPageTitle", payload);
    },
    LeftMenuContentName({
      commit
    }, payload) {
      commit("setMenuName", payload);
    },
    //========== ExchangeInfo ===========
    // updateExchangeUser({
    //   commit
    // }, payload) {
    //   console.log(payload, 'from headers store updatexchangeuser');

    //   commit('setExchangeUser', payload)
    // },
    //============ APIs ======
    //####### header API  ####
    async fetchJson({
      state,
      commit
    }, payload) {
      commit("updateAlert", false);
      if (payload.email !== "hr@gmail.com") {
        var clientName = payload.email.toLowerCase();
      } else {
        var clientName = payload.role.toUpperCase() + "@gmail.com";
      }
      let res = await axios
        .post(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/menuGenerator`, {
            userName: clientName
          }
        )
        .then(res => {
          commit("updateUserData", res.data);
        })
        .catch(err => {
          return err;
        });
    },
    //####### header API ENDs ####


    //####### exchange info API
    // -----------common API to fetch data for user-----------
    async getUserDetails({
      state,
      commit
    }, payload) {
      // commit("updateAlert", false);
      // commit("updateisLoader", true);
      await axios
        .get(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/exchange/getLogoAndTheme/${state.selectExchangeUser}`
        )
        .then(response => {
          // console.log(response.data.data, 'from common API getUserDetails');
          commit("updategetLogo", response.data.data.logo[0].logoPath); //setting up Logo path
          commit("updatecolor1", response.data.data.colorTheme[0].color1) //setting up color Scheme
          commit("updatecolor2", response.data.data.colorTheme[0].color2)
          commit("updatecolor3", response.data.data.colorTheme[0].color3)
          commit("updatecolor4", response.data.data.colorTheme[0].color4)
          commit("updatecolor5", response.data.data.colorTheme[0].color5)
          commit("updateexchangeTitle", response.data.data.exchange[0].exchangeName) //setting up v-model of title/ ExchangeName
        })
        .catch(err => {
          // commit("updateisLoader", false);
          return err;
        });
    },
    // -----------common API to fetch data for user ENDS-----------


    async exchangeInfo({
      state,
      commit
    }, payload) {
      commit("updateAlert", false);
      commit("updateisLoader", true);
      await axios
        .post(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/exchange/createExchange`, {
            user: state.selectExchangeUser,
            exchangeName: payload.title
          }
        )
        .then(response => {
          if (response.data.error == 0) {
            commit("updateAlert", true);
            commit("updateisLoader", false);
          }
        })
        .catch(err => {
          commit("updateisLoader", false);
          return err;
        });
    },

    //####### exchange info API ENDS #####
    //####### exchangeInfo/ logo page API  ####
    async sendLogoInfo({
      state,
      commit
    }, payload) {
      // commit("updateAlert", false);      
      commit("updateisLoader", true);
      let res = await axios
        .post(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/logo/createLogo`, {
            user: state.selectExchangeUser,
            logoPath: payload.logo,
            type: payload.type
          }
        )
        .then(res => {
          // console.log(res, 'response from sendLogoInfo');
          // commit("updateUserData", res.data);
          commit("updateisLoader", false);

        })
        .catch(err => {
          commit("updateisLoader", false);
          return err;
        });
    },
    //-------------- Get Current Logo APi-------------
    async getLogo({
      state,
      commit
    }, payload) {
      // commit("updateAlert", false);      
      let res = await axios
        .get(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/logo/getLogo/${state.selectExchangeUser}`
        )
        .then(res => {
          // console.log(res.data.data[0].logoPath, 'response from getLogo');
          commit("updategetLogo", res.data.data[0].logoPath);
        })
        .catch(err => {
          return err;
        });
    },
    //------------------ color Scheme API -------------------
    async getColorScheme({
      state,
      commit
    }, payload) {
      // commit("updateAlert", false);
      let res = await axios
        .get(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/theme/getColorTheme/${state.selectExchangeUser}`
        )
        .then(res => {
          // console.log(res.data.data, 'response from get color scheme');
          commit("updatecolor1", res.data.data.color1)
          commit("updatecolor2", res.data.data.color2)
          commit("updatecolor3", res.data.data.color3)
          commit("updatecolor4", res.data.data.color4)
          commit("updatecolor5", res.data.data.color5)
          // commit("updategetLogo", res.data.data[0].logoPath);
          // commit("updateAlert", true);
        })
        .catch(err => {
          return err;
        });
    },
    async saveColorScheme({
      state,
      commit
    }, payload) {
      commit("updateAlert", false);
      commit("updateisLoader", true);
      let res = await axios
        .post(
          `https://gar8ww5eab.execute-api.us-east-2.amazonaws.com/dev/theme/saveColorTheme`, {
            user: state.selectExchangeUser,
            color1: state.color1,
            color2: state.color2,
            color3: state.color3,
            color4: state.color4,
            color5: state.color5,
          }
        )
        .then(res => {
          // console.log(res, 'response from save color scheme');
          // commit("updategetLogo", res.data.data[0].logoPath);
          commit("updateAlert", true);
          commit("updateisLoader", false);

        })
        .catch(err => {
          commit("updateisLoader", false);

          return err;
        });
    },
    //####### exchangeInfo/ logo page API ENDs ####
    //============ APIs ENDS ===========
  },
  mutations: {
    setRoleContent: (state, data) => {
      state.RoleContent = data;
    },
    setPageTitle: (state, data) => {
      state.pageInfo = data;
    },
    setMenuName: (state, data) => {
      state.LeftmenuObject = data;
    },
    updateAlert: (state, data) => {
      state.alert = data;
    },
    updateUserData: (state, data) => {
      state.brandData.exchangeLogo = data.exchangeLogo;
      state.brandData.exchangeName = data.exchangeName;
      state.brandData.largeAppMenuItems = data.largeAppMenuItems;
      state.brandData.smallMenuItems = data.smallMenuItems;
      state.brandData.themeColors = data.themeColors;
      state.brandData.userName = data.userName;
    },
    // -------- exchange user mutations ----------
    updateexchangeTitle: (state, data) => {
      state.exchangeTitle = data;
    },
    updateExchangeUser: (state, data) => {
      state.selectExchangeUser = data;
    },
    updategetLogo: (state, data) => {
      state.getLogo = data;
    },
    updatecolor1: (state, data) => {
      state.color1 = data;
    },
    updatecolor2: (state, data) => {
      state.color2 = data;
    },
    updatecolor3: (state, data) => {
      state.color3 = data;
    },
    updatecolor4: (state, data) => {
      state.color4 = data;
    },
    updatecolor5: (state, data) => {
      state.color5 = data;
    },
    updateisLoader: (state, data) => {
      state.isLoader = data;
    },
  }
};
