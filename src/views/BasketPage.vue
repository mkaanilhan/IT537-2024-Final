<template>
  <div class="container mx-auto mt-16">
    <div class="max-w-2xl mx-auto bg-white p-8 rounded shadow">
      <h2 class="text-2xl font-bold mb-6">Sepetiniz</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id" class="flex justify-between items-center mb-4 border p-4 rounded shadow">
          <div class="flex items-center">
            <img :src="item.image" alt="Food Image" class="w-16 h-16 object-cover rounded mr-4">
            <div>
              <h3 class="text-lg font-semibold">{{ item.name }}</h3>
              <p class="text-gray-600">₺{{ item.price }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <button @click="decreaseQuantity(item)" class="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increaseQuantity(item)" class="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <button @click="removeFromCart(item.id)" class="bg-red-500 text-white px-4 py-2 rounded">Kaldır</button>
        </li>
      </ul>
      <div class="flex justify-between items-center mt-8">
        <h3 class="text-lg font-bold">Toplam</h3>
        <p class="text-xl font-semibold">₺{{ cartTotal }}</p>
      </div>
      <div class="flex justify-end mt-6">
        <router-link to="/checkout" class="bg-purple-500 text-white px-6 py-2 rounded">Ödeme Yap</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
  },
  methods: {
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromCart(id) {
      this.$emit('remove-from-cart', id);
    }
  }
}
</script>

<style scoped>
</style>
