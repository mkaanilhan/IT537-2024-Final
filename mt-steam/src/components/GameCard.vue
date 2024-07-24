<script>
export default {
    data() {
        return {
            featuredInfo: "",
            games: [],

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
<div>
    <div v-for="(game,index) in featuredInfo.featured_win" :key="index" class="p-2 border border-green-800 my-2 mx-2">
        <RouterLink :to="`/${game.id}`">
            <img :src="`${game.large_capsule_image}`" alt="">
        </RouterLink>
    </div>
</div>
</template>
