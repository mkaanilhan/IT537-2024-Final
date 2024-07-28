<script>
import { useGameStore } from "../stores/Game.js";
export default {
    data() {
        return {
            featuredInfo: "",
            games: [],
            store: useGameStore()

        }
    },
    methods: {

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
            const result = await response.json();
            this.featuredInfo = result
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    },

}
</script>

<template>
<div class="max-sm:grid-cols-1 max-lg:grid-cols-2 grid grid-cols-3 p-2 gap-2 w-full border-4 border-green-600">
    <div v-for="(game,index) in featuredInfo.featured_win" :key="index">
        <RouterLink :to="`game/${game.id}`">
            <img :src="`${game.large_capsule_image}`" alt="game" class="rounded-lg hover:scale-105" :class="this.store.add(game.id,game.large_capsule_image)">
            <div class="flex justify-between border border-blue-300 bg-sky-100">
                <div class="bg-red-200">
                    fiyat
                </div>
                <div class="bg-green-200">
                    discount
                </div>
            </div>
        </RouterLink>
    </div>
</div>
</template>
