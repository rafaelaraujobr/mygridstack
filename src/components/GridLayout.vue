<template>
  <div
    :id="`grid-${layout.id}`"
    class="grid-stack"
    :class="`grid-stack-${layout.col}`"
    :style="styleGrid"
    @contextmenu="getPositionGrid($event)"
  >
    <grid-item
      v-for="item in layout.grid"
      :key="item.i"
      :item="item"
      :grid="layout"
      @remove="
        (item) => {
          removeGridItem(item, false);
        }
      "
    />
    <q-card flat class="absolute-bottom-right bg-grey text-white q-px-sm">
      Qtd:{{ layout.grid.length }}
    </q-card>
    <!-- <q-dialog v-model="dialog">
      <q-card
        class="absolute"
        :style="`min-width: ${layout.size.width}px; left:${positionDialog.left}px !important`"
      >
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
  </div>
</template>
<script>
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";
import GridItem from "@/components/GridItem.vue";
import GridStackService from "@/mixins/GridStackService";
import { GridStack } from "gridstack";
import { uid } from "quasar";

export default {
  name: "GridLayout",
  components: { GridItem },
  mixins: [GridStackService],
  props: {
    layout: Object,
  },
  data() {
    return {
      grid: undefined,
      dialog: false,
      positionDialog: {
        top: 0,
        left: 0,
      },
    };
  },
  methods: {
    async getPositionGrid(event) {
      let positionGrid = await this.$el.getBoundingClientRect();
      this.positionDialog.left =
        positionGrid.left + positionGrid.width / 2 - this.layout.size.width / 2;
      this.dialog = true;
      event.stopPropagation();
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
        grid_id: this.layout.id,
        title: `${this.layout.grid.length}`,
        extras: { url: "https://placeimg.com/500/300/nature" },
      };
      if (check) this.addGridItem(el, true);
    },
    async addGridItem(el, eventGrid) {
      console.log("ADD GRID");
      await this.ActionAddGridItem(el);
      if (eventGrid) await this.grid.makeWidget(document.getElementById(el.id));
    },
    async removeGridItem(el) {
      console.log("REMOVE GRID");
      await this.ActionRemoveGridItem(el);
      // if (eventGrid)
      //   await this.grid.removeWidget(document.getElementById(el.id));
    },

    getGridItem(id) {
      console.log("GET GRID ID");
      let gridItem;
      this.gridLayout.forEach((itemGrid) => {
        let gridItemFind = itemGrid.grid.find((item) => item.id == id);
        if (gridItemFind) gridItem = gridItemFind;
      });
      return gridItem;
    },

    listenEventGrid() {
      //troca de display
      this.grid.on("dropped", this.changeItemGrid);

      this.grid.on("removed", (event, items) => {
        items.forEach((item) => {
          let el = this.getGridItem(item.el.id);
          console.log(el);
          //  this.ActionRemoveGridItem(el);
        });
      });
      // this.grid.on("change", (event, itens) => {
      //   console.log("change ===>", event, itens);
      //   console.log(this.grid.cellWidth());
      // });

      // this.grid.on("dragstart", (event, item) => {
      //   console.log("dragstart ===>", event, item);
      // });

      // this.grid.on("dragstop", (event, item) => {
      //   console.log("dragstop ===>", event, item);
      // });

      // this.grid.on("resizestart", (event, item) => {
      //   console.log("resizestart ===>", event, item);
      // });

      // this.grid.on("resizestop", (event, item) => {
      //   console.log("resizestop ===>", event, item);
      // });
    },
    async changeItemGrid(event, previousWidget, newWidget) {
      console.log("CHANGE DISPLAY");
      let gridItemSelect = await this.getGridItem(previousWidget.el.id);
      await this.grid.removeWidget(document.getElementById(newWidget.el.id));
      await this.addGridItem(
        {
          grid_id: this.layout.id,
          id: newWidget.el.id,
          title: gridItemSelect.title,
          extras: gridItemSelect.extras,
          w: newWidget.w,
          h: newWidget.h,
          x: newWidget.x,
          y: newWidget.y,
        },
        true
      );
    },
  },
  computed: {
    option() {
      return {
        acceptWidgets: true,
        column: this.layout.col,
        handleClass: "header-app",
        maxRow: this.layout.row,
        disableOneColumnMode: true,
        cellHeight: this.layout.size.height / this.layout.row,
        margin: this.layout.margin,
        float: true,
      };
    },
    styleGrid() {
      return {
        minHeight: `${
          this.layout.size.height
            ? this.layout.size.height + "px"
            : this.$q.screen.height - 107 + "px"
        }`,
        maxHeight: `${
          this.layout.size.height
            ? this.layout.size.height + "px"
            : this.$q.screen.height - 107 + "px"
        }`,
        minWidth: `${
          this.layout.size.width ? this.layout.size.width + "px" : 100 + "%"
        }`,
        maxWidth: `${
          this.layout.size.width ? this.layout.size.width + "px" : 100 + "%"
        }`,
        backgroundSize: `calc(100% / ${this.layout.col}) calc(100% / ${this.layout.row}`,
        backgroundImage: `
        linear-gradient(90deg,#e0e0e0, transparent 1px),
        linear-gradient(90deg, transparent calc(100% - 1px), #e0e0e0),
        linear-gradient( #e0e0e0, transparent 1px),
        linear-gradient(transparent calc(100% - 1px),#e0e0e0 100%)`,
        backgroundPosition: `0 0`,
        backgroundColor: `${this.layout.bgGrid}`,
      };
    },
  },
  mounted() {
    this.grid = GridStack.init(this.option, this.$el);
    this.listenEventGrid();
  },
};
</script>

<style lang="scss">
.grid-stack .placeholder-content {
  background: #000;
  opacity: 0.2;
}
</style>