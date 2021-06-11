<template>
  <q-card flat class="row q-py-xs q-px-none" style="flex-wrap: initial">
    <div class="grid-stack" v-for="item in displays" :key="item.id">
      <div class="grid-stack-item">
        <div class="grid-stack-item-content">Item 1</div>
      </div>
      <div class="grid-stack-item" gs-w="2">
        <div class="grid-stack-item-content">Item 2 wider</div>
      </div>
    </div>
  </q-card>
</template>

<style>
</style>

<script>
// import GridLayout from "./GridLayout.vue";
import GridStackService from "@/mixins/GridStackService";
import "gridstack/dist/gridstack.min.css";
import "gridstack/dist/h5/gridstack-dd-native";
// import "gridstack/dist/gridstack-extra.css";
import { GridStack } from "gridstack";
export default {
  name: "Display",
  mixins: [GridStackService],
  // components: { GridLayout },
  data() {
    return {
      options: {
        disableOneColumnMode: true, // for jfiddle small window size
        float: false,
        acceptWidgets: true,
      },
    };
  },
  mounted() {
    this.ActionSetGridLayout(GridStack.init(this.$options));
  },
};
</script>
