<script>
import {
    useGameStore
} from "../stores/Game.js";
export default {
    data() {
        return {
            featuredInfo: "",
            games: [],
            store: useGameStore(),

        }
    },
    methods: {
        priceFormatter(value, currency) {
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2
            });
            return formatter.format(value / 100);
        }

    },
    async created() {
        const url = 'https://steam-store-data.p.rapidapi.com/api/featured/';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'de4ff75909msh7263f9d6cfcad1cp17c5d6jsn3c7800164ae8',
                'x-rapidapi-host': 'steam-store-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            this.featuredInfo = await response.json();
        } catch (error) {
            console.error(error);
        }
    },

}
</script>

<template>
<div class="max-sm:grid-cols-1 max-lg:grid-cols-2 grid grid-cols-3 p-2 gap-2 w-full">
    <div v-for="(game,index) in featuredInfo.featured_win" :key="index" class="">
        <RouterLink :to="`game/${game.id}`">
            <img :src="`${game.large_capsule_image}`" alt="game" class="rounded-lg hover:scale-105" :class="this.store.add(game.id,game.large_capsule_image)">
            <div class="flex justify-between shadow-md rounded-lg bg-slate-400 px-2 items-center">

                <div class="flex jsutify-start gap-4 items-center">

                    <div v-if="game.original_price!==null" class="line-through text-xs text-gray-300">
                        {{priceFormatter(game.original_price, game.currency)}}
                    </div>
                    <div v-if="game.original_price!==null" class="text-green-100">
                        {{priceFormatter(game.final_price,game.currency)}}
                    </div>
                    <div v-else class="text-green-100 max-lg:text-xs">
                        Free to Play
                    </div>

                </div>

                <div v-if="game.discounted===true" class="text-green-300">
                    %{{game.discount_percent}}
                </div>

            </div>
        </RouterLink>
    </div>
</div>
</template>
