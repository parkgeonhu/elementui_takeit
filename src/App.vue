<template>
  <div id="app">
<Store></Store>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import Store from './components/Store.vue'

export default {
  name: 'app',
  components: {
Store
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
