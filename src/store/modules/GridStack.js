export default {
    namespaced: true,
    state: {
        layouts: [],
    },
    getters: {
        layouts: (state) => state.layouts,
    },
    mutations: {
        SET_LAYOUTS(state, payload) {
            state.layouts = payload;
        },
    },
    actions: {
        ActionSetLayouts({ commit }, payload) {
            commit('SET_LAYOUTS', payload);
        },
    },
};