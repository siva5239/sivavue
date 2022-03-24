<template>
 <div id="nav">
   <router-link to="/adddata">Adddata</router-link>|
   <router-link to="/getdata">Getdata</router-link>
   <router-view/>
  <HelloWorld/>
   <!-- <AddData/>
    <Getdata/> -->

   </div> 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import AddData from  './components/AddData.vue'
// import Getdata from './components/Getdata.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    //  AddData,
    // Getdata
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
