<template>
    <!-- Header -->
    <div>
    <div class="flex justify-between m-8">
      <div class="flex gap-2 text-head-text items-end">
        <p class="text-3xl"> About InvestMate </p>
      </div>
    </div>
  </div>

  <hr class="separator">

  <div class="p-8">
    <p>
      Welcome to InvestMate! This application allows you to track your stock portfolios with ease.
    </p>
    <br>
    <p>
      Features:
    </p>
    <ul class="list-disc px-8">
      <li>View and manage multiple portfolios</li>
      <li>Add and remove stocks from your portfolios</li>
      <li>Fetch and display stock information from the <a class="text-head-text" href="https://finnhub.io/docs/api">Finnhub API</a> including recommendation trends</li>
      <li>View recent insider transactions and company news</li>
      <li>Responsive design for all screen sizes</li>
    </ul>
    <br>
    <p>
      This project was created as part of the IT537 course, showcasing the use of Vue.js, Pinia for state management, and Vite for building and serving the application.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

