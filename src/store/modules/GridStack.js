// import { uid } from "quasar";
export default {
    namespaced: true,
    state: {
        gridLayout: [
        ],
        displays: [{
            id: 1,
            size: { height: 850, width: 640 }
        },
        {
            id: 2,
            size: { height: 425, width: 640 }
        },
        {
            id: 3,
            size: { height: 850, width: 640 }

        }
        ]
    },
    getters: {
        gridLayout: (state) => state.gridLayout,
        displays: (state) => state.displays
    },
    mutations: {
        SET_GRIDLAYOUT(state, payload) {
            state.gridLayout = payload;
        },
        ADD_GRID(state, payload) {
            state.gridLayout.push(payload)
        },
        ADD_GRIDITEM(state, payload) {
            const grid = state.gridLayout.find(item => item.id == payload.grid_id)
            const index = state.gridLayout.indexOf(grid)
            state.gridLayout[index].grid.push(payload)
        },
        REMOVE_GRID(state, payload) {
            state.gridLayout = state.gridLayout.filter(item => item.id != payload.id)
        },
        REMOVE_GRIDITEM(state, payload) {
            console.log('remove_gridItem', payload)
            const grid = state.gridLayout.find(item => item.id == payload.grid_id)
            const indexGrid = state.gridLayout.indexOf(grid)
            console.log(indexGrid)
            // state.gridLayout[indexGrid].grid = state.gridLayout[indexGrid].grid.filter(item => item.id != payload.id)
            const itemGrid = state.gridLayout[indexGrid].grid.find(item => item.id == payload.id)
            const indexItemGridGrid = state.gridLayout[indexGrid].grid.indexOf(itemGrid)
            state.gridLayout[indexGrid].grid.splice(indexItemGridGrid, 1)
        },
    },
    actions: {
        ActionSetGridLayout({ commit }, payload) {
            commit("SET_GRIDLAYOUT", payload);
        },
        ActionAddGridItem({ commit }, payload) {
            commit("ADD_GRIDITEM", payload);
        },
        ActionRemoveGridItem({ commit }, payload) {
            commit("REMOVE_GRIDITEM", payload);
        },
        ActionRemoveGrid({ commit }, payload) {
            commit("REMOVE_GRID", payload);
        },
    },
};
