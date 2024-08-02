import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
    state: () => ({
        previousSearches: [
            "0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97",
            "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",  
            "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"  
        ],
        transactions: [],
        selectedTransaction: null,
    }),
    actions: {
        addSearch(address) {
            this.previousSearches.unshift(address);
            if (this.previousSearches.length > 10) this.previousSearches.pop();
        },
        setTransactions(transactions) {
            this.transactions = transactions;
        },
        setSelectedTransaction(transaction) {
            this.selectedTransaction = transaction;
        },
    },
});
