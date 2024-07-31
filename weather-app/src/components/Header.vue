<template>
    <header class="bg-primary text-white p-4 shadow-md">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Hava Durumu Uygulaması</h1>
        <div>
          <router-link to="/" class="mr-4 hover:underline">Ana Sayfa</router-link>
          <router-link to="/about" class="hover:underline">Hakkında</router-link>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  