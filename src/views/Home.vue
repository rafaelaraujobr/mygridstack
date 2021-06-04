<template>
  <q-page padding>
    <display />
  </q-page>
</template>

<script>
// @ is an alias to /src
import Display from "@/components/Display.vue";

export default {
  name: "Home",
  components: {
    Display,
  },
};
</script>
