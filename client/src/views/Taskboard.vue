<template>
  <div class="mt4">
    <b-form @submit="onSubmit" v-if="show">
      <div class="flex justify-center">
        <b-form-group id="input-task" class="mv0 pv0 w-30">
          <b-form-input
            id="task"
            v-model="form.task"
            required
            placeholder="Enter task"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success" class="pv0">Add</b-button>
      </div>
      <div class="mt3 flex justify-center">
        <TaskList />
      </div>
    </b-form>
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";

export default {
  name: "Taskboard",
  data() {
    return {
      form: {
        task: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.$store.dispatch("addTodo", this.form.task);
      this.form.task = "";
    }
  },
  mounted() {
    // get the tasks from the database
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => res.json())
    //   .then(data => (this.users = data));
    console.log("mounted");
  },
  components: {
    TaskList
  }
};
</script>
