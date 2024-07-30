<template>
    <div v-for="(product, index) in productsInBag" :key="index" class="item">
              <div class="remove" @click="this.$store.dispatch('removeFromBag', product.id)" >
                Remove item
              </div>
              <div class="photo">
                <img :src="product.image" alt="">
              </div>
              <div class="description">
                {{product.title}} 
              </div>
              <div class="price">
                    <span class="quantity-area">
                    <button :disabled="product.quantity<=1" @click="product.quantity--">-</button>
                    <span class="quantity">{{product.quantity}}</span>
                    <button @click="product.quantity++">+</button>
                    </span>
                    <span class="amount">
                    {{ (product.price * product.quantity).toFixed(2) + ' $'}}
                    </span>
              </div>
        </div>
    <div class="grand-total"> Grand Total: US$ {{orderTotal()}}</div>
   
</template>

<script>
 
 import { mapState } from 'vuex/dist/vuex.cjs.js';


  export default {

    name: 'ShoppingBag',
  computed: {
    ...mapState(['productsInBag'])
  },
  methods: {
      orderTotal(){
        var total = 0;
        this.productsInBag.forEach(item => {
          total += item.price * item.quantity;
        });
        return total.toFixed(2);
      }

    },
  }
</script>


<style lang="scss">
  
.basket {
  padding: 60px 0;  
  .items {
    max-width: 800px;
    margin: auto;
    .item {
      display: flex;
      justify-content: space-between;
      padding: 40px 0;
      border-bottom: 1px solid #aa00ff;
      position: relative;
      box-sizing: border-box;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      margin-bottom: 5%;
      
      border-radius: 70px;

      .remove {
        position: absolute;
        top: 8px;
        right: 0;
        font-size: 11px;
        text-decoration: underline;
        cursor: pointer;
        margin-right: 3%;
        margin-top: 5%;
      }

      .quantity-area {
        margin: 8px auto;
        height: 14px;
        

        button {
          width: 16px;
          height: 16px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .quantity {

            margin: 0 4px;
        }
      }

      .photo {
        img {
          max-width: 80px;
          padding-left: 30px;
        }
      }

      .description {
        margin: 22px auto;
        padding-left: 30px;
        box-sizing: border-box;
        max-width: 50%;


      }

      .price {
        margin-right: 3%;
        margin-top: 5%;
        .amount {
          font-size: 16px;
          margin-left: 8px;
          vertical-align: middle;
          
        }
      }
    }
      .grand-total {
          font-size: 24px;
          font-weight: bold;
          text-align: right;
          margin-top: 8px;
      }

  }

}


</style>
