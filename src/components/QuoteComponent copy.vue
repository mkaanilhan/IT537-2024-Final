<template>
  <div class="flex-col justfy-center m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
    <div class="mx-2 my-4 text-xl">
        <p>Quote</p>
    </div>
    <hr class="separator">
    <div class="px-4 sm:px-8 md:px-12 xl:px-16">
      <table class="w-full text-right my-2">
       <tr>
          <th class="px-4 py-2">High</th>
          <td class="px-4 py-2">{{ (this.stockData.quote.h ?? 0).toFixed(2) }}</td>
          <th class="px-4 py-2">Low</th>
          <td class="px-4 py-2">{{ (this.stockData.quote.l ?? 0).toFixed(2) }}</td>
        </tr>
        <tr>
          <th class="px-4 py-2">Open</th>
          <td class="px-4 py-2">{{ (this.stockData.quote.o ?? 0).toFixed(2) }}</td>
          <th class="px-4 py-2">Prev. Close</th>
          <td class="px-4 py-2">{{ (this.stockData.quote.pc ?? 0).toFixed(2) }}</td>
        </tr>
        </table>
    </div>
  </div>
</template>


<script>

    export default {
        name: 'QuoteComponent',

        props: {
          symbol: {required: true},
          stockData: {required: true},
        },
    }

</script>
