// import { uid } from "quasar";
export default {
    namespaced: true,
    state: {
        gridLayout: [
            {
                id: '116ad842-f7bc-4140-887a-e90bf55541f5',
                size: { height: 850, width: 640 },
                row: 8,
                col: 5,
                margin: 5,
                grid: []
                // grid: [{ x: 0, y: 0, w: 2, h: 1, id: uid(), grid_id: '116ad842-f7bc-4140-887a-e90bf55541f5', title: "Teste 0" },
                // { x: 0, y: 1, h: 1, w: 2, id: uid(), grid_id: '116ad842-f7bc-4140-887a-e90bf55541f5', title: "Teste 1" }]
            },
            {
                id: '65eed9c8-e4cb-468f-8b11-931c226d8b3d',
                size: { height: 425, width: 640 },
                row: 4,
                col: 5,
                margin: 5,
                grid: []
                // grid: [
                //     { x: 0, y: 0, w: 2, h: 1, id: uid(), grid_id: '65eed9c8-e4cb-468f-8b11-931c226d8b3d', title: "Teste 2" },
                //     { x: 0, y: 1, h: 1, w: 2, id: uid(), grid_id: '65eed9c8-e4cb-468f-8b11-931c226d8b3d', title: "Teste 3" }
                // ]
            },
            {
                id: 'eca5801d-1173-4905-8057-459464b173b4',
                size: { height: 850, width: 640 },
                row: 8,
                col: 5,
                margin: 5,
                grid: []
                // grid: [{ x: 0, y: 0, w: 2, h: 1, id: uid(), grid_id: 'eca5801d-1173-4905-8057-459464b173b4', title: "Teste 5" },
                // { x: 0, y: 1, h: 1, w: 2, id: uid(), grid_id: 'eca5801d-1173-4905-8057-459464b173b4', title: "Teste 6" }]
            }
        ],
    },
    getters: {
        gridLayout: (state) => state.gridLayout
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
            state.gridLayout[indexGrid].grid = state.gridLayout[indexGrid].grid.filter(item => item.id != payload.id)
            // const itemGrid = state.gridLayout[indexGrid].grid.find(item => item.id == payload.id)
            // const indexItemGridGrid = state.gridLayout[indexGrid].grid.indexOf(itemGrid)
            // state.gridLayout[indexGrid].grid.splice(indexItemGridGrid, 1)
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
