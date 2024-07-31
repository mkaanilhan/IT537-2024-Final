<template>
    <div class="container mx-auto mt-16">
      <h2 class="text-3xl font-bold mb-6 ml-4">Mutfaklar</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(cuisine, index) in cuisines" :key="cuisine.key" class="border p-4 rounded shadow cursor-pointer" @click="goToCuisine(cuisine)">
          <img :src="cuisine.image" alt="Cuisine Image" class="w-full h-48 object-cover rounded">
          <h3 class="mt-2 text-xl font-bold">{{ cuisine.name }}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cuisines: [
          { key: 'kebap', name: 'Kebap', image: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/urfa_19_11zon.webp' },
          { key: 'doner', name: 'Döner', image: 'https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2190000/2190579.jpg' },
          { key: 'pizza', name: 'Pizza', image: 'https://foodish-api.com/images/pizza/pizza3.jpg' },
          { key: 'tatli', name: 'Tatlı', image: 'https://foodish-api.com/images/dessert/dessert2.jpg' },
          { key: 'firin', name: 'Fırın', image: 'https://images.squarespace-cdn.com/content/v1/5a2915cebff20052a88638f2/1558672828970-DVYYE47WNFUY527VYQUS/Turkish+bakery+kurabiye+Istanbul+Turkey.jpg?format=2500w' },
          { key: 'deniz-urunleri', name: 'Deniz Ürünleri', image: 'https://foodish-api.com/images/rice/rice33.jpg' },
          { key: 'ev-yemekleri', name: 'Ev Yemekleri', image: 'https://foodish-api.com/images/rice/rice28.jpg' },
        ],
      };
    },
    methods: {
      goToCuisine(cuisine) {
        this.$router.push({ name: 'cuisine', params: { name: cuisine.key } });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding-top: 4rem;
  }
  
  .ml-4 {
    margin-left: 1rem;
  }
  </style>
  