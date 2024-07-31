<template>
    <ul class="columns-2">
        <MetricComponent metric="Beta" :value="( this.stockData.metrics.metric.beta ?? 0).toFixed(2)" />
        <MetricComponent metric="10-Day Avg. Vol." :value="( this.stockData.metrics.metric['10DayAverageTradingVolume'] ?? 0).toFixed(2)" />
        <MetricComponent metric="52-Week High" :value="( this.stockData.metrics.metric['52WeekHigh'] ?? 0).toFixed(2)" />
        <MetricComponent metric="52-Week Low" :value="( this.stockData.metrics.metric['52WeekLow'] ?? 0).toFixed(2)" />
        <MetricComponent metric="52-Week Low Date" :value="this.stockData.metrics.metric['52WeekLowDate']" />
        <MetricComponent metric="52-Week Daily Return" :value="( this.stockData.metrics.metric['52WeekPriceReturnDaily'] ?? 0).toFixed(2)" />
        <MetricComponent metric="High" :value="( this.stockData.quote.h ?? 0).toFixed(2)" />
        <MetricComponent metric="Low" :value="( this.stockData.quote.l ?? 0).toFixed(2)" />
        <MetricComponent metric="Open" :value="( this.stockData.quote.o ?? 0).toFixed(2)" />
        <MetricComponent metric="Prev. Close" :value="( this.stockData.quote.pc ?? 0).toFixed(2)" />
    </ul>
</template>

<script>

    import MetricComponent from './MetricComponent.vue';

    export default {
            name: 'QuoteComponent',

            props: {
            symbol: {required: true},
            stockData: {required: true},
            },

            components: {
                MetricComponent
            }
        }

</script>