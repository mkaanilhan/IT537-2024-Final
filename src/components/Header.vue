<template>
    <header class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 fixed w-full top-0 z-10 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-4">
          <img :src="logo" alt="Logo" class="h-10">
          <h1 class="text-2xl font-pacifico">Grabby</h1>
        </div>
        <nav class="flex items-center space-x-4">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/shop" class="nav-link">Shop</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          <router-link to="/basket" class="relative">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l1.4-7H5.6l1.4 7zM7 13l-1.4 7h10.8L17 13M5.6 13H17M5.6 13L5 6h14l-1.4 7M17 13l1.4 7H5.6"></path>
            </svg>
            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">{{ cartItemCount }}</span>
          </router-link>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 4a1 1 0 10-2 0v6a1 1 0 102 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8zm4 0a1 1 0 10-2 0v6a1 1 0 102 0V8z" clip-rule="evenodd" />
          </svg>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    props: ['cartItemCount'],
    data() {
      return {
        logo: '',
        mobileNav: false
      };
    },
    created() {
      this.loadLogo();
    },
    methods: {
      async loadLogo() {
        const images = import.meta.glob('@/assets/images/*.png');
        const logoPath = images['/src/assets/images/ic_launcher2-playstore.png'];
        this.logo = (await logoPath()).default;
      }
    }
  }
  </script>
  
  <style scoped>
  .nav-link {
    @apply text-white font-semibold text-lg uppercase hover:text-gray-200;
  }
  </style>
  