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
    <q-card flat bordered class="fit bg-primary">
      <q-img :src="item.url" spinner-color="white" class="fit"> </q-img>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "GridItem",
  props: {
    item: Object,
  },
};
</script>

<style>
</style>