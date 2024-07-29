<script>
import {
    useGameStore
} from "../stores/Game.js";
export default {
    data() {
        return {
            result: {},
            items: [],
            store: useGameStore()

        }
    },
    methods: {
        priceFormatter(value) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 2
            });
            return formatter.format(value / 100);
        }
    },
    async created() {
        const url = 'https://steam-store-data.p.rapidapi.com/api/featuredcategories/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'de4ff75909msh7263f9d6cfcad1cp17c5d6jsn3c7800164ae8',
                'x-rapidapi-host': 'steam-store-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            this.result = await response.json();
            this.items = this.result.specials.items
        } catch (error) {
            console.error(error);
        }
    },

}
</script>
<template>
<div class="flex justify-start gap-2 my-2 overflow-x-auto">
    <div v-for="(item,index) in items" :key="index">
        <div class="grid items-center hover:scale-105 rounded-lg shadow-lg">
            <div class="image cursor-pointer" :class="this.store.add(item.id,item.large_capsule_image)">
                <RouterLink :to="`game/${item.id}`">
                    <img :src="`${item.large_capsule_image}`" alt="img" class="rounded-lg">
                </RouterLink>
            </div>
            <div class="priceInfo shadow-lg flex justify-between px-2 rounded-lg bg-slate-400">
                <div class="flex justify-start gap-2 items-center">
                    <div class="line-through text-xs text-gray-300">
                        {{priceFormatter(item.original_price)}}
                    </div>
                    <div class="text-green-100">
                        {{priceFormatter(item.final_price)}}
                    </div>
                </div>
                <div class="text-green-400">
                    %{{item.discount_percent}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>
