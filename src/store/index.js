import Vue from 'vue'
import Vuex from 'vuex'
import newsData from './userComment.js';
import axios from 'axios';
Vue.use(Vuex)
import productListData from './products.js';
export default new Vuex.Store({
  state: {
    newsList:[],
    ClickTimes:[],
    productList:[],
    cartList:[],
    getCart:[],
    MerberList:[],
    isMerber:false,
    nowAddress:"http://localhost:5000"

  },
  mutations: {
    setNewsList(state){
      state.newsList = newsData;
    },
    addClickTimes(state,id){
       const hasClick = state.ClickTimes.find(item => item.id == id);
       if(hasClick){
       
          state.newsList[id - 1].clickTimes++;
          
       }else{
         state.newsList[id - 1].clickTimes++;
         state.ClickTimes.push({id});
    
       }
    },
    setProductList(state){
          axios.get(state.nowAddress + '/shopping/productList')
          .then(function (response) {
        
            state.productList = response["data"];
            //console.log(response,state.productList);
          })
          .catch(function (error) {
            
          });
    
        //state.productList = productListData;
    },
    addCartList(state,id){
    
          let hasItem = state.cartList.find(item => 
            item.id == id)
          console.log(state.cartList)
        if(hasItem){
             hasItem.count++; 
        }else
        {
          state.cartList.push({id:id,count:1,statu:true});       
        }
 


    }
  },
  actions: {
  },
  modules: {
  }
})
