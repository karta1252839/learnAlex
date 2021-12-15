<template>
  <div class="todoInput">
    <input
      v-model.trim="todo"
      type="text"
      placeholder="請輸入代辦事項"
      @keyup.enter="submitHandler()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: null,
    };
  },
  methods: {
    submitHandler() {
      if (this.todo) {
        return this.$store.commit("ADD_TODOS", {
          content: this.todo,
          complete: false,
        });
      }
      this.todo = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
