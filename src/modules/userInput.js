const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
export const userInput = {
  namespaced: true,
  state: {
    name: ""
  },
  getters: {
    hasValue: state => state.name === ""
  },
  mutations: {
    setName(state, payload) {
      state.name = payload.input;
    }
  },
  actions: {
    async asyncSleep({ commit }, payload) {
      await sleep(payload.time);
      console.log(payload);
      commit("setName", { input: payload.time });
    }
  }
};
