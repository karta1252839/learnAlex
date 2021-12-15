<template>
  <div>
    <router-link to="/alex/Info">Info</router-link> |
    <router-link to="/alex/Youtube">Youtube</router-link> |
    <!--  @@ 如果網址太長 可以考慮用name -->
    <!-- <router-link :to='{name:"alex-youtube"}'>Youtube</router-link> | -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>