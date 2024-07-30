
<template>
    <div class="product-details">
      <ProductInfo
        v-if="product"
        :product="product"
        :is-in-bag="isInBag"
        @add-to-bag="addToBag"
        @remove-from-bag="removeFromBag"
      />
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import ProductInfo from '../components/ProductInfo.vue';
  
  export default {
    name: 'ProductDetails',
    components: {
      ProductInfo,
    },
    props: {
      id: {
        type: [String, Number],
        required: true
      }
    },
    computed: {
      ...mapState(['productDetails', 'productsInBag']),
      product() {
        return this.productDetails;
      },
      isInBag() {
        return this.product && this.productsInBag.some(item => item.id == this.product.id);
      }
    },
    methods: {
      addToBag(product){
        product.quantity = 1;
        this.$store.dispatch('addToBag', product);

      },
      removeFromBag(productId) {
        this.$store.dispatch('removeFromBag', productId);
      }
    },
    watch: {
      id: {
        immediate: true,
        handler(newId) {
          this.$store.dispatch('fetchProductDetails', newId);
        }
      }
    },
    mounted() {
      this.$store.dispatch('fetchProductDetails', this.id);
    }
  };
  </script>

<style lang="scss">
.product-detail {
  text-align: center;
  height: 500px;
  margin-top: 16px;

  
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

    @media only screen and (max-width: 600px) {
      flex: 0 0 90%;
      margin-top: 63%;
    }
}
</style>

