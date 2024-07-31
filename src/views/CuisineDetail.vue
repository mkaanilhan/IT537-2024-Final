<template>
    <div class="container mx-auto mt-16">
      <h2 class="text-3xl font-bold mb-6 ml-4">{{ cuisine.name }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(food, index) in cuisine.foods" :key="index" class="border p-4 rounded shadow">
          <img :src="food.image" alt="Food Image" class="w-full h-48 object-cover rounded mb-4">
          <h3 class="text-xl font-bold">{{ food.name }}</h3>
          <p class="text-gray-700">₺{{ food.price }}</p>
          <div class="flex items-center space-x-2 mt-2">
            <button @click="decreaseQuantity(index)" class="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>{{ quantities[index] }}</span>
            <button @click="increaseQuantity(index)" class="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <button @click="addToCart(food, index)" class="mt-4 px-4 py-2 bg-purple-500 text-white rounded">Sepete Ekle</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        cuisine: null,
        quantities: [],
      };
    },
    created() {
      this.loadCuisineData();
    },
    methods: {
      loadCuisineData() {
        const cuisines = [
          { key: 'kebap', name: 'Kebap', foods: [{ name: 'Adana Kebap', image: 'https://www.nizampide.com/wp-content/uploads/2018/07/adana-kebab%C4%B1-porsiyon-nizam-pide-s%C3%BCtla%C3%A7-istanbul-beyo%C4%9Flu-istiklal-caddesi.jpg', price: 50 }, { name: 'Urfa Kebap', image: 'https://i.lezzet.com.tr/images-xxlarge-recipe/urfa-kebabi-7601a44a-1909-4eb5-85b5-a12b51bb6eb8.jpg', price: 55 }, { name: 'İskender Kebap', image: 'https://images.pexels.com/photos/18062060/pexels-photo-18062060/free-photo-of-iskender-kebab-with-roast-pepper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: 60 }] },
          { key: 'doner', name: 'Döner', foods: [{ name: 'Et Döner', image: 'https://images.deliveryhero.io/image/fd-tr/LH/m7ky-listing.jpg', price: 40 }, { name: 'Tavuk Döner', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK3SriR7zODpVYwKORjAyxEsQTRsWUuDl0w&s', price: 35 }, { name: 'Gyros Doner', image: 'https://images.pexels.com/photos/6941000/pexels-photo-6941000.jpeg?auto=compress&cs=tinysrgb&w=800', price: 50 }] },
          { key: 'pizza', name: 'Pizza', foods: [{ name: 'Margherita Pizza', image: 'https://foodish-api.com/images/pizza/pizza1.jpg', price: 45 }, { name: 'Pepperoni Pizza', image: 'https://foodish-api.com/images/pizza/pizza2.jpg', price: 50 }, { name: 'Mantar Pizza', image: 'https://images.pexels.com/photos/12261065/pexels-photo-12261065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: 55 }] },
          { key: 'tatli', name: 'Tatlı', foods: [{ name: 'Baklava', image: 'https://images.pexels.com/photos/7317605/pexels-photo-7317605.jpeg?auto=compress&cs=tinysrgb&w=800', price: 35 }, { name: 'Künefe', image: 'https://images.pexels.com/photos/16557595/pexels-photo-16557595/free-photo-of-close-up-of-kunefe.jpeg?auto=compress&cs=tinysrgb&w=800', price: 40 }, { name: 'Sütlaç', image: 'https://images.pexels.com/photos/15794017/pexels-photo-15794017/free-photo-of-puddings-with-pistachio-sprinkle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', price: 25 }] },
          { key: 'firin', name: 'Fırın', foods: [{ name: 'Poğaça', image: 'https://images.pexels.com/photos/10976467/pexels-photo-10976467.jpeg?auto=compress&cs=tinysrgb&w=800', price: 5 }, { name: 'Açma', image: 'https://media.istockphoto.com/id/1298008884/photo/turkish-simit-and-a%C3%A7ma.jpg?b=1&s=612x612&w=0&k=20&c=mEuiwryAb7ebKSOEtQR1wVvZdrMvwRfQQxrTjIVxYFo=', price: 5 }, { name: 'Simit', image: 'https://images.pexels.com/photos/15965573/pexels-photo-15965573/free-photo-of-simit-in-sesame.jpeg', price: 3 }] },
          { key: 'deniz-urunleri', name: 'Deniz Ürünleri', foods: [{ name: 'Karides Güveç', image: 'https://media.istockphoto.com/id/1596384919/photo/tiny-fried-shrimp-with-sauce-butter-casserole-shrimp.jpg?b=1&s=612x612&w=0&k=20&c=gdLnvoFLo-_s0hK75jboqWH9kGG7DIHDH04Ag8O7Hpg=', price: 70 }, { name: 'Kalamar Tava', image: 'https://media.istockphoto.com/id/2027686431/photo/fried-squid-reings-with-lemon-and-a-dipping-sauce-on-the-wooden-table.jpg?b=1&s=612x612&w=0&k=20&c=2Q0AzVJztLpVJCKEQCpY6i1bhwVO12pswEG_fDxGgkk=', price: 60 }, { name: 'Levrek Izgara', image: 'https://media.istockphoto.com/id/1456614751/photo/turkish-fish-seabass.jpg?b=1&s=612x612&w=0&k=20&c=msAbzg3IpN7BzVnS9XZMSOMrtCrXnEVjIonVmj4YZCU=', price: 80 }] },
          { key: 'ev-yemekleri', name: 'Ev Yemekleri', foods: [{ name: 'Zeytinyağlı Yaprak Sarma', image: 'https://images.pexels.com/photos/19156005/pexels-photo-19156005/free-photo-of-sarma-stuffed-grape-leaves-in-a-pot.jpeg?auto=compress&cs=tinysrgb&w=800', price: 45 }, { name: 'Karnıyarık', image: 'https://images.pexels.com/photos/18126188/pexels-photo-18126188/free-photo-of-baked-stuffed-aubergines.png?auto=compress&cs=tinysrgb&w=800', price: 50 }, { name: 'Kuru Fasulye', image: 'https://media.istockphoto.com/id/1211429061/photo/turkish-kuru-fasulye-in-a-white-plate-with-decorated-background-haricot-bean-is-turkish.jpg?b=1&s=612x612&w=0&k=20&c=DuyJrmK6-zIu8j_npUJQG4bzrjdv7dhmlqJttP4dBg8=', price: 55 }] },
        ];
  
        this.cuisine = cuisines.find((c) => c.key === this.name);
        if (this.cuisine) {
          this.quantities = Array(this.cuisine.foods.length).fill(1);
        } else {
          console.error(`Cuisine not found: ${this.name}`);
        }
      },
      increaseQuantity(index) {
        this.quantities[index]++;
      },
      decreaseQuantity(index) {
        if (this.quantities[index] > 1) {
          this.quantities[index]--;
        }
      },
      addToCart(food, index) {
        this.$emit('add-to-cart', { ...food, quantity: this.quantities[index] });
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
  