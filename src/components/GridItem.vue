<template>
  <div
    class="grid-stack-item"
    :gs-w="item.w"
    :gs-h="item.h"
    :gs-x="item.x"
    :gs-y="item.y"
    :id="item.id"
    :gs-min-w="item.minW || 1"
    :gs-min-h="item.minH || 1"
  >
    <q-card flat bordered class="fit bg-grey-2">
      <q-resize-observer @resize="onResize" />
      <q-toolbar
        class="q-pl-sm q-pr-none"
        style="min-height: 30px"
        v-if="header"
      >
        <q-toolbar-title> {{ item.title }} </q-toolbar-title>
        <q-btn flat dense icon="mdi-close" @click="$emit('remove', item)" />
      </q-toolbar>
      <q-separator />
      <div class="text-caption">{{ item.id }}</div>
    </q-card>
  </div>
</template>

<script>
import GridStackService from "@/mixins/GridStackService";
export default {
  name: "GridItem",
  mixins: [GridStackService],
  props: {
    item: Object,
    grid: Object,
  },
  data() {
    return {
      header: true,
      size: {
        height: 200,
        width: 200,
      },
    };
  },
  methods: {
    onResize(size) {
      this.size = size;
    },
  },
};
</script>

<style>
</style>