<template>
    <router-link :to="{ name: 'stock', params: { symbol: symbol } }">
        <div>
            <hr class="separator">
            <div class="flex m-2 justify-between">
                <div> {{ symbol }} </div>
                <div class="text-right">
                    <div> {{ (quote.c ?? 0).toFixed(2) }} </div>
                    <div :class="{ 'text-posi-text': quote.dp > 0, 'text-nega-text': quote.dp < 0 }">
                       ({{ quote.dp > 0 ? '+' : '' }}{{ (quote.dp ?? 0).toFixed(2) }}%)
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>

    import { useApiKeyStore } from '@/stores/apiKeyStore';

    export default {

        name: 'StockRowComponent',

        props: {
            symbol: {required: true},
            index: {required: true},
        },

        data(){
            return {
                quote: {c: null, d:null, dp:null, h:null, l:null, o:null, pc:null}
            }
        },

        setup() {
            const apiKeyStore = useApiKeyStore();
            return {
                apiKey: apiKeyStore.apiKey
            };
        },

        methods: {
            async fetchQuote() {
                const finnURL = this.$finnURL
                const response = await fetch(`${this.$finnURL}/quote?symbol=${this.symbol}&token=${this.apiKey}`)
                const data = await response.json()
                this.quote = data
            }
        },

        mounted() {
            this.fetchQuote();
        },
    }

</script>
