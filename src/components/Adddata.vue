<template>
<div>
      <div id="tabledata">
         <form  @submit.prevent="submit">
         <h1>Add a Contact</h1>
         <label id="setting">Select which form you want to fill out:</label>
         <select id="selected" v-model="userdata.basicaddcontactform">
             <option value="Basic Add Contact Form" selected>Basic Add Contact Form</option>
             <option value="Basic Add Form">Basic Add Form</option>
         </select><br><br>
            
         <label id="action">Select Action Set</label>
         <select id="set"  v-model="userdata.selectactionset">
             <option value="Please Select one"> One</option>
              <option value="Please Select two"> two</option>
               <option value="Please Select three"> three</option>
                <option value="Please Select four"> four</option>
         </select><br><br>
         <label for="firstname" id="first">First Name</label>
         <input type="text" id="firstname" v-model="userdata.FirstName"><br><br>
         <label for="lastname" id="last">Last Name</label>
         <input type="text" id="lastname" v-model="userdata.LastName"><br><br>
         <label for="email"  id="emailid">Email</label>
         <input type="email" id="email"  v-model="userdata.email"><br><br>
         <label for="phone" id="mobile" >Phone1</label>
         <select id="phone" v-model="userdata.phone">
              <option value="work">Work</option>
              <option value="office">office</option>
         </select>
         <input  id="inputdata" type="text" v-model="userdata.work1" >
          <input id="inputdata" type="text"  v-model="userdata.office"><br><br>
          <label for="fax" id="fax">Fax1</label>
           <select id="faxdata" v-model="userdata.fax">
         
              <option value="work1">Work</option>
              <option value="office1">office</option>
         </select>
          <input id="inputdata" type="text"  v-model="userdata.work">
         
          <h3>Add Tag</h3>
         <p>Tags are used to categorize your contacs or trigger automated compaigns</p>
         <input type="text"  id="inputd" placeholder="please select a Tag...." v-model="userdata.tags"><br><br>
         <div id="buttonid">
         <button class="btn btn-primry">Save</button>
         <button class="btn btn-outline-primary" @click="submit">Save&Add Another Contact</button>
         </div>
         </form>
    </div>
</div>
</template>
<script>
export default {
   name:'AddData',
    data(){
         return{
            userdata:{ 
            basicaddcontactform:'',
            selectactionset:'',
            FirstName:'',
            LastName:'',
            email:'',
            phone:null,
            work1:'',
            office:'',
            fax:null,
            work:'',
            tags:''
            }
         }
     },  methods:{
       submit(){
        this.$store.dispatch('addNewTodo',this.userdata)
        this.userdata=" ";
    }

     }
}
</script>
<style scoped>
   .btn-primry{
      background-color:rgba(0,62,220,255);
      color:white;
     
  }
  .btn-outline-primary{
      color: rgba(0,62,220,255);
      margin-left:10px;
       border-radius: 8px 8px 8px 8px;  
      
     
  }
  #buttonid{
      margin-right: 378px;
  }
  #selected{
      width: 25%;
      height: 40px;
      border-radius:20px;  
  }
  #set{
      width: 203px;
      height:30px;
      border-radius: 10px; 
      margin-right: 331px; 
  }
  #firstname{
      margin-right: 287px;
       /* border-radius :10px;  */
       /* border-top-right-radius: 1px; */

  }
  #lastname{
       margin-right: 287px;
       /* border-radius:10px; */
  }
  #email{
       margin-right: 253px;
       /* border-radius:10px; */
  }
  #phone{
       border-radius: 10px; 
      width:82px;
      height: 31px;
     
  }
  #inputdata{
      margin-left: 10px;
      width:100px;
      /* border-radius:20px; */
     
  }
  #inputdata1{
      margin-left: 10px;
      /* border-radius: 10px; */
  }
  #faxdata{
      border-radius:10px;
      width:82px;
      height: 31px;
      margin-left: 33px;
  }
  #first{
      margin-right: 10px;
  }
  #setting{
       margin-right: 10px;
  }
  #action{
        margin-right: 10px;
  }
  #last{
      margin-right: 10px;
  }
  #emailid{
      margin-right: 10px;
  }
  #mobile{
      margin-left: -160px;
      margin-right: 7px;
  }
  #fax{
      margin-left: -251px;
     margin-right: -24px;
  }
  #inputd{
    width:33%;
    margin-right: 143px;
      /* border-radius:1px;  */
  }
  
  p{
      margin-right: 145px;
  }
  h3{
      margin-left: -555px;
  }
  h1{
      margin-left: -414px;
  }
  #tabledata{
    margin-left:100px
  }
</style>