import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    portfolios: JSON.parse(localStorage.getItem('portfolios')) || [
      {
        name: 'Technology Watchlist',
        items: ['NVDA', 'META', 'GOOGL', 'MSFT', 'AAPL', 'MRNA', 'IBM']
      },
      {
        name: 'Dividend Watchlist',
        items: ['IBM', 'CFG', 'VZ', 'EFC']
      }
    ]
  }),
  actions: {
    addPortfolio(name) {
      if (!this.portfolios.find(portfolio => portfolio.name === name)) {
        this.portfolios.push({ name, items: [] });
        this.savePortfolios();
      }
    },
    removePortfolio(index) {
      this.portfolios.splice(index, 1);
      this.savePortfolios();
    },
    addStock(index, stock) {
      if (!this.portfolios[index].items.includes(stock)) {
        this.portfolios[index].items.push(stock);
        this.savePortfolios();
      }
    },
    removeStock(listIndex, stock) {
      const index = this.portfolios[listIndex].items.indexOf(stock);
      if (index !== -1) {
        this.portfolios[listIndex].items.splice(index, 1);
        this.savePortfolios();
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
    savePortfolios() {
      localStorage.setItem('portfolios', JSON.stringify(this.portfolios));
    }
  }
});
