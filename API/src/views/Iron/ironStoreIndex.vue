<template>
  <div></div>
</template>

<script>
// @@ 模組 import
import ironStore from "@/ironStore.js";

export default {
  mounted() {
    let day = parseInt(this.$route.params.day) - 1;
    // @@ list/
    this.$store.dispatch("list/GET_LIST", day);
    // @@ 模組 註冊
    this.$store.registerModule("list", ironStore);
    document.addEventListener("keyup", this.changeHandler);
  },
  beforeDestroy() {
    this.$store.unregisterModule("list");
    document.removeEventListener("keyup", this.changeHandler);
  },
  watch: {
    $route() {
      let day = parseInt(this.$route.params.day) - 1;
      this.day = day;
    },
  },
  methods: {
    changeHandler(e) {
      let day = this.day;
      if (e.keycode === 39) {
        day = day < 29 ? day + 1 : day;
      } else if (e.keycode === 37) {
        day = day > 0 ? day - 1 : day;
      }

      this.$store.replace({
        params: { day: day + 1 },
      });
    },
  },
  computed: {
    day: {
      get() {
        // @@ list/
        return this.$store.state.list ? this.$store.state.list.day : 0;
      },
      set(val) {
        // @@ list/
        this.$store.commit("list/SET_DAY", val);
      },
    },
    header() {
      // @@ list/
      // 報錯時 判斷
      return this.$store.state.list ? this.$store.state.list.header : null;
    },
    list() {
      // @@ list/
      return this.$store.state.list ? this.$store.state.list.list : [];
    },
    currentDay(){
      // @@ getters 拿法
      return this.$store.state.list ? this.$store.getters['list/currentDay'] : null;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>