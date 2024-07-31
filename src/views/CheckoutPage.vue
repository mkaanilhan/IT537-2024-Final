<template>
    <div class="container mx-auto mt-16">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h2 class="text-2xl font-bold mb-6">Ödeme Yap</h2>
        <form @submit.prevent="submitPayment">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Kart Numarası</label>
            <input type="text" v-model="cardNumber" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Son Kullanma Tarihi</label>
            <input type="text" v-model="expiryDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">CVV</label>
            <input type="text" v-model="cvv" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="bg-purple-500 text-white px-6 py-2 rounded">Ödeme Yap</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      };
    },
    methods: {
      submitPayment() {
        // Ödeme işlemi burada gerçekleştirilebilir
        alert('Ödeme başarılı!');
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  