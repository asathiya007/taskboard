<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <img
      alt="Django logo"
      src="../assets/django.png"
      width="200px"
      class="mh6"
    />
    <img
      alt="PostgreSQL logo"
      src="../assets/postgres.png"
      width="200px"
    />
    <HelloWorld msg="Welcome to Taskboard!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
