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
            packageGroup: [],
            pckGroupSubs: [],
            isDemo: "",
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
            this.isDemo = this.gameData.type
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
<div class=" ">

    <GameHeader :gameIdProp="gameId" :gameNameProp="gameData.name" />

    <div class="flex jutify-start max-sm:grid">

        <div class="mx-auto shadow-xl grid content-start max-lg:text-xs rounded-lg">

            <div>
                <GameImgCard :imageProp="this.store.getImageLink(gameId)" class="shadow-xl hover:scale-105" />
            </div>

            <div class="mx-2 mt-2">

                <div v-if="isFree === false" class="flex justify-between rounded-lg px-2 items-center bg-gradient-to-r from-sky-500 to-cyan-500">

                    <div class="flex justify-start items-center gap-2">
                        <div class="price text-xs text-gray-200">
                            <div v-if="priceInfo.discount_percent > 0" class="line-through">{{priceInfo.initial_formatted}}</div>
                            <div v-else>{{priceInfo.final_formatted}}</div>
                        </div>

                        <div class="finalPrice text-lime-400">
                            <div v-if="priceInfo.discount_percent === 0" class="hidden">{{priceInfo.initial_formatted}}</div>
                            <div v-else>{{priceInfo.final_formatted}}</div>
                        </div>
                    </div>

                    <div class="discount text-green-200">
                        <div v-if="priceInfo.discount_percent === 0" class="hidden">{{priceInfo.initial_formatted}}</div>
                        <div v-else>%{{priceInfo.discount_percent}}</div>
                    </div>

                </div>
                <div v-else-if="isDemo==='demo'" class="flex justify-between">
                    <div>
                        Free To Play
                    </div>
                    <div>
                        Demo
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

        <div v-if="isDemo!=='demo'">
            <SsList :gameIdProp="gameId" />
        </div>
    </div>

    <div class="mx-2 mt-2 px-2 text-center max-lg:text-xs bg-gradient-to-r from-orange-100 to-amber-100">
        {{gameData.short_description}}
    </div>
    <div class="px-2 my-2">
        <h1>Categories</h1>
    </div>
    <div class="max-h-16 mx-2 shadow-md rounded-lg flex justify-start gap-2 items-center max-lg:text-xs text-center overflow-x-auto p-2 bg-gradient-to-r from-sky-200 to-cyan-200">
        <div v-for="(cat,index) in gameData.categories" :key="index" class="rounded-full border-2 border-sky-100 px-2 hover:bg-sky-400 hover:text-white">
            {{cat.description}}
        </div>
    </div>

    <div v-if="isDemo!=='demo'">
        <div class="px-2 my-2">
            <h1>Type</h1>
        </div>
        <div class="max-h-16 mx-2 shadow-md rounded-lg flex justify-start gap-2 items-center max-lg:text-xs text-center overflow-x-auto p-2 bg-gradient-to-r from-cyan-200 to-sky-200">
            <div v-for="(type,index) in gameData.genres" :key="index" class="rounded-full border-2 border-sky-100 px-2 hover:bg-sky-400 hover:text-white">
                {{type.description}}
            </div>
        </div>
    </div>

    <div class="cartPack flex justify-end">
        <CartPack :priceInfoProp="priceInfo" :gameDataProp="this.gameData" />
    </div>

</div>
</template>
