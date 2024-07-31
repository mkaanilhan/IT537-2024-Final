<template>
  <div v-for="(portfolio, index) in portfolios">
    <PortfolioComponent :index="index" :name="portfolio.name" :items="portfolio.items"/>
  </div>
</template>

<script>
  import { usePortfolioStore } from '@/stores/portfolioStore';
  import PortfolioComponent from '@/components/PortfolioComponent.vue';

  export default {
    name: "Home",
    components: {
      PortfolioComponent
    },
    setup() {
      const portfolioStore = usePortfolioStore();
      return {
        portfolios: portfolioStore.portfolios
      };
    },
    methods: {
        addStock(index, stock) {
          const portfolioStore = usePortfolioStore();
          portfolioStore.addStock(index, stock);
          this.newStock = '';
        }
      }
    }
</script>