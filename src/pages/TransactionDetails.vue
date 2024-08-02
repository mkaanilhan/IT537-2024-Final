<template>
  <div class="container py-4">
    <TransactionDetail :transaction="transaction" />
    <div v-if="loading" class="mt-4 text-center">
      <p>Loading transaction details...</p>
    </div>
    <div v-if="error" class="mt-4 text-center text-red-500">
      <p>Failed to load transaction details. Please try again later.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getTransactionDetails } from '@/services/etherscan';
import TransactionDetail from '@/components/TransactionDetail.vue';

export default {
  components: {
    TransactionDetail,
  },
  setup() {
    const route = useRoute();
    const transaction = ref(null);
    const loading = ref(true);
    const error = ref(null);

    onMounted(async () => {
      const txHash = route.params.txHash;
      try {
        const transactionData = await getTransactionDetails(txHash);
        transaction.value = transactionData;
        loading.value = false;
      } catch (err) {
        console.error('Failed to fetch transaction details:', err);
        error.value = err.message || 'An error occurred';
        loading.value = false;
      }
    });

    return {
      transaction,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
