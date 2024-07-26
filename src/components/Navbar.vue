<template>
  <nav class="bg-blue-500 p-4 text-white">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <h1 class="text-xl font-bold mb-4 md:mb-0">Kullanıcı Yönetim Paneli</h1>
      <div class="flex space-x-4">
        <router-link to="/" class="nav-button">Home</router-link>
        <router-link to="/about" class="nav-button">About</router-link>
        <router-link to="/contact" class="nav-button">Contact</router-link>
        <router-link to="/login" class="nav-button">Login</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.nav-button {
  @apply bg-white text-blue-500 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition duration-300;
}
</style>

