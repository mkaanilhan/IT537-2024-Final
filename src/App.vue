<template>
  <div>
    <Header :cartItemCount="cartItemCount" />
    <RouterView @add-to-cart="handleAddToCart" :cartItems="cart" @remove-from-cart="handleRemoveFromCart" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      cart: []
    };
  },
  computed: {
    cartItemCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    handleAddToCart(food) {
      const itemInCart = this.cart.find(item => item.name === food.name);
      if (itemInCart) {
        itemInCart.quantity += food.quantity;
      } else {
        this.cart.push(food);
      }
    },
    handleRemoveFromCart(name) {
      this.cart = this.cart.filter(item => item.name !== name);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body {
  font-family: 'Pacifico', cursive;
}
</style>
