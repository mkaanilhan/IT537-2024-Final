<template>
    <div class="home">
      <div class="products">
        
        <ProductCard 
        v-for="(product, index) in products" 
        :key="index"
        :product="product"
        :isInBag="isInBag(product)"
        @add-to-bag="addToBag"
        @remove-from-bag="removeFromBag"
      />
        
        
      </div>
    </div>
  </template>
  
  <script>
import { mapState } from 'vuex/dist/vuex.cjs.js';
import ProductCard from '../components/ProductCard.vue';
  
  export default {
    name: 'HomePage',
    data() {
      return{
        
      }
    },
    components: {
    ProductCard
  },

    computed: mapState([

     'products',
     'productsInBag'
    
    ]),


    methods:{
      addToBag(product){
        product.quantity = 1;
        this.$store.dispatch('addToBag', product);

      },
      isInBag(product){
        return this.productsInBag.find(item => item.id == product.id)
      },
      removeFromBag(productId) {
        this.$store.dispatch('removeFromBag', productId);
      },
      isInBag(product) {
        return this.productsInBag.some(item => item.id === product.id);
      }
    }

  
    
  }
  </script>
  
  <style lang="scss">
  
    .home {
  
      .products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
        
    @media only screen and (max-width: 769px) {
      flex: 0 0 40%;
      margin-top: 17%;
    }
  
    @media only screen and (max-width: 650px) {
      flex: 0 0 90%;
      margin-top: 20%;
    }
    @media only screen and (max-width: 600px) {
      flex: 0 0 90%;
      margin-top: 63%;
    }
  
  
          }
          h5 {
            margin: 22px auto;
            font-size: 14px;
            max-width: 60%;
            font-weight: normal;
          }
  
          
      }
  
    
  
  
  </style>
  