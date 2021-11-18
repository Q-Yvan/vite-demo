<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <Layout />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Layout from './components/Layout.vue'
// import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    // HelloWorld,
    Layout
  },
})
export default class App extends Vue {}
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
