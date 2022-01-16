<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <XD/>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!--  -->
    <Welcome/>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import XD from './components/XD.vue'
import Welcome from './components/Welcome1.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // XD,
    Welcome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black; /*  #color letra */
  margin-top: 60px;
  background-color: white;/*  #color fondo */
}
</style>
