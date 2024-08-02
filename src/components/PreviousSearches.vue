<template>
  <div class="mt-4">
    <h2 class="text-lg font-semibold">Previous Searches</h2>
    <ul class="mt-2">
      <li
          v-for="(search, index) in searches"
          :key="index"
          class="p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
          @click="onSelectSearch(search)"
      >
        {{ search }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    searches: Array,
  },
  methods: {
    onSelectSearch(search) {
      this.$emit('search', search);
    },
  },
};
</script>
