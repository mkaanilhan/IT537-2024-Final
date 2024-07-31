import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolios: [
      {
        name: 'Technology Watchlist',
        items: ['NVDA', 'META', 'GOOGL', 'MSFT', 'AAPL', 'MRNA']
      },
      {
        name: 'Dividend Watchlist',
        items: ['CFG', 'VZ', 'EFC']
      }
    ]
  }),
  actions: {
    addPortfolio(name) {
      if (!this.portfolios.includes(name)) {
        this.portfolios.push({ name, items: [] });
      }
    },
    removePortfolio(index) {
      this.portfolios.splice(index, 1);
    },
    addStock(index, stock) {
      if (!this.portfolios[index].items.includes(stock)) {
        this.portfolios[index].items.push(stock);
      }
    },    
    removeStock(listIndex, stock) {
      const index = this.portfolios[listIndex].items.indexOf(stock);
      if (index !== -1) {
        this.portfolios[listIndex].items.splice(index, 1);
      }
    },
    getPortfolios(stock) {
      return this.portfolios.reduce((acc, portfolio, index) => {
        if (portfolio.items.includes(stock)) {
          acc.push({ index, name: portfolio.name });
        }
        return acc;
      }, []);
    },
  }
});
