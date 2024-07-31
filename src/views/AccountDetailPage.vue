<template>
    <div class="container mx-auto mt-16">
      <div class="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h2 class="text-2xl font-bold mb-6">Hesap Detayları</h2>
        <form @submit.prevent="updateAccount">
          <div class="mb-4">
            <label class="block text-gray-700">İsim</label>
            <input type="text" v-model="firstName" class="w-full p-2 border border-gray-300 rounded">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Soy İsim</label>
            <input type="text" v-model="lastName" class="w-full p-2 border border-gray-300 rounded">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700">Email</label>
            <input type="email" v-model="email" class="w-full p-2 border border-gray-300 rounded">
          </div>
          <button type="submit" class="w-full py-2 bg-bg_login_button text-white font-bold rounded">Güncelle</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: 'Mevcut İsim',
        lastName: 'Mevcut Soy İsim',
        email: 'mevcut@example.com'
      };
    },
    methods: {
      updateAccount() {
        console.log('Hesap güncellendi:', { firstName: this.firstName, lastName: this.lastName, email: this.email });
        alert('Hesap başarıyla güncellendi!');
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  