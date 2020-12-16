<template>
  <div id="app">
    <HomeArticlesLine></HomeArticlesLine>
  </div>
</template>

<script>
import HomeArticlesLine from "./components/Home/Articles/HomeArticlesLine";

export default {
  name: 'App',
  components: {
    HomeArticlesLine,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
