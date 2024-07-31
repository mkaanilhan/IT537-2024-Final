import { defineStore } from 'pinia';

export const useApiKeyStore = defineStore('apiKey', {
  state: () => ({
    apiKey: 'cqj7j69r01qnjotf6f6gcqj7j69r01qnjotf6f70'  // api key can be found at https://finnhub.io/dashboard
  }),
  actions: {
    setApiKey(key) {
      this.apiKey = key;
    }
  }
});
