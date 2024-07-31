<template>
  <div class="flex gap-2 p-2 m-2 rounded-full bg-cyan-900">
    {{ portfolio.name }}
    <span class="cursor-pointer text-nega-text transform -translate-y-0.5 relative" @click="$emit('deleteStock')">x</span>
  </div>
</template>
  
  <script>
    export default {
        name: 'PortfolioTagComponent',

        props: {
            portfolio: {required: true},
        },
    };
  </script>
  