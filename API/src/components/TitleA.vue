<template>
  <h1>{{title}}</h1>
</template>

<script>
export default {
  name:'TitleA',
  props: {
    title: {
      type: String,
      required:true
    },
  },
};
</script>

<style scoped>
/* @@scoped 讓CSS有編號，則不會跟其他頁重複*/
h1 {
  color: #ff7f50;
}
</style>