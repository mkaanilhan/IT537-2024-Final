<script>
import { useGameStore } from "../stores/Game.js";
export default {
    props: ["gameDataProp","priceInfoProp"],
    data() {
        return {
            store:useGameStore()
        }
    },
}
</script>

<template>

<div class="text-sm flex border-2 border-orange-600 mx-2 my-2 justify-start">

    <img :src="`${this.gameDataProp.capsule_imagev5}`" alt="capsuleImg">

    <div class="title px-2 flex items-center" v-for="(pckGrp,index) in gameDataProp.package_groups" :key="index"> {{pckGrp.title}}

    </div>
    <div class="savings border border-cyan-400 text-green-500 bg-emerald-100 px-2 flex items-center">-{{priceInfoProp.discount_percent}}%</div>

    <div class="priceContain inline-grid">
        <div class="oldPrice line-through text-gray-200 bg-gray-400 px-2 flex items-center">{{priceInfoProp.initial_formatted}}</div>
        <div class="newPrice text-white bg-teal-400 px-2 flex items-center">{{priceInfoProp.final_formatted}}</div>
    </div>

    <button class="addCart bg-green-200 px-2 text-green-800" @click="this.store.addProduct(gameDataProp)">Add Cart</button>
</div>
</template>
