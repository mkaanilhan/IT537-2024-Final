<template>
  <div id="app" class="flex flex-col min-h-screen bg-gray-50">
    <header class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
      <div class="container flex justify-between items-center p-4">
        <div class="flex items-center">
          <img src="@/assets/ethereuma.png" alt="Etherium Explorer Icon" class="w-8 h-8 mr-2" />
          <h1 class="text-3xl font-bold text-white tracking-wide">Ethereum Explorer</h1>
        </div>
        <nav class="space-x-4">
          <router-link to="/" class="flex items-center text-white hover:text-yellow-500 transition-colors duration-300" exact>
            <img src="@/assets/search.png" alt="Back to Search Icon" class="w-5 h-5 mr-1" />
            <span class="hover:underline">Search</span>
          </router-link>
        </nav>
      </div>
    </header>
    <main class="flex-grow container py-8 px-4">
      <router-view />
    </main>
    <footer class="bg-gray-800 text-gray-300 py-6 mt-8">
      <div class="container text-center">
        <p>&copy; 2024 Ethereum Explorer. All rights reserved.</p>
        <div class="mt-4">
          <a href="https://twitter.com" class="text-gray-400 hover:text-white mx-2 transition-colors duration-300" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://github.com" class="text-gray-400 hover:text-white mx-2 transition-colors duration-300" aria-label="GitHub">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" class="text-gray-400 hover:text-white mx-2 transition-colors duration-300" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>

</style>
