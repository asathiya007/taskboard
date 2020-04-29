<template>
  <div id="app">
    <b-navbar id="nav" class="mb2 pv1" toggleable="lg" type="light">
      <b-navbar-brand class="f2" href="/">Taskboard</b-navbar-brand>
      <div class="ml-auto">
        <router-link to="/">Home</router-link>
        <router-link to="/taskboard">Taskboard</router-link>
      </div>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background: #42b883;
}

#nav a {
  font-weight: bold;
  color: white;
  margin-right: 20px;
  margin-left: 20px;
}

#nav a.router-link-exact-active {
  color: darkgreen;
}
</style>
