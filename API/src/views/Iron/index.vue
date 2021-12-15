<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    // @@ 要轉成整數
    // @@ query 導入網址比較不好看 (day?=1)
    // @@ params 網址比較好看
    // let day = parseInt(this.$route.query.day) - 1;
    let day = parseInt(this.$route.params.day) - 1;
    // this.day = day

    // 把 day 傳進 store
    this.$store.dispatch("GET_LIST", day);
    document.addEventListener("keyup", this.changeHandler);
  },
  watch: {
    $route() {
      // let day = parseInt(this.$route.query.day) - 1;
      let day = parseInt(this.$route.params.day) - 1;
      this.day = day;
    },
  },
  computed: {
    day: {
      get() {
        return this.$store.state.day;
      },
      set(val) {
        // this.$store.state.day = val;

        // @@ store 資料連動正確做法(否則開啟嚴謹模式會壞掉)
        this.$store.commit("SET_DAY", val);
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

        // @@ store 資料網址連動(直接叫他去替換裡面的day)
        this.$store.replace({
          params: { day: day + 1 },
        });
      },
    },
    header() {
      return this.$store.state.header;
    },
    list() {
      return this.$store.state.list;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>