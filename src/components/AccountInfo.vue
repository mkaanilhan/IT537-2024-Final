<template>
  <div class="card">
    <h2 class="card-header">Account Balance</h2>
    <p class="card-body">{{ balance }} ETH</p>
  </div>
</template>

<script>
export default {
  props: {
    balance: String,
  },
};
</script>
