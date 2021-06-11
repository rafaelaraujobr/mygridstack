<template>
  <q-page>
    <q-resize-observer @resize="onResize" />
    <display :size="size" />
  </q-page>
</template>

<script>
// @ is an alias to /src
import Display from "@/components/Display.vue";

export default {
  name: "Home",
  data() {
    return {
      size: { width: 200, height: 200 },
    };
  },
  methods: {
    onResize(size) {
      this.size = size;
    },
  },
  components: {
    Display,
  },
};
</script>
