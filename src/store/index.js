import { createStore } from 'vuex'
import axios from 'axios'

// import Vuex from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex);
export default createStore({
  state: {
   
    postdata:[],
    results:[]
  },
  getters: {
    // validPosts(state) {
    //     return state.posts.filter(p => {
    //       return p.title && p.body
    //     })
    //   }
  },
  mutations: {
     setpost(state,userdata) {
        state.postdata.push(userdata)
        //console.log(this.postdata)
    },
    // createPost(state, newPost) {
    //     state.posts.unshift(newPost)
    //   }
    setdisplay(state,results){
        state.results=results
    }
  },
  actions: {
    addNewTodo({commit},userdata){
        axios.post("https://keap-12850-default-rtdb.firebaseio.com/formdata.json",userdata)
           
          commit('setpost',userdata)
          // console.log(posts)
      },
    async  addingdata({commit}){
          const responce= await axios.get("https://keap-12850-default-rtdb.firebaseio.com/formdata.json")
             console.log(responce.data)

            commit('setdisplay',responce.data)
           
  }
},
  modules: {
  }
})