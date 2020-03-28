<template>
  <div class="h-center">
    <div class="tl w-60">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-todo-name"
          label="To-Do Name:"
          label-for="input-todo-name"
        >
          <b-form-input
            id="todo-name"
            type="text"
            required
            placeholder="Enter to-do name"
            v-model="form.todoName"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-todo-desc"
          label="To-Do Description:"
          label-for="input-todo-desc"
        >
          <b-form-input
            id="todo-desc"
            type="text"
            required
            placeholder="Enter to-do description"
            v-model="form.todoDesc"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" class="vue-green mr2">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "Taskboard",
  data() {
    return {
      form: {
        todoName: "",
        todoDesc: ""
      },
      show: true
    };
  },
  methods: {
    clearForm() {
      // Reset our form values
      this.form.todoName = "";
      this.form.todoDesc = "";

      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onSubmit(evt) {
      evt.preventDefault();
      const { todoName, todoDesc } = this.form;
      this.$store.dispatch("addTodo", { id: uuidv4(), todoName, todoDesc });
      this.clearForm();
    },
    onReset(evt) {
      evt.preventDefault();
      this.clearForm();
    }
  }
};
</script>

<style>
.h-center {
  display: flex;
  justify-content: center;
}

.vue-green {
  background: #42b883;
  border-color: #42b883;
}

.vue-green:hover {
  background: #3ba475;
  border-color: #3ba475;
}
</style>
