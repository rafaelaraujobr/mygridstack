import { mapActions, mapGetters } from "vuex";
// import { uid } from "quasar";

export default {
    data() {
        return {
        };
    },
    methods: {
        ...mapActions("GridStack", [
            "ActionSetGridLayout", "ActionAddGridItem", "ActionRemoveGridItem", "ActionRemoveGrid"
        ]),
        
        // createGridInit() {
        //     let layout = [];
        //     for (let row = 0; row < this.maxRows; row++) {
        //         for (let col = 0; col <= this.colNum; col++) {
        //             layout.push({ x: col, y: row, h: 1, w: 1, i: uid() });
        //         }
        //     }
        //     return layout;
        // },
    },
    computed: {
        ...mapGetters("GridStack", [
            "gridLayout"
        ]),
    },
};
