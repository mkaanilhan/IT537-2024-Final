<template>
  <div v-for="(portfolio, index) in portfolios">
    <StockListComponent :index="index" :name="portfolio.name" :items="portfolio.items"/>
  </div>
</template>

<script>
  import { usePortfolioStore } from '@/stores/portfolioStore';
  import StockListComponent from '@/components/StockListComponent.vue';

  export default {
    name: "Home",
    components: {
      StockListComponent
    },
    setup() {
      const portfolioStore = usePortfolioStore();
      return {
        portfolios: portfolioStore.portfolios
      };
    },
    
  }
</script>