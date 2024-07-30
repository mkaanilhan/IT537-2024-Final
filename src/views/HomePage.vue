<template>
  <div>
    <header>
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/popular">Popular</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
        </ul>
      </nav>
    </header>
    <main class="main-content">
      <aside class="left-column">
        <h3 style="color: red; font-weight: bold;">
          &#x1F451; Photos from the best anime in history - BERSERK - &#x2694;
        </h3>
        <img src="@/assets/guts.png" alt="Guts from Berserk" />
        <img src="@/assets/guts2.png" alt="Guts from Berserk" />
        <img src="@/assets/guts3.png" alt="Guts from Berserk" />
      </aside>
      <div class="content">
        <nav class="sub-nav-links">
          <ul>
            <li><router-link to="/forum">Forum</router-link></li>
            <li><router-link to="/signup">Sign Up</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </nav>
        <section class="about-us">
          <h2>About Us</h2>
          <p>We are a dedicated platform providing comprehensive information about all anime series. Our mission is to connect anime fans worldwide.</p>
        </section>
        <section class="anime-news">
          <h2>Anime News</h2>
          <article>
            <h3 style="color: #3498db;">New Season of Attack on Titan Announced</h3>
            <p><i>The new season of Attack on Titan is set to release next spring, continuing the epic story of Eren and the Scout Regiment.</i></p>
          </article>
          <article>
            <h3 style="color: #e74c3c;">My Hero Academia Movie Tops Box Office</h3>
            <p><i>The latest My Hero Academia movie has topped the box office, drawing huge crowds and rave reviews.</i></p>
          </article>
          <article>
            <h3 style="color: #9b59b6;">One Piece Celebrates 1000th Episode</h3>
            <p><i>One Piece celebrates its 1000th episode with a special event and a message from creator Eiichiro Oda.</i></p>
          </article>
          <article>
            <h3 style="color: #f39c12;">Demon Slayer New Arc Trailer Released</h3>
            <p><i>The trailer for the new arc of Demon Slayer has been released, promising more intense battles and beautiful animation.</i></p>
          </article>
          <article>
            <h3 style="color: #2ecc71;">Studio Ghibli Releases New Film</h3>
            <p><i>Studio Ghibli has announced the release of a new film, continuing its legacy of creating magical and heartwarming stories.</i></p>
          </article>
        </section>
        <section class="genres">
          <h2>Anime Genres</h2>
          <ul>
            <li>Action</li>
            <li>Adventure</li>
            <li>Comedy</li>
            <li>Drama</li>
            <li>Fantasy</li>
            <li>Horror</li>
            <li>Romance</li>
            <li>Sci-Fi</li>
          </ul>
        </section>
        <section class="statistics">
          <h2>Anime Statistics</h2>
          <ul>
            <li>Most Watched Anime of 2023: <span style="color: blue;">Demon Slayer</span></li>
            <li>Most Googled Anime of 2023: <span style="color: blue;">Attack on Titan</span></li>
            <li>Highest Grossing Anime Movie of 2023: <span style="color: blue;">Demon Slayer: Mugen Train</span> ($500M)</li>
            <li>Anime with Most Episodes: <span style="color: blue;">One Piece</span> (1000+ episodes)</li>
            <li>Most Awarded Anime of 2023: <span style="color: blue;">My Hero Academia</span></li>
            <li>Fastest Growing Anime Fandom: <span style="color: blue;">Jujutsu Kaisen</span></li>
          </ul>
        </section>
        <section class="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><router-link to="/faq#question1">How can I sign up?</router-link></li>
            <li><router-link to="/faq#question2">How can I reset my password?</router-link></li>
            <li><router-link to="/faq#question3">Where can I watch these animes?</router-link></li>
            <li><router-link to="/faq#question4">How can I contribute to the forum?</router-link></li>
            <li><router-link to="/faq#question5">What are the site rules?</router-link></li>
          </ul>
        </section>
        <section class="contact-info">
          <h3>Contact Information</h3>
          <p>Phone: 0216 999 99 99</p>
          <p>Email: info@animedatabase.com</p>
          <p>Address: Central Street, Şile,İstanbul</p>
        </section>
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
        <section class="upcoming-anime">
          <h3 style="color: green; font-size: 1.5em;">Upcoming Anime</h3>
          <ul>
            <li>Future Adventures - August 2024</li>
            <li>Robot Wars - September 2024</li>
            <li>Galaxy Quest - October 2024</li>
            <li>Magic Academy - November 2024</li>
            <li>Dragon Warriors - December 2024</li>
          </ul>
        </section>
      </aside>
    </main>
    <footer>
      <p>&copy; 2024 Anime Database</p>
    </footer>
  </div>
</template>

<script>
export default {
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

header {
  background-color: #333;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-links {
  display: flex;
  justify-content: center;
}

.nav-links li {
  list-style: none;
  margin: 0 15px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
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
  margin-bottom: 20px;
}

.content {
  flex: 1;
  margin: 0 20px;
}

.about-us, .anime-news, .genres, .faq, .contact-info, .ads, .statistics {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.about-us h2, .anime-news h2, .genres h2, .faq h2, .contact-info h3, .statistics h2 {
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

.faq ul, .statistics ul, .upcoming-anime ul {
  list-style-type: none;
  padding: 0;
}

.faq ul li, .statistics ul li, .upcoming-anime ul li {
  margin-bottom: 10px;
}

.faq ul li a, .statistics ul li a {
  color: #3498db;
  text-decoration: none;
}

.faq ul li a:hover, .statistics ul li a:hover {
  text-decoration: underline;
}

.right-column .ad {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.right-column .upcoming-anime {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-top: 20px;
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
  color: #8b4513; /* Kahverengi */
  text-decoration: none;
  font-style: italic;
}

.sub-nav-links a:hover {
  text-decoration: underline;
}
</style>
