
<template>
    <div class="flex justify-between m-8">
      <div class="flex gap-2 text-head-text items-end">
        <img :src="this.stockData.profile.logo" :alt="this.stockData.profile.name" class="w-14 h-14"> 
        <div>
          <p class="text-3xl"> {{ this.stockData.profile.name }} ({{ this.stockData.profile.ticker }}) </p>
          <a :href="this.stockData.profile.weburl" target="_blank" class="text-blue-500 hover:underline">{{ this.stockData.profile.weburl }}</a>
        </div>
      </div>
      <div class="flex flex-col gap-2 text-head-text text-right texl-xl">
        <p>{{ (this.stockData.quote.c ?? 0).toFixed(2) }}</p>
        <p :class="{ 'text-posi-text': this.stockData.quote.d > 0, 'text-nega-text': this.stockData.quote.d < 0 }"> {{ this.stockData.quote.d > 0 ? '+' : '' }}{{ (this.stockData.quote.d ?? 0).toFixed(2) }} </p>
      </div>
    </div>
    <hr class="separator">
    <!-- Profile Tags -->
    <div class="flex flex-wrap">
      <PortfolioTagComponent v-for="portfolio in portfolios" :portfolio="portfolio" @deleteStock="removeStock(portfolio.index)" />
    </div>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolioStore';
import PortfolioTagComponent from './PortfolioTagComponent.vue';

  export default {
    name: 'CompanyProfileComponent',
    props: {
      symbol: {required: true},
      stockData: {required: true},
      portfolios: {required: true},
    },
    components: {
      PortfolioTagComponent
    },
    methods: {
      removeStock(index) {
          console.log(this.symbol)
          const portfolioStore = usePortfolioStore();
          portfolioStore.removeStock(index, this.symbol);
          this.newStock = '';
        }
      }
    }
</script>
