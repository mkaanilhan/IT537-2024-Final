<template>
  
  <!-- Header -->
  <div>
    <div class="flex justify-between m-8">
      <div class="flex gap-2 text-head-text items-end">
        <p class="text-3xl"> Settings </p>
      </div>
    </div>
  </div>

  <hr class="separator">

  <!-- Warning -->
  <div class="flex p-8 justify-center w-full">
    <div>
      <span class="text-nega-text font-semibold">Note:</span> Please use this page with caution!
    </div>
  </div>

  <hr class="separator">

  <!-- API Key Updater -->
  <div class="flex p-8 justify-center w-full">
    <div>
      <label for="api-key" class="font-semibold">API Key:</label>
      <input id="api-key" v-model="apiKey" type="text" class="mx-4 text-lite-text bg-dimmed-text py-0.5 w-48 sm:w-80" />
      <button class="bg-dimmed-text/50 rounded px-2 py-0.5 hover:bg-head-text hover:text-dark-back" @click="saveApiKey">Update</button>
    </div>
  </div>
  
  <hr class="separator">

  <!-- Portfolio List -->
  <div class="flex-col m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
    <div class="mx-2 my-4 text-xl text-head-text">
          <p>Portfolio List</p>
    </div>
    <div class="pb-1 hover:bg-white/5" v-for="(portfolio, index) in portfolios">
      <PortfolioRowComponent :index="index" :name="portfolio.name" :items="portfolio.items"/>
    </div>
    <hr class="separator">
    <div class="pb-1 flex justify-left">
        <div class="flex m-2 justify-between bg-transparent">
            <input class="bg-transparent placeholder-dimmed-text" v-model="newPortfolio" placeholder="(Add Portfolio)" @keyup.enter="addPortfolio(newPortfolio)" />
        </div>
    </div>
  </div>
</template>

<script>
  import { useApiKeyStore }    from '@/stores/apiKeyStore';
  import { usePortfolioStore } from '@/stores/portfolioStore'
  import PortfolioRowComponent from '@/components/PortfolioRowComponent.vue';

  export default {
    setup() {
      const apiKeyStore = useApiKeyStore();
      const portfolioStore = usePortfolioStore();

      return {
        apiKey: apiKeyStore.apiKey,
        setApiKey: apiKeyStore.setApiKey,
        portfolios: portfolioStore.portfolios,
        addPortfolio: portfolioStore.addPortfolio,
        removePortfolio: portfolioStore.removePortfolio
      };
    },
    data() {
      return {
        newPortfolioName: ''
      };
    },
    components: {
      PortfolioRowComponent,
    },
    methods: {
      saveApiKey() {
        this.setApiKey(this.apiKey);
      },
      addPortfolio(newPortfolio){
        this.addPortfolio(newPortfolio)

      }
    }
  };
</script>
