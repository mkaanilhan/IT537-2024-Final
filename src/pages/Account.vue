<template>
  <div>
    <AccountInfo :balance="balance" />
    <TransactionsList :transactions="transactions" @selectTransaction="selectTransaction" @loadMore="loadMoreTransactions" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSearchStore } from '@/stores/search';
import { getBalance, getTransactions } from '@/services/etherscan';
import AccountInfo from '@/components/AccountInfo.vue';
import TransactionsList from '@/components/TransactionsList.vue';

export default {
  components: {
    AccountInfo,
    TransactionsList,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useSearchStore();
    const balance = ref(0);
    const transactions = ref([]);

    onMounted(async () => {
      const address = route.params.address;
      try {
        const balanceData = await getBalance(address);
        balance.value = balanceData.data.result / 1e18; // Convert Wei to Ether

        const transactionsData = await getTransactions(address);
        transactions.value = transactionsData.data.result;
        store.setTransactions(transactions.value);
      } catch (error) {
        console.error('Failed to fetch account data:', error);
      }
    });

    const selectTransaction = (hash) => {
      router.push({ name: 'TransactionDetails', params: { txHash: hash } });
    };

    const loadMoreTransactions = async () => {
      try {
        const address = route.params.address;
        const currentLength = transactions.value.length;
        const nextPage = currentLength / 10 + 1;
        const transactionsData = await getTransactions(address, nextPage);
        transactions.value.push(...transactionsData.data.result);
      } catch (error) {
        console.error('Failed to load more transactions:', error);
      }
    };

    return {
      balance,
      transactions,
      selectTransaction,
      loadMoreTransactions,
    };
  },
};
</script>
