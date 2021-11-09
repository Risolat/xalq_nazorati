export const state = () => ({
  stats: {},
  baseURL: 'https://xn.technocorp.uz/api',
  issues: [],
  user: [],
});
export const getters = {};

export const actions = {
  async getStats({ commit }) {
    await this.$axios("/data-count")
      .then(res => {
        commit("setStats", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  },
  async getIssues({ commit }) {
    await this.$axios("/references")
      .then(res => {
        commit("setIssues", res.data);
        console.log("MS-test", res)
      })
      .catch(err => {
        console.log(err);
      });
  },
  
  async getUser({ commit }) {
    await this.$axios("/user/me")
      .then(res => {
        commit("setUser", res.data.data);
        console.log("User", res)
      })
      .catch(err => {
        console.log(err);
      });
  },
};

export const mutations = {
  setStats(state, payload) {
    state.stats = payload;
  },
  setIssues(state, payload){
      state.issues = payload;
  },
  setUser(state, payload){
    state.user = payload;
}
};
