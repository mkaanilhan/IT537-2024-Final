<template>
  <div class="flex-col justify-center m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
    <div class="mx-2 my-4 flex justify-between text-xl">
          <div><p>Recent Insider Transactions</p></div>
          <div v-if="totalPages > 1" class="flex justify-center">
              <button @click="currentPage--" :disabled="currentPage === 1" class="px-1">◀️</button>
              {{currentPage}} / {{totalPages}}
              <button @click="currentPage++" :disabled="currentPage === totalPages" class="px-1">▶️</button>
          </div>
      </div>
    <hr class="separator">
    <div class="px-4 sm:px-8 md:px-12 xl:px-16">
      <table class="w-full text-right my-2">
        <tr>
          <th class="px-2 py-2">Trx Date</th>
          <th class="px-2 py-2">Name</th>
          <th class="px-2 py-2 hidden sm:table-cell">Price</th>
          <th class="px-2 py-2 hidden sm:table-cell">Share</th>
          <th class="px-2 py-2">Change</th>
        </tr>
        <tr v-for="transaction in paginatedTransactions" :key="transaction.filingDate + transaction.transactionDate + transaction.name 
                                                              + transaction.transactionPrice + transaction.share + transaction.change">
          <td class="px-2 py-2">{{ transaction.transactionDate }}</td>
          <td class="px-2 py-2">{{ transaction.name }}</td>
          <td class="px-2 py-2 hidden sm:table-cell">{{new Intl.NumberFormat('en-US').format((transaction.transactionPrice ?? 0).toFixed(2))}}</td>
          <td class="px-2 py-2 hidden sm:table-cell">{{new Intl.NumberFormat('en-US').format((transaction.share ?? 0).toFixed(0))}}</td>
          <td class="px-2 py-2" :class="{ 'text-nega-text': transaction.change < 0, 'text-posi-text': transaction.change > 0 }">
            {{new Intl.NumberFormat('en-US').format((transaction.change ?? 0).toFixed(0))}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

  
<script>
  export default {
      name: 'InsiderTransactionComponent',
      props: {
        symbol: {required: true},
        stockData: {required: true},
      },
      data() {
        return {
            currentPage: 1,
            transactionsPerPage: 5,
        };
      },
      computed: {
        paginatedTransactions() {
          const start = (this.currentPage - 1) * this.transactionsPerPage;
          const end = start + this.transactionsPerPage;
          return this.stockData.insiderTransactions.slice(start, end);
        },
        totalPages() {
          return Math.ceil(this.stockData.insiderTransactions.length / this.transactionsPerPage);
        },
      },
  };
</script>
