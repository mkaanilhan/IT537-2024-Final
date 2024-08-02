<template>
  <div class="mt-4">
    <h2 class="text-lg font-semibold">Last Transactions</h2>
    <ul class="mt-2">
      <li
          v-for="transaction in transactions"
          :key="transaction.hash"
          class="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
          @click="onSelectTransaction(transaction.hash)"
      >
        <p class="truncate text-sm">{{ transaction.hash }}</p>
        <p class="text-sm text-gray-600">{{ transaction.value / 1e18 }} ETH</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    transactions: Array,
  },
  methods: {
    onSelectTransaction(hash) {
      this.$emit('selectTransaction', hash);
    },
  },
};
</script>

<style scoped>
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
