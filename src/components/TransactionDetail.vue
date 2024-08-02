<template>
  <div class="card">
    <h2 class="card-header">Transaction Details</h2>
    <div v-if="transaction">
      <p><strong>Hash:</strong> <span class="break-all">{{ transaction.hash }}</span></p>
      <p><strong>From:</strong> <span class="break-all">{{ transaction.from }}</span></p>
      <p><strong>To:</strong> <span class="break-all">{{ transaction.to }}</span></p>
      <p><strong>Value:</strong> {{ transaction.value / 1e18 }} ETH</p>
      <p><strong>Gas:</strong> {{ transaction.gas }}</p>
      <p><strong>Gas Price:</strong> {{ transaction.gasPrice / 1e9 }} Gwei</p>
      <p><strong>Block Number:</strong> {{ transaction.blockNumber }}</p>
      <p><strong>Nonce:</strong> {{ transaction.nonce }}</p>
    </div>
    <div v-else>
      <p>No transaction details available.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    transaction: Object,
  },
};
</script>

<style scoped>
.break-all {
  word-break: break-all;
}
</style>
