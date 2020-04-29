<template>
  <div class="flex-column justify-center">
    <div v-for="task in this.$store.state.tasks" v-bind:key="task.id">
      <TaskItem v-bind:task="task.task" v-bind:id="task.id" />
    </div>
  </div>
</template>

<script lang="ts">
import TaskItem from "@/components/TaskItem.vue";

export default {
  name: "TaskList",
  components: {
    TaskItem
  }
};
</script>
