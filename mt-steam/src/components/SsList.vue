<script>
import {
    useGameStore
} from "../stores/Game.js";
export default {
    props: ["gameIdProp"],
    data() {
        return {
            gameDetails: [],
            store: useGameStore(),
            ssList: [],
            pathFull: "",

        }
    },
    methods: {
        showLgImg(linkValue) {
            this.pathFull = linkValue
        }

    },
    async created() {

        const url = `https://steam-store-data.p.rapidapi.com/api/appdetails/?appids=${this.gameIdProp}`;
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
            this.ssList = this.gameDetails[this.gameIdProp].data.screenshots
            this.pathFull = this.ssList[0].path_full
        } catch (error) {
            console.error(error);
        }
    },

}
</script>
<template>
<div>

    <div class="max-h-96 shadow-lg my-2 mx-2 overflow-y-auto rounded-lg max-sm:hover:scale-110">
        <div >
            <img :src="`${this.pathFull}`" alt="pathFull" class="rounded-lg">
        </div>
    </div>

    <div class="shadow-lg rounded-lg mx-2 inline-flex content-end max-h-24 max-w-24 cursor-pointer" v-for="(thumbnail,index) in ssList" :key="index" @click="showLgImg(thumbnail.path_full)">
        <img :src="`${thumbnail.path_thumbnail}`" alt="path_thumbnail" class="rounded-lg hover:motion-safe:animate-spin">
    </div>

</div>
</template>
