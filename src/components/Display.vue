<template>
  <div class="row q-py-xs q-px-none" style="flex-wrap: initial">
    <grid-layout
      :colNum="6"
      :maxRows="5"
      :colorGrid="'#e0e0e0'"
      :bgGrid="'#fff'"
      :layout="layout1"
      :height="800"
      :width="1000"
    />
    <!-- <grid-layout
      :colNum="3"
      :maxRows="3"
      :colorGrid="'#e0e0e0'"
      :bgGrid="'#000'"
      :layout="layout2"
      :height="400"
      :width="500"
    /> -->
  </div>
</template>

<style>
</style>

<script>
import GridLayout from "./GridLayout.vue";
export default {
  name: "Display",
  components: { GridLayout },
  data() {
    return {
      layout1: [
        { x: 0, y: 0, w: 1, h: 1 },
        { x: 0, y: 1, h: 1, w: 1 },
      ],
      layout2: [
        { x: 0, y: 0, w: 1, h: 1 },
        { x: 0, y: 1, h: 1, w: 1 },
      ],
    };
  },
};
</script>
