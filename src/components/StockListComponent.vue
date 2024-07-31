<template>
    <div class="flex-col m-4 gap-2 px-4 py-2 bg-white/5 rounded-xl">
        <div class="mx-2 my-4 text-xl text-head-text">
            <p>{{name}}</p>
        </div>
        <div class="pb-1 hover:bg-white/5" v-for="item in items">
            <StockRowComponent :symbol="item" :index="this.index"/>
        </div>
        <hr class="separator">
        <div class="pb-1 flex justify-left">
            <div class="flex m-2 justify-between bg-transparent">
                <input class="bg-transparent placeholder-dimmed-text" v-model="newStock" placeholder="(Add Stock)" @keyup.enter="addStock(newStock)" />
            </div>
        </div>
    </div>
</template>

<script>

    import { usePortfolioStore } from '@/stores/portfolioStore';
    import StockRowComponent from './StockRowComponent.vue';

    export default{

        name:"StockListComponent",

        props: {
            index: {required: true},
            name: {required: true},
            items: {required:true}
        },

        components: {
            StockRowComponent
        },

        methods: {
            addStock(stock) {
                const portfolioStore = usePortfolioStore();
                portfolioStore.addStock(this.index, stock);
                this.newStock = '';
            }
        },
    }

</script>