<template>
    <div class="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to the Pokedex!
          </h1>
          <p class="mt-3 max-w-md mx-auto text-base text-indigo-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the wonderful world of Pokemon with our interactive Pokedex.
          </p>
        </div>
  
        <div class="mt-10">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Explore Pokemon
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Browse through hundreds of Pokemon, view their stats, abilities, and more!</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Favorite Pokemon
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Save your favorite Pokemon and easily access them later!</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Search & Filter
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Quickly find Pokemon by name or filter them by type!</p>
                </div>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div class="px-4 py-5 sm:p-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Detailed Information
                </h3>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Get in-depth information about each Pokemon, including stats and abilities!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="mt-10 text-center">
          <p class="text-xl text-white">
            Start your Pokemon journey today!
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  }
  </script>