<template>
  <div>
    <header>
      <nav>
        <ul class="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/popular">Popular</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <aside class="left-column">
        <img src="https://cdn.myanimelist.net/images/anime/1421/106074.jpg" alt="Guts from Berserk">
      </aside>
      <div class="content">
        <section class="about-us">
          <h2>About Us</h2>
          <p>
            We are a dedicated platform providing comprehensive information about all anime series. 
            Our mission is to connect anime fans worldwide.
          </p>
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
        <section class="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li><a href="#">How can I sign up?</a></li>
            <li><a href="#">How can I reset my password?</a></li>
            <li><a href="#">Where can I watch these animes?</a></li>
            <li><a href="#">How can I contribute to the forum?</a></li>
          </ul>
        </section>
      </div>
      <aside class="right-column">
        <h3>Advertisements</h3>
        <div class="ad">
          <p>Ad 1: Check out the latest anime merchandise at AnimeMart!</p>
        </div>
        <div class="ad">
          <p>Ad 2: Join our anime streaming service today at StreamAnime!</p>
        </div>
        <div class="ad">
          <p>Ad 3: Get exclusive access to anime events and conventions with AnimePass!</p>
        </div>
      </aside>
    </main>
    <footer>
      <div class="contact-info">
        <h3>Contact Information</h3>
        <p>Phone: +90-123-456-7890</p>
        <p>Email: info@animedatabase.com</p>
        <p>Address: 123 Anime Street, Istanbul, Turkey</p>
      </div>
      <p>&copy; 2024 Anime Database</p>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style>
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
  width: 200px;
}

.left-column img {
  width: 100%;
  border-radius: 5px;
}

.content {
  flex: 1;
  margin: 0 20px;
}

.about-us, .anime-news, .faq {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.about-us h2, .anime-news h2, .faq h2 {
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
</style>
