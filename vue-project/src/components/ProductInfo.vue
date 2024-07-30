<template>
    <div class="product-info" v-if="product">
      <h2>{{ product.title }}</h2>
      <img :src="product.image" alt="Product Image" />
      <p>{{ product.description }}</p>
      <p class="price">Price: US$ {{ product.price.toFixed(2) }}</p>
      <button v-if="!isInBag" @click="$emit('add-to-bag', product)">Add to cart</button>
      <button v-else class="remove" @click="$emit('remove-from-bag', product.id)">Remove from cart</button>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductInfo',
    props: {
      product: Object,
      isInBag: Boolean,
    },
    methods: {
      addToBag() {
        this.$emit('add-to-bag', this.product);
      },
      removeFromBag() {
        this.$emit('remove-from-bag', this.product.id);
      },
    },
  };
  </script>
  
  
<style lang="scss">

.product-info{

    flex: 0 0 30%;
    box-sizing: border-box;  
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 16px;
    border-radius: 60px;
    margin: 8px;
    margin-top: 5%;
    height: 650px;
  img { 
    margin: 20px auto;
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
  h2{
    font-size: 24px;
    font-weight: bold;
  }
  
    @media only screen and (max-width: 769px) {
      flex: 0 0 40%;
      img { height: 250px;  }
    }
  
    @media only screen and (max-width: 640px) {
      flex: 0 0 90%;
      img { height: 200px;  }
    }
  
    &.inBag {
      border: 1px solid #aa00ff;
    }
  
    h5 {
      margin: 22px auto;
      font-size: 14px;
      max-width: 60%;
      font-weight: normal;
    }
  
    p.price {
      font-size: 21px;
      font-weight: bold;
    }
  
    button {
      color: #fff;
      background-color: #aa00ff;
      border: 1px solid #aa00ff;
      border-radius: 100px;
      font-weight: 400;
      text-align: center;
      padding: 8px 16px;
      cursor: pointer;
  
      &:hover {
        opacity: 0.6;
      }
  
      &.remove {
        background-color: transparent;
        border: 1px solid #aa00ff;
        color: #aa00ff;
      }
    }
  
    
  }





  
  



  .price {
    font-size: 21px;
    font-weight: bold;
  }
.product-detail {
  text-align: center;
  height: 500px;
  
    flex: 0 0 30%;
    box-sizing: border-box;  
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 16px;
    border-radius: 60px;
    margin: 8px;
    margin-top: 2%;
    height: 400px;
  
    @media only screen and (max-width: 769px) {
      flex: 0 0 40%;
    }
  
    @media only screen and (max-width: 640px) {
      flex: 0 0 90%;
    }
  
  
  button {
    color: #fff;
    background-color: #aa00ff;
    border: 1px solid #aa00ff;
    border-radius: 100px;
    font-weight: 400;
    text-align: center;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
    &.remove {
      background-color: transparent;
      border: 1px solid #aa00ff;
      color: #aa00ff;
    }
  }
  
}
</style>

