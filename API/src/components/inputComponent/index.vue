<script>
export default {
  name: "input-component",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    // @@外面input改裡面的值:這邊用物件編輯 取值跟拿值
    // @@並且這邊的名稱不可以使用檔案名
    inputText: {
      get() {
        return this.text
      },
      set(val) {
        // @@console.log(val);
        // @@this.$emit('inputText', val)
        // @@外面可簡略func:外面使用sync同步
        this.$emit('update:text', val)
      },
    },
  },
};
</script>

<template src="./template.html"></template>
<style src="./style.css" scoped></style>