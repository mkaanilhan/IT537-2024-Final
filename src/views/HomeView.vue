<template>
  <div class="bg-bg_page min-h-screen pt-16">
    <div class="hero-section bg-cover bg-center h-screen relative" :style="{ backgroundImage: `url(${randomFoodImage})` }">
      <div class="overlay absolute inset-0 bg-black opacity-50"></div>
      <div class="container mx-auto flex flex-col items-center justify-center h-full text-center text-header_color relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold font-pacifico">Grabby Food Delivery</h1>
        <p class="text-lg md:text-l mt-8 leading-relaxed">Canının istediğini, dilediğince anında ulaştırıyoruz, hadi başlayalım!</p>
        <div class="mt-8 w-full max-w-md bg-white p-6 rounded shadow">
          <input type="text" class="w-full p-4 rounded bg-gray-100 text-gray-800 placeholder-gray-600 mb-4" placeholder="Sokağın veya post kodun">
          <button class="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded" @click="openMapModal">Konumumu bul</button>
          <div class="text-header_color mt-4">veya</div>
          <button class="w-full py-3 mt-2 bg-yellow-400 text-gray-900 font-bold rounded" @click="goToLogin">Giriş yap</button>
          <button class="w-full py-3 mt-2 bg-yellow-400 text-gray-900 font-bold rounded" @click="goToSignUp">Kayıt ol</button>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-16">
      <h2 class="text-3xl font-bold mb-6 ml-4">Mutfaklar</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(cuisine, index) in cuisines" :key="cuisine.key" class="border p-4 rounded shadow cursor-pointer" @click="goToCuisine(cuisine)">
          <img :src="cuisine.image" alt="Cuisine Image" class="w-full h-48 object-cover rounded">
          <h3 class="mt-2 text-xl font-bold">{{ cuisine.name }}</h3>
        </div>
      </div>
    </div>

    <!-- OpenStreetMap Modal -->
    <div v-if="showMapModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-4 rounded shadow-lg w-full max-w-3xl">
        <h2 class="text-2xl mb-4">Adres Seç</h2>
        <div id="map" class="w-full h-96"></div>
        <div class="flex justify-between mt-4">
          <button class="py-2 px-4 bg-yellow-400 text-gray-900 font-bold rounded" @click="confirmAddress">Onayla</button>
          <button class="py-2 px-4 bg-gray-300 text-gray-900 font-bold rounded" @click="closeMapModal">Kapat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  data() {
    return {
      randomFoodImage: '',
      showMapModal: false,
      map: null,
      marker: null,
      selectedLatLng: null,
      cuisines: [
        { key: 'kebap', name: 'Kebap', image: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/urfa_19_11zon.webp', foods: [{ name: 'Adana Kebap', image: 'https://foodish-api.com/images/kebab/kebab1.jpg', price: 50 }, { name: 'Urfa Kebap', image: 'https://foodish-api.com/images/kebab/kebab2.jpg', price: 55 }, { name: 'İskender Kebap', image: 'https://foodish-api.com/images/kebab/kebab3.jpg', price: 60 }] },
        { key: 'doner', name: 'Döner', image: 'https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2190000/2190579.jpg', foods: [{ name: 'Et Döner', image: 'https://foodish-api.com/images/doner/doner1.jpg', price: 40 }, { name: 'Tavuk Döner', image: 'https://foodish-api.com/images/doner/doner2.jpg', price: 35 }, { name: 'İskender Döner', image: 'https://foodish-api.com/images/doner/doner3.jpg', price: 50 }] },
        { key: 'pizza', name: 'Pizza', image: 'https://foodish-api.com/images/pizza/pizza3.jpg', foods: [{ name: 'Margherita Pizza', image: 'https://foodish-api.com/images/pizza/pizza1.jpg', price: 45 }, { name: 'Pepperoni Pizza', image: 'https://foodish-api.com/images/pizza/pizza2.jpg', price: 50 }, { name: 'Mantar Pizza', image: 'https://foodish-api.com/images/pizza/pizza3.jpg', price: 55 }] },
        { key: 'tatli', name: 'Tatlı', image: 'https://foodish-api.com/images/dessert/dessert2.jpg', foods: [{ name: 'Baklava', image: 'https://foodish-api.com/images/dessert/dessert1.jpg', price: 35 }, { name: 'Künefe', image: 'https://foodish-api.com/images/dessert/dessert2.jpg', price: 40 }, { name: 'Sütlaç', image: 'https://foodish-api.com/images/dessert/dessert3.jpg', price: 25 }] },
        { key: 'firin', name: 'Fırın', image: 'https://images.squarespace-cdn.com/content/v1/5a2915cebff20052a88638f2/1558672828970-DVYYE47WNFUY527VYQUS/Turkish+bakery+kurabiye+Istanbul+Turkey.jpg?format=2500w', foods: [{ name: 'Poğaça', image: 'https://foodish-api.com/images/bakery/bakery1.jpg', price: 5 }, { name: 'Açma', image: 'https://foodish-api.com/images/bakery/bakery2.jpg', price: 5 }, { name: 'Simit', image: 'https://foodish-api.com/images/bakery/bakery3.jpg', price: 3 }] },
        { key: 'deniz-urunleri', name: 'Deniz Ürünleri', image: 'https://foodish-api.com/images/rice/rice33.jpg', foods: [{ name: 'Karides Güveç', image: 'https://foodish-api.com/images/seafood/seafood1.jpg', price: 70 }, { name: 'Kalamar Tava', image: 'https://foodish-api.com/images/seafood/seafood2.jpg', price: 60 }, { name: 'Levrek Izgara', image: 'https://foodish-api.com/images/seafood/seafood3.jpg', price: 80 }] },
        { key: 'ev-yemekleri', name: 'Ev Yemekleri', image: 'https://foodish-api.com/images/rice/rice28.jpg', foods: [{ name: 'Zeytinyağlı Yaprak Sarma', image: 'https://foodish-api.com/images/homecooking/homecooking1.jpg', price: 45 }, { name: 'Karnıyarık', image: 'https://foodish-api.com/images/homecooking/homecooking2.jpg', price: 50 }, { name: 'Patlıcan Musakka', image: 'https://foodish-api.com/images/homecooking/homecooking3.jpg', price: 55 }] },
      ],
    };
  },
  created() {
    this.loadRandomFoodImage();
  },
  methods: {
    loadRandomFoodImage() {
      this.randomFoodImage = 'https://i0.wp.com/wehalal.co/wp-content/uploads/2021/03/turkish-food.jpeg?resize=1024%2C682&ssl=1';
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToSignUp() {
      this.$router.push('/signup');
    },
    openMapModal() {
      this.showMapModal = true;
      this.$nextTick(this.loadMap);
    },
    closeMapModal() {
      this.showMapModal = false;
    },
    confirmAddress() {
      this.showMapModal = false;
      console.log('Selected address coordinates:', this.selectedLatLng);
      // Adresi kaydetme işlemleri
    },
    loadMap() {
      if (this.map) {
        this.map.invalidateSize();
        this.map.off();
        this.map.remove();
      }
      this.map = L.map('map').setView([39.031, 35.252], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      this.map.on('click', (e) => {
        if (this.marker) {
          this.map.removeLayer(this.marker);
        }
        this.marker = L.marker(e.latlng).addTo(this.map);
        this.selectedLatLng = e.latlng;
      });
    },
    goToCuisine(cuisine) {
      this.$router.push({ name: 'cuisine', params: { name: cuisine.key } });
    },
  },
};
</script>

<style scoped>
.hero-section {
  background-size: cover;
  background-position: center;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.6); /* Adjust the opacity here */
}
.text-header_color {
  color: #d3f8e2;
}
</style>
