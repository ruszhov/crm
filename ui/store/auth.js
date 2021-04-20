export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  }
};

export const actions = {
  async login({ commit, dispatch }, formData) {
    // Clear all errors
    commit('clearError', null, {root: true});
    try {
      const token = await new Promise((resolve, reject) => {
        setTimeout(() => resolve('mock-token'), 2000);
      });
      // const token = await this.$axios.post('auth/', formData);
      // console.log(token);
      dispatch('setToken', token);
    } catch (e) {
      commit('setError', e, {root: true});
      throw e;
    }
  },
  setToken({ commit }, token) {
    commit('setToken', token);
  },
  logout({commit}) {
    commit('clearToken');
  }
};

export const getters = {
  isAuthenticated: (state) => Boolean(state.token),
};
