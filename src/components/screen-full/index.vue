<template>
  <!-- <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn flat icon color="white" @click.native="screenFull">
        <v-icon>fullscreen</v-icon>
      </v-btn>
    </template>
    <span>1234</span>
  </v-tooltip>-->
  <v-tooltip bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" @click.native="screenFull">
        <v-icon color="white">fullscreen</v-icon>
      </v-btn>
    </template>
    <span>{{content}}</span>
  </v-tooltip>
</template>

<script>
import screenfull from "screenfull";
export default {
  name: "index",
  data() {
    return {
      isScreenFull: false,
      screenfull: screenfull
    };
  },
  computed: {
    content() {
      return this.isScreenFull ? "取消全屏" : "全屏";
    }
  },
  methods: {
    screenFull() {
      this.isScreenFull = !this.isScreenFull;
      if (!this.screenfull.enabled) {
        // 如果不允许进入全屏，发出不允许提示
        return false;
      }
      this.screenfull.toggle();
    }
  },
  mounted() {
    this.screenfull.onchange(event => {
      this.isScreenFull = this.screenfull.isFullscreen;
    });
  }
};
</script>

<style scoped>
</style>
