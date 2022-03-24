<template>
<div>
    <h1>get data</h1>
    <!-- <ul v-for="(used,i) in result" :key='i'>
        <li>{{used.basicaddcontactform}}</li>
        <li>{{used.selectactionset}}</li>
        <li>{{used.FirstName}}</li>
        <li>{{used.LastName}}</li>
        <li>{{used.email}}</li>
        <li>{{used.phone}}</li>
        <li>{{used.work1}}</li>
        <li>{{used.office}}</li>
        <li>{{used.fax}}</li>
        <li>{{used.work}}</li>
        <li>{{used.tags}}</li>
           

    </ul> -->
    <table class="table">
         <thead class="thead-light">
        <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>phone</th>
            <th>work1</th>
            <th>office</th>
            <th>fax</th>
            <th>work</th>
            <th>tags</th>
            

        </tr>
         </thead>
        <tr v-for="(used,i) in result" :key='i'>
           <td>{{used.FirstName}}</td>
        <td>{{used.LastName}}</td>
        <td>{{used.email}}</td>
        <td>{{used.phone}}</td>
        <td>{{used.work1}}</td>
        <td>{{used.office}}</td>
        <td>{{used.fax}}</td>
        <td><li>{{used.work}}</li></td>
        <td><li>{{used.tags}}</li></td>
        </tr>
    </table>
    
</div>
</template>
<script>
export default {
   name:'GetData',
   data(){
       return{

       }
   },
   computed:{
     result(){
        return this.$store.state.results 
     }
   },
   mounted(){
       this.$store.dispatch('addingdata')
   }

}
</script>
<style scoped>
   li{
       list-style: none;
   }
</style>