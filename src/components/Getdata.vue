<template>
  <div>
    <div>
      <h1>Display data</h1>
      <div id="movebutton">
        <button class="btn" @click="listitem">
          <i class="fa fa-bars"></i>
        </button>
        <button class="btn active" @click="gridViewData">
          <i class="fa fa-th-large"></i>
        </button>
      </div>

      <div class="search-wrapper panel-heading col-sm-12">
        
        <p class="float-left">
           <input type="checkbox" v-model="selectAll" v-on:click="select" />
              <i class="form-icon"></i> 
          <b>{{ data.length }}</b> :Result
        </p>
        <input type="text" v-model="search" placeholder="Search here" />

        <label for="pagination">:perpage</label>
        <select  @change="paginationdata($event)" >
          <option v-for="perpage of perpagerecords" :key="perpage">
            {{ perpage }}
          </option>
        </select>
      </div>

      <div class="column" id="tabledata">
       
        <div
          class="container row"
          v-show="gridview"
          v-for="(user, i) in filteredData "
          :key="i" 
        >
          <hr />

          <div class="col-md-6">
            <hr/>
            <label class="form-checkbox">
             
              <input type="checkbox" v-model="selectAll" :value="user" />
              <i class="form-icon"></i> 
               </label> 
               ID<br><b>{{ i + 1 }}</b>
           
            <br>
            <br><b>CompanyName:</b>{{ user.CompanyName }}<br />
          </div>

          <div class="col-md-6">
             <hr >
            <b>Email</b><br />
           
            <p style="color:#a51464">{{ user.email }}</p><br>
            <b>State </b><br />{{ user.state }}
          </div>
          &nbsp;
        </div>
      </div>
    </div>
    <div class="column">
      <table class="table table-bordered" v-show="listview">
        <tr>
          <th>
            <label class="form-checkbox">
              <input type="checkbox" v-model="selectAll" @click="select" />
              <i class="form-icon"></i>
            </label>
          </th>
          <th>Id</th>
          <th>CompanyName</th>
          <th>Email</th>
          <th>State</th>
        </tr>

        <tr v-for="(user,id ) in filteredData" :key="id">
          <td>
            <label class="form-checkbox">
              <input type="checkbox"  v-model="selected" />
              <i class="form-icon"></i>
            </label>
          </td>
          <td>{{ id + 1 }}</td>
          <td>{{ user.CompanyName }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.state }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "GetData",

  data() {
    return {
      userdetails: [],
      search: "",
      selectedAll: true,
      selected: [],
      data: [],
      perpagerecords: [3, 6, 9, 12],
      gridview: true,
      listview: false,
       filteredData:[],
     
      seletedVal:0,
      currentEntries:0,
    };
  },
  computed: {
    // filteredProducts() {
    //   return this.userdetails.filter((p) => {
    //     return true if the product should be visible

    //     in this example we just check if the search string
    //     is a substring of the product name (case insensitive)
    //     return p.this.search.toLowerCase().split('').every(v=>p.companyName.toLowerCase().includes(v))
    //   ;
    //   });
    // },
    filterdata() {
      return this.data.filter((post) => {
        return post.CompanyName.toLowerCase().includes(
          this.search.toLowerCase(),
         
          // this.filteredData=this.post
        );
        
      });
    },
  },
  mounted() {
    this.adddata();
  },
  methods: {
    adddata() {
      // console.log(this.userdetails);
      axios
        .get("https://vue-firebase-267f6-default-rtdb.firebaseio.com/post.json")
        .then((response) => {
          this.userdetails = response.data;
         
          

          // this.userdetails=res;
          // console.log(this.userdetails);

          Object.keys(this.userdetails).forEach((result) => {
            // console.log(result);
            this.data.push(this.userdetails[result]);
             this.filteredData=this.data
          });
        });
    },
    select() {
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.userdetails) {
          this.selected.push(this.userdetails[i].id);
        }
      }
    },
    gridViewData() {
      this.gridview = true;
      this.listview = false;

      // this.listview=true
      console.log("hi");
    },
    listitem() {
      this.gridview = false;
      this.listview = true;
      console.log("hello");
    },
     paginationdata(ev){
      this.seletedVal=ev.target.value;
       if(this.seletedVal!==0){
           console.log(this.seletedVal);
        this.filteredData= this.filterdata.slice(0,this.seletedVal)
      }
     
     }
  },

  // gridVisible(){
  //       console.log('hello')
  // }
};
</script>
<style scoped>
table {
  margin-top: 30px;
}
p {
  margin-right: 934px;
  margin: 0px;
  padding: 0px;
}
* {
  box-sizing: border-box;
}
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #f1f1f1;
}
.btn:hover {
  background-color: #ddd;
}
.btn.active {
  background-color: #666;
  color: white;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left; 
  width: 100%;
  padding: 10px;
}
#movebutton {
  margin-left: 1450px;
}
#tabledata{
  margin-left: 200px;
}
</style>