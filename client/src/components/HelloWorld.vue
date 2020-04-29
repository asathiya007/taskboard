<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      This app was built by Akshay Sathiya using Vue (with Vue Router, Vuex, and TypeScript).
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>
