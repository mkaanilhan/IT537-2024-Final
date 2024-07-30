<script>
import {
    useGameStore
} from "../stores/Game.js";
export default {
    props: ["gameDataProp", "priceInfoProp"],
    data() {
        return {
            store: useGameStore()
        }
    },
}
</script>

<template>
<div class="text-sm flex shadow-lg mx-2 my-2 justify-start rounded-lg overflow-x-auto">

    <img :src="`${this.gameDataProp.capsule_imagev5}`" alt="capsuleImg" class="rounded-lg">

    <div v-if="gameDataProp.type!=='demo' || !gameDataProp.is_free" class="flex justify-between max-lg:text-xs">

        <div class="title px-2 flex items-center" v-for="(pckGrp,index) in gameDataProp.package_groups" :key="index"> {{pckGrp.title}}</div>

        <div class="savings text-green-500 bg-emerald-100 px-2 flex items-center" v-if="priceInfoProp.discount_percent>0">-{{priceInfoProp.discount_percent}}%</div>
        <div class="priceContain inline-grid ">
            <div class="oldPrice line-through text-gray-200 bg-gray-400 px-2 text-xs flex items-center" v-if="priceInfoProp.discount_percent>0">{{priceInfoProp.initial_formatted}}</div>
            <div class="newPrice text-white bg-teal-400 px-2 flex items-center scale-105">{{priceInfoProp.final_formatted}}</div>
        </div>

    </div>

    <div v-else class="content-center px-2 max-lg:text-xs">
        Free to Play
    </div>


    <button class="addCart bg-green-200 px-2 text-green-800 rounded-r-lg max-lg:text-xs" @click="this.store.addProduct(gameDataProp)">Add Cart</button>

</div>
</template>
