<template>
  <div class="flex justify-between">
    <b-badge variant="dark" class="f3 mv2 pv2 mr3">{{ task }}</b-badge>
    <b-button variant="danger" class="f3 mv1 pt1 pb0" v-on:click="onDelete(id)">
      X
    </b-button>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task", "id"],
  methods: {
    onDelete(id) {
      this.$store.dispatch("removeTodo", id);
    }
  }
};
</script>
