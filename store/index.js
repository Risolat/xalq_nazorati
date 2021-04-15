export const state = () => ({
  stats: {},
  baseURL: 'https://xn.technocorp.uz/api',
  headers: {
    "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
  },
  issues: [],
});
export const getters = {};

export const actions = {
  async getStats({ commit }) {
    await this.$axios("/data-count", { headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      } })
      .then(res => {
        commit("setStats", res.data);
        console.log("From Store", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getIssues({ commit }) {
    await this.$axios("/references", { headers: {
        "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
      } })
      .then(res => {
        commit("setIssues", res.data);
        console.log("From Store", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
};

export const mutations = {
  setStats(state, payload) {
    state.stats = payload;
    console.log("qwerty", payload);
  },
  setIssues(state, payload){
      state.issues = payload;
      console.log('Risolat', payload)
  }
};

// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

// const store = () => new Vuex.Store({
//     state: {
//       baseURL: 'https://xn.technocorp.uz/api',
//       headers: {
//         "web-app-key": "xnazorat-79d1d41ae76d9543d29fca7270fbe69a-web"
//       },
//       referenceParentId: 2,
//       stats: {
//         usersNum: "qwerty",
//         ticketsCompleted: "",
//         ticketsNum: "",
//       }
//     },
//     getters: {
//       getStats(state) {
//         return state.stats;
//       },
//     },
//     mutations: {

//       setStats(state, payload) {
//         state.stats = payload;
//         console.log("asdfg", state.stats);

//       }
//     },

//     actions: {
//       async getStats({ commit }) {
//         await this.$axios("/data-count", { headers: this.headers })
//           .then(res => {
//             commit("setStats", res.data);
//             console.log("From Store", res.data);
//           })
//           .catch(err => {
//             console.log(err);
//           });
//       }
//     }
//   });

// export default store;
