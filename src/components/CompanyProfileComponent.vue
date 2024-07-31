
<template>
  <div class="flex flex-wrap p-4 gap-2 justify-left">
    <div class="w-full">
      <ul class="columns-1 2xl:columns-2">
        <MetricComponent metric="Industry"              :value="this.stockData.profile.finnhubIndustry" />
        <MetricComponent metric="Exchange"              :value="this.stockData.profile.exchange" />
        <MetricComponent metric="IPO"                   :value="this.stockData.profile.ipo" />
        <MetricComponent metric="Market Capitalization" :value="new Intl.NumberFormat('en-US').format((this.stockData.profile.marketCapitalization ?? 0).toFixed(2))" />
        <MetricComponent metric="10-Day Average Volume" :value="( this.stockData.metrics.metric['10DayAverageTradingVolume'] ?? 0).toFixed(2)" />
        <MetricComponent metric="Beta"                  :value="( this.stockData.metrics.metric.beta ?? 0).toFixed(2)" />  
        <MetricComponent metric="52-Week Low Date"      :value="( this.stockData.metrics.metric['52WeekLowDate'] ?? 0)" />
        <MetricComponent metric="52-Week Low"           :value="( this.stockData.metrics.metric['52WeekLow'] ?? 0).toFixed(2)" />
        <MetricComponent metric="52-Week High"          :value="( this.stockData.metrics.metric['52WeekHigh'] ?? 0).toFixed(2)" />
        <MetricComponent metric="52-Week Daily Return"  :value="( this.stockData.metrics.metric['52WeekPriceReturnDaily'] ?? 0).toFixed(2)" />
        <MetricComponent metric="Low price of the day"  :value="( this.stockData.quote.l  ?? 0).toFixed(2)" />
        <MetricComponent metric="High price of the day" :value="( this.stockData.quote.h  ?? 0).toFixed(2)" />
        <MetricComponent metric="Previous close price"  :value="( this.stockData.quote.pc ?? 0).toFixed(2)" />
        <MetricComponent metric="Open price of the day" :value="( this.stockData.quote.o  ?? 0).toFixed(2)" />
      </ul>
    </div>
  </div>
</template>


<script>

  import MetricComponent from './MetricComponent.vue';

  export default {
          name: 'CompanyProfileComponent',

          props: {
          symbol: {required: true},
          stockData: {required: true},
          },

          components: {
              MetricComponent
          }
      }

</script>