<template>
    <div>
        <hr class="separator">
        <div class="flex m-2 justify-between">
            <div> {{ name }} [{{ size }}]</div>
            <div> <span class="cursor-pointer text-nega-text transform -translate-y-0.5 relative" @click="deletePortfolio">x</span> </div>
        </div>
    </div>
</template>


<script>

    import { usePortfolioStore } from '@/stores/portfolioStore'

    export default {

        name: 'PortfolioRowComponent',

        props: {
            index: {required: true},
            name: {required: true},
            items: {required:true}
        },
        computed: {
            size() {
                return this.items.length;
            }
        },
        setup() {
            const portfolioStore = usePortfolioStore();

            return {
                removePortfolio: portfolioStore.removePortfolio
            };
        },
        methods: {
            deletePortfolio() {
                console.log("hey")
                this.removePortfolio(this.index);
            },
        }
    }

</script>

  
