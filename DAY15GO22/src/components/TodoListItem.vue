<template>
  <div class="todoInput">
    <input
      v-model.trim="edit"
      type="text"
      v-if="edit !== null"
      v-focus
      @keyup.enter="submitHandler"
      @keyup.esc="cancelHandler"
      @blur="cancelHandler"
    />
    <template v-else>
      <!-- @@ v-model="todo.complete" 不能直接這樣寫 因為會直接修改到vueX -->
      <input type="checkbox" v-model="complete" />
      <label @dblclick="editHandler">{{ todo.content }}</label>
      <button @click="delHandler" class="pad">X</button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      edit: null,
    };
  },
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    todo() {
      return this.$store.state.todos[this.index];
    },
    complete: {
      get() {
        return this.todo.complete;
      },
      set(val) {
        // UPDATE_TODOS(state, { index, data })
        // { content: "todo-content", complete: false },
        this.$store.commit("UPDATE_TODOS", {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val,
          },
        });
      },
    },
  },
  methods: {
    delHandler() {
      if (confirm('是否刪除')) {
        this.$store.commit("REMOVE_TODOS", this.index);
      }
    },
    editHandler() {
      this.edit = this.todo.content;
      // this.cache = this.todo.content;
    },
    submitHandler() {
      if (this.edit) {
        this.$store.commit("UPDATE_TODOS", {
          index: this.index,
          data: {
            content: this.edit,
            complete: this.todo.complete,
          },
        });
        this.cancelHandler()
      }else{
        this.delHandler()
      }
    },
    cancelHandler() {
      // @@ 不能空字串，否則全刪則不可以 this.edit = "";
      // @@ this.edit && this.todo.content 是分開的所以直接不給值就OK了
      this.edit = null;
    },
  },
};
</script>

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
.pad {
  margin-left: 1rem;
}
</style>
