<script>
import {
    useGameStore
} from "../stores/Game.js";
import GameHeader from '../components/GameHeader.vue'
import GameImgCard from '../components/GameImgCard.vue';
import SsList from '../components/SsList.vue'
import CartPack from '../components/CartPack.vue';
export default {
    data() {
        return {
            gameId: this.$route.params.id,
            gameData: {},
            gameDetails: [],
            store: useGameStore(),
            releaseDate: {},
            priceInfo: {},
            isFree: false,
            packageGroup:[],
            pckGroupSubs:[]
        }
    },
    components: {
        GameHeader,
        GameImgCard,
        SsList,
        CartPack
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

            this.gameData = this.gameDetails[this.gameId].data

            this.isFree = this.gameData.is_free
            this.priceInfo = this.gameData.price_overview
            this.releaseDate = this.gameData.release_date
            this.packageGroup = this.gameData.package_groups

        } catch (error) {
            console.error(error);
        }
    }
}
</script>
<template>
<div class="">
    <div>
        <GameHeader :gameIdProp="gameId" :gameNameProp="gameData.name" />
    </div>
    <div class="flex">
        <div class="border-4 border-red-400 mx-2">
            <GameImgCard :imageProp="this.store.getImageLink(gameId)" />
            <div class="mx-2 mt-2">
                <div v-if="isFree === false" class="flex gap-2">

                    <div class="price">
                        <div v-if="priceInfo.discount_percent > 0" class="line-through">{{priceInfo.initial_formatted}}</div>
                        <div v-else>{{priceInfo.final_formatted}}</div>
                    </div>

                    <div class="discount">
                        <div v-if="priceInfo.discount_percent === 0" class="hidden">{{priceInfo.initial_formatted}}</div>
                        <div v-else>%{{priceInfo.discount_percent}}</div>
                    </div>

                    <div class="finalPrice ">
                        <div v-if="priceInfo.discount_percent === 0" class="hidden">{{priceInfo.initial_formatted}}</div>
                        <div v-else>{{priceInfo.final_formatted}}</div>
                    </div>

                </div>
                <div v-else>
                    Free To Play
                </div>
            </div>
            <div class="my-2 mx-2">
                Release Date: {{releaseDate.date}}
            </div>
        </div>
        <div class="border-2 border-green-400 mr-2 w-full">
            <SsList :gameIdProp="gameId" />
        </div>
    </div>

    <div class="border-4 border-green-400 mx-2 mt-2 px-2 text-center">
        {{gameData.short_description}}
    </div>
    <div class="px-2 my-2">
        <h1>Categories</h1>
    </div>
    <div class="h-16 border-4 border-blue-400 mx-2 px-2 flex justify-start gap-2 items-center text-xs text-center">
        <div v-for="(cat,index) in gameData.categories" :key="index" class="rounded-full border-2 border-sky-100 px-2 hover:bg-sky-400">
            {{cat.description}}
        </div>
    </div>
    <div class="px-2 my-2">
        <h1>Type</h1>
    </div>
    <div class="h-16 border-4 border-blue-400 mx-2 px-2 flex justify-start gap-2 items-center text-xs">
        <div v-for="(type,index) in gameData.genres" :key="index" class="rounded-full border-2 border-sky-100 px-2 hover:bg-sky-400">
            {{type.description}}
        </div>
    </div>

    <div class="cartPack flex justify-end">
        <CartPack :priceInfoProp="priceInfo" :gameDataProp="this.gameData"/>
    </div>

</div>
</template>
