<template>
    <div><StockHeader                        :symbol="symbol" :stockData="stockData" :portfolios="portfolios"/></div>  
    <div><CompanyProfileComponent            :symbol="symbol" :stockData="stockData"/></div>  
    <div><RecommendataionTrendsComponent     :symbol="symbol" :stockData="stockData"/></div>
    <div><RecentInsiderTransactionsComponent :symbol="symbol" :stockData="stockData"/></div>
    <div><RecentCompanyNewsComponent         :symbol="symbol" :stockData="stockData"/></div>
</template>

<script>

    import { useApiKeyStore }                 from '@/stores/apiKeyStore';
    import { usePortfolioStore }              from '@/stores/portfolioStore';

    import StockHeader                        from '@/components/StockHeader.vue';
    import CompanyProfileComponent            from '@/components/CompanyProfileComponent.vue'
    import RecommendataionTrendsComponent     from '@/components/RecommendataionTrendsComponent.vue';
    import RecentCompanyNewsComponent         from '@/components/RecentCompanyNewsComponent.vue';
    import RecentInsiderTransactionsComponent from '@/components/RecentInsiderTransactionsComponent.vue';

    export default {
        
        name: 'Stock',

        props: {
            symbol: {required: true},
        },

        data() {
            return {
                stockData: {
                    profile: {},
                    quote: {},
                    metrics: {metric:{}, series:{}},
                    chartData: {labels: null, datasets:[]},
                    chartOptions: {responsive: true, scales: { y: { stacked: true }, x: { stacked: true }}},
                    insiderTransactions: [],
                    news: [],
                }
            };
        },

        setup() {
            const apiKeyStore = useApiKeyStore();
            return {
                apiKey: apiKeyStore.apiKey
            };
        },

        computed: {
            portfolios(){
                return this.getPortfolios()
            }
        },
                
        components: {
            StockHeader,
            CompanyProfileComponent,
            RecentCompanyNewsComponent,
            RecentInsiderTransactionsComponent,
            RecommendataionTrendsComponent
        },

        methods: {

            getPortfolios() {
                const portfolioStore = usePortfolioStore();
                return portfolioStore.getPortfolios(this.symbol);
                },

            async fetchProfile() {
                const response = await fetch(`${this.$finnURL}/stock/profile2?symbol=${this.symbol}&token=${this.apiKey}`);
                const data = await response.json();
                this.stockData.profile = data;
            },

            async fetchQuote() {
                const response = await fetch(`${this.$finnURL}/quote?symbol=${this.symbol}&token=${this.apiKey}`)
                const data = await response.json()
                this.stockData.quote = data
                },

            async fetchMetrics() {
                const response = await fetch(`${this.$finnURL}/stock/metric?symbol=${this.symbol}&metric=all&token=${this.apiKey}`);
                const data = await response.json();
                this.stockData.metrics = data;
            },

            async fetchRecommendation() {
                console.log(`${this.$finnURL}/stock/recommendation?symbol=${this.symbol}&token=${this.apiKey}`);
                const response = await fetch(`${this.$finnURL}/stock/recommendation?symbol=${this.symbol}&token=${this.apiKey}`);
                const data = await response.json();
                data.sort((a, b) => new Date(a.period) - new Date(b.period));
                const labels = data.map(item => item.period);
                const buy = data.map(item => item.buy);
                const hold = data.map(item => item.hold);
                const sell = data.map(item => item.sell);
                const strongBuy = data.map(item => item.strongBuy);
                const strongSell = data.map(item => item.strongSell);
                this.stockData.chartData = {
                    labels: labels,
                    datasets: [
                        {label: 'Strong Sell', data: strongSell, backgroundColor: '#fb7957'},
                        {label: 'Sell'       , data: sell      , backgroundColor: '#fdbcab'},
                        {label: 'Hold'       , data: hold      , backgroundColor: '#c0c0c0'},
                        {label: 'Buy'        , data: buy       , backgroundColor: '#9df4c5'},
                        {label: 'Strong Buy' , data: strongBuy , backgroundColor: '#3cea8c'},
                    ]
                }
            },

            async fetchInsiderTransactions() {
                const from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                const to = new Date().toISOString().split('T')[0];
                const response = await fetch(`${this.$finnURL}/stock/insider-transactions?symbol=${this.symbol}&from=${from}&to=${to}&token=${this.apiKey}`);
                const data = await response.json();
                this.stockData.insiderTransactions = data.data;
            },

            async fetchNews() {
                const from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
                const to = new Date().toISOString().split('T')[0];
                const response = await fetch(`${this.$finnURL}/company-news?symbol=${this.symbol}&from=${from}&to=${to}&token=${this.apiKey}`);
                const data = await response.json();
                this.stockData.news = data;
            },

        },

      created() {
        this.fetchProfile();
        this.fetchQuote();
        this.fetchMetrics();
        this.fetchRecommendation();
        this.fetchInsiderTransactions();
        this.fetchNews();
      },

    }
</script>
