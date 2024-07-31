<template>
  <div class="border p-4 rounded shadow flex items-center space-x-4">
    <img :src="food.image" alt="Food Image" class="w-32 h-24 object-cover rounded">
    <div class="flex-1">
      <h3 class="text-xl font-bold">{{ food.name }}</h3>
      <p class="text-gray-700">₺{{ food.price }}</p>
    </div>
    <div class="flex items-center space-x-2">
      <button @click="decreaseQuantity" class="px-2 py-1 bg-gray-200 rounded">-</button>
      <span>{{ quantity }}</span>
      <button @click="increaseQuantity" class="px-2 py-1 bg-gray-200 rounded">+</button>
    </div>
    <button @click="addToCart" class="ml-4 px-4 py-2 bg-purple-500 text-white rounded">Sepete Ekle</button>
  </div>
</template>

<script>
export default {
  props: {
    food: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      this.$emit('add-to-cart', { ...this.food, quantity: this.quantity });
    },
  },
};
</script>

<style scoped>
</style>
