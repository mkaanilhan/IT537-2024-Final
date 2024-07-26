<script>
import GameHeader from '../components/GameHeader.vue'
import GameImgCard from '../components/GameImgCard.vue';
export default {
    data() {
        return {
            gameId: this.$route.params.id,
            gameDetails: []
        }
    },
    components: {
        GameHeader,
        GameImgCard,
    },
    async created() {

        const url = `https://steam-store-data.p.rapidapi.com/api/appdetails/?appids=${this.gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'de4ff75909msh7263f9d6cfcad1cp17c5d6jsn3c7800164ae8',
                'x-rapidapi-host': 'steam-store-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            this.gameDetails = await response.json();
            console.log(this.gameDetails);
        } catch (error) {
            console.error(error);
        }

        /*
        const url = `https://steam2.p.rapidapi.com/appDetail/${this.gameId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'de4ff75909msh7263f9d6cfcad1cp17c5d6jsn3c7800164ae8',
                'x-rapidapi-host': 'steam2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            this.gameDetails = await response.json();
            console.log(gameDetails);
        } catch (error) {
            console.error(error);
        }*/
    }
}
</script>
<template>
<div>
    <div>
        <GameHeader :gameIdProp="gameId" :gameNameProp="this.gameDetails[gameId].data.name" />
    </div>
<div class="flex">
    <div class="border-2 border-red-400 mx-2 w-72 h-96">
        <GameImgCard :imageProp="this.gameDetails[gameId].data.header_image" />
        <div class="my-2 mx-2">
            {{gameDetails[gameId].data.short_description}}
        </div>
    </div>
    <div class="border-2 border-green-400 h-96 mr-2 w-full">
        
    </div>
</div>
    <div>
        <RouterLink :to="`/cartView`">
            <button class="text-2xl border-4 border-gray-800 bg-red-400 mx-2 my-2">Sepet</button>
        </RouterLink>
    </div>
    <div class="border-2 border-red-400" :class="`${this.gameId}`">
        {{gameDetails[gameId].data}}
    </div>
</div>
</template>
