<template>
    <div>
       <h1>Add data here</h1>
       <div class="formdata">
          <form @submit.prevent="onFormSubmit">
               <!-- <div>
                     <label for="Id" >Id</label>
                    <input type="number" class="form-control" v-model="user.id" required >
                </div> -->

                <div >
                    <label for="CompanyName">CompanyName</label>
                    <input type="text" class="form-control" v-model="user.CompanyName" required>
                </div>
                
                <div>
                     <label for="email" >Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div >
                     <label for="state" >State</label>
                    <input type="text" class="form-control" v-model="user.state" required>
                </div>
                <div class="btn" >
                    <button class="btn btn-primary btn-block" v-on:clck="onFormSubmit">add</button>
                </div>
            </form>
       </div>
            
    </div>
</template>
<script>
import axios from 'axios'
export default {
   name:'AddData',
    data(){
        return {
            user:{}
        }
    },
    methods:{
        onFormSubmit(e){
            e.preventDefault()
             console.log(this.user);
            const result=axios.post("https://vue-firebase-267f6-default-rtdb.firebaseio.com/post.json",this.user)
              this.user=result.data
        }
    }
}
</script>
<style scoped>
    .formdata{
        width: 500px;
       margin-left: 500px;
    }
    .btn{
        width: 100px;
    }
</style>