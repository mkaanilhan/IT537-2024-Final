<template>
    <div class="product" :class="{ inBag: isInBag }">
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link"> Info </router-link>
      <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
      <h5>{{ product.title }}</h5>
      <p class="price">US$ {{ product.price.toFixed(2) }}</p>
      
      <button v-if="!isInBag" @click="$emit('add-to-bag', product)">Add to cart</button>
      <button v-else class="remove" @click="$emit('remove-from-bag', product.id)">Remove from cart</button>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      },
      isInBag: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  
  <style lang="scss">
  .product {
    
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
      .product-image {
        height: 100px;
    }

    }
  
    @media only screen and (max-width: 640px) {
      flex: 0 0 90%;
      .product-image {
        height: 100px;
    }
    }
  
    &.inBag {
      border: 1px solid #aa00ff;
    }
  
    .product-image {
      margin: 20px auto;
      width: 160px;
      height: 140px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .product-link{
      margin: 8px auto;
      margin-top: 20%;
      font-size: 14px;
      max-width: 40%;
      font-weight: normal;
      padding: 4px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      border: 1px solid #aa00ff;
      margin-left: 70%;
      
      
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
  </style>