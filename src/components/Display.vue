<template>
  <q-card flat  class="row q-py-xs q-px-none" style="flex-wrap: initial">
    <grid-layout v-for="item in gridLayout" :key="item.id" :layout="item" />
  </q-card>
</template>

<style>
</style>

<script>
import GridLayout from "./GridLayout.vue";
import GridStackService from "@/mixins/GridStackService";
export default {
  name: "Display",
  mixins: [GridStackService],
  components: { GridLayout },
  data() {
    return {
    };
  },
};
</script>
