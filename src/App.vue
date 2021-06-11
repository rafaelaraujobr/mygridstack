<template>
  <q-layout :view="displayFull ? 'lHh Lpr fFf' : 'hHh Lpr fFf'">
    <q-header
      :class="!header ? 'header-bar-hide' : 'header-bar-show'"
      style="background-color: #2866a4"
      @mouseover="headerHide($event, true)"
      @mouseout="headerHide($event, false)"
    >
      <q-toolbar :class="!header ? 'toolbar-hide' : 'toolbar-show'">
        <q-toolbar-title> mygridstack </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="displayFulled(!displayFull)"
          :icon="!displayFull ? 'mdi-arrow-up' : 'mdi-arrow-down'"
        />
      </q-toolbar>
    </q-header>
    <q-page-container :class="$q.dark.isActive ? '' : 'bg-grey-1'">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "LayoutMain",
  components: {},
  data() {
    return {
      header: true,
      displayFull: false,
      menuTimeout: null,
      timeOut: 200,
      timeOver: 1000,
    };
  },
  methods: {
    displayFulled(val) {
      this.displayFull = val;
      // this.$q.fullscreen.toggle();
      if (val) this.header = false;
      else this.header = true;
    },
    headerHide(e, val) {
      // console.log(e.clientY)
      if (this.displayFull) {
        clearTimeout(this.menuTimeout);
        this.menuTimeout = null;
        this.menuTimeout = setTimeout(
          () => {
            this.header = val;
          },
          val ? this.timeOut : this.timeOver
        );
      }
    },
    hideToolBar() {
      this.header = !this.header;
    },
  },
};
</script>

<style>
.q-drawer {
  background: transparent !important;
}
.dark-dinner {
  background: #0000008f;
}
.header-bar-hide {
  transform: translateY(-10px);
  transition: all 0.9s;
}
.header-bar-show {
  transform: translateY(0px);
  transition: all 0.5s;
}
.toolbar-hide {
  max-height: 0 !important;
  min-height: 0 !important;
  opacity: 0;
  top: 10px !important;
  transition: all 0.9s;
}
</style>
