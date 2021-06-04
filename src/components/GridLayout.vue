<template>
  <div
    :id="`grid-${_uid}`"
    class="grid-stack"
    :class="`grid-stack-${colNum}`"
    :style="styleGrid"
    @click="getPositionGrid($event)"
  >
    <grid-item v-for="item in itens" :key="item.i" :item="item" />
    <q-card flat class="absolute-bottom-right bg-dark text-white q-px-sm">{{
      itens.length
    }}</q-card>
  </div>
</template>

<script>
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";
import { GridStack } from "gridstack";
import GridItem from "./GridItem.vue";
import { uid } from "quasar";
export default {
  name: "GridLayout",
  components: { GridItem },
  props: {
    layout: Array,
    colNum: Number,
    maxRows: Number,
    rowHeight: Number,
    margin: Number,
    isDraggable: Boolean,
    isResizable: Boolean,
    height: Number,
    width: Number,
    colorGrid: String,
    bgGrid: String,
  },
  data() {
    return {
      grid: undefined,
      itens: this.layout,
    };
  },
  methods: {
    async getPositionGrid(event) {
      let position = this.grid.getCellFromPixel(
        { left: event.pageX, top: event.pageY },
        true
      );
      let check = this.grid.isAreaEmpty(position.x, position.y, 1, 1);
      const el = {
        id: uid(),
        x: position.x,
        y: position.y,
        w: 1,
        h: 1,
        url: "https://placeimg.com/500/300/nature",
      };
      if (check) this.addGridItem(el);
    },
    async addGridItem(el) {
      console.log("ADD GRID");
      await this.itens.push(el);
      await this.grid.makeWidget(`#${el.id}`);
    },
    async removeGridItem(el, removeGrid) {
      console.log("REMOVE GRID");
      let item = this.itens.find((item) => item.id == el.id);
      if (item) this.itens.splice(this.itens.indexOf(item));
      if (removeGrid) this.grid.removeWidget(el);
    },
  },
  computed: {
    option() {
      return {
        acceptWidgets: true,
        column: this.colNum,
        handleClass: "header-app",
        maxRow: this.maxRows,
        cellHeight: this.height / this.maxRows || this.rowHeight,
        margin: this.margin,
        float: true,
      };
    },
    styleGrid() {
      return {
        minHeight: `${this.height}px`,
        maxHeight: `${this.height}px`,
        backgroundSize: `calc(100% / ${this.colNum}) calc(100% / ${this.maxRows}`,
        backgroundImage: `
        linear-gradient(90deg, ${this.colorGrid}, transparent 1px),
        linear-gradient(90deg, transparent calc(100% - 1px),  ${this.colorGrid}),
        linear-gradient( ${this.colorGrid}, transparent 1px),
        linear-gradient(transparent calc(100% - 1px),  ${this.colorGrid} 100%)`,
        backgroundPosition: `0 0`,
        width: `${this.width}px`,
        backgroundColor: `${this.bgGrid}`,
      };
    },
  },
  mounted() {
    this.grid = GridStack.init(this.option, this.$el);
  },
};
</script>

<style lang="scss">
.grid-stack .placeholder-content {
  background: #000;
  opacity: 0.2;
}
</style>