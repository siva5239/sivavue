<template>
   <div id="app">
 
  <router-link to="/adddata">Adddata</router-link>|
   <router-link to="/getdata">Getdata</router-link>
   <router-view />
    <HelloWorld/>
   </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Adddata from './components/Adddata.vue'
// import Getdata from './components/Getdata.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
  //   Adddata,
  //   Getdata
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
