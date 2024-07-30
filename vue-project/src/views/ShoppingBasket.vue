<template>
    <div class="basket">
      <div class="items">
          
        <template v-if ="productsInBag.length ">

            <ShoppingBag/>

        </template>
        <template v-else >
          No products in cart yet. Let's start browsing!
          <div id="homeButton">
           <router-link to="/">Home</router-link> 
          </div>
        </template>

      </div>
    </div>
  </template>
  
  <script>
   import { mapState } from 'vuex/dist/vuex.cjs.js';
   import ShoppingBag from '../components/ShoppingBag.vue';

  export default {
    name: 'ShoppingBasket',
  
    
    computed: mapState([


     'productsInBag'
    
    ]),
    
    components: {
      ShoppingBag
    },
   
  }
  </script>
  
  <style lang="scss">
  
  .basket {
    padding: 60px 0;
    margin-top: 10%;  
    .items {
      max-width: 800px;
      margin: auto;
       
        .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
        }
  
    }
  
  }  
    #homeButton{
      color: white;
      text-decoration: none;
      border-radius: 70px;   
      padding: 16px 16px;
      margin: 16px ;
      font-weight: bold;
      &:hover {opacity: 0.6;}
    }  

    a {
      
      color: white;
      text-decoration: none;
      border-radius: 70px;
      border: 2px solid #ffffff;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      padding: 16px 16px;
      margin: 16px ;
      background-color: #aa00ff;
      font-weight: bold;
      &:hover {opacity: 0.6;}
    
    }
  

  
  </style>
  