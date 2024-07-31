<template>
  <div>
    <main class="main-content">
      <aside class="left-column">
        <h2>📌 Photos from the best anime in history <router-link to="/anime/33" class="berserk-link">BERSERK</router-link> 👑</h2>
        <img src="@/assets/guts.png" alt="Guts from Berserk" />
        <img src="@/assets/guts2.png" alt="Guts from Berserk" />
        <img src="@/assets/guts3.png" alt="Guts from Berserk" />
      </aside>
      <div class="content">
        <h1>Search Anime</h1>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for anime..."
          @input="searchAnimes"
        />
        <div v-if="searchResults.length">
          <div v-for="anime in searchResults" :key="anime.mal_id" class="anime-card">
            <h2>
              <router-link :to="{ name: 'AnimeDetails', params: { id: anime.mal_id } }">
                {{ anime.title }}
              </router-link>
            </h2>
            <p>{{ anime.synopsis }}</p>
            <img :src="anime.images.jpg.image_url" alt="Anime Image" />
          </div>
        </div>
        <div v-else>
          <p>No results found or loading...</p>
        </div>
      </div>
      <aside class="right-column">
        <h3>Advertisements</h3>
        <div class="ad">
          <p>Ad 1: Samsung S24 Ultra - Experience the Future!</p>
        </div>
        <div class="ad">
          <p>Ad 2: Toyota C-HR - Drive the Difference!</p>
        </div>
        <div class="ad">
          <p>Ad 3: Monster Laptop - Unleash the Beast!</p>
        </div>
        <div class="ad">
          <p>Ad 4: Check out the latest anime merchandise at AnimeMart!</p>
        </div>
        <div class="ad">
          <p>Ad 5: Join our anime streaming service today at StreamAnime!</p>
        </div>
        <div class="ad">
          <p>Ad 6: Get exclusive access to anime events and conventions with AnimePass!</p>
        </div>
        <h3 style="color: green; font-size: 1.5em;">Upcoming Anime</h3>
        <ul>
          <li>Robot Wars - 2025-01-15</li>
          <li>Galaxy Quest - 2025-02-10</li>
          <li>Samurai Legacy - 2025-03-05</li>
          <li>Dragon's Realm - 2025-04-20</li>
          <li>Cyber Future - 2025-05-01</li>
        </ul>
      </aside>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import axios from 'axios';

export default {
  components: {
    FooterComponent,
  },
  data() {
    return {
      searchQuery: '',
      searchResults: []
    };
  },
  methods: {
    async searchAnimes() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${this.searchQuery}`
        );
        this.searchResults = response.data.data;
      } catch (error) {
        console.error('Error searching animes:', error);
      }
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex: 1;
}

.left-column, .right-column {
  width: 20%;
}

.left-column img {
  width: 100%;
  border-radius: 5px;
}

.content {
  flex: 1;
  margin: 0 20px;
}

.about-us, .anime-news, .genres, .stats, .faq, .contact-info, .ads {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.about-us h2, .anime-news h2, .genres h2, .stats h2, .faq h2, .contact-info h3 {
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.anime-news article {
  margin-bottom: 20px;
}

.anime-news article h3 {
  margin: 0 0 5px 0;
}

.anime-news article p {
  margin: 0;
}

.faq ul {
  list-style-type: none;
  padding: 0;
}

.faq ul li {
  margin-bottom: 10px;
}

.faq ul li a {
  color: #3498db;
  text-decoration: none;
}

.faq ul li a:hover {
  text-decoration: underline;
}

.right-column .ad {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.contact-info {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: relative;
  bottom: 0;
  width: 100%;
}

.sub-nav-links {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.sub-nav-links li {
  list-style: none;
  margin: 0 15px;
}

.sub-nav-links a {
  color: #8b4513; 
  text-decoration: none;
  font-style: italic;
}

.sub-nav-links a:hover {
  text-decoration: underline;
}

.berserk-link {
  color: red;
  font-weight: bold;
  cursor: pointer;
}

.right-column h3 {
  color: green;
  font-size: 1.5em;
}

.anime-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.anime-card img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

h1 {
  text-align: center;
  margin-top: 20px;
}

p {
  text-align: justify;
}
</style>
