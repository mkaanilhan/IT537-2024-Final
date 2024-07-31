<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-rainbow-gradient">
     
      <h1 class="text-black font-bold text-[100px] mb-8">
        Pokémons cannot be sold!
      </h1>
  
     
      <div class="flex flex-col items-center space-y-4">
        <router-link to="/feed">
          <button class="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 w-full max-w-md text-lg">
            Feed Pokémon
          </button>
        </router-link>
  
        <router-link to="/catch">
          <button class="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 w-full max-w-md text-lg">
            Catch Pokémon
          </button>
        </router-link>
  
        <router-link to="/">
          <button class="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors duration-300 w-full max-w-md text-lg">
            Home
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SellPokemon'
  }
  </script>
  
  <style scoped>
 
  .bg-rainbow-gradient {
    background: linear-gradient(to right, 
      #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3);
    background-size: 1400% 1400%;
    animation: gradientBG 15s ease infinite;
  }
  

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  </style>
  
  
  
  
  
  
  