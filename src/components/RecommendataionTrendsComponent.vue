<template>
    <div class="flex-col justfy-center m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
      <div class="mx-2 my-4 text-xl">
          <p>Recommendation Trends</p>
      </div>
      <hr class="separator">
      <Bar id="my-chart-id" :options="this.stockData.chartOptions" :data="this.stockData.chartData"/>
    </div>
</template>  


<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

    export default {

        name: 'RecommendationTrendsComponent',

        props: {
            symbol: {required: true},
            stockData: {required: true},
        },

        components: { Bar },
    }
</script>

