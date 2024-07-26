<template>
  <div id="app">
    <Navbar />
    <main class="container mx-auto px-4 py-8">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
.container {
  max-width: 1200px;
}
</style>
