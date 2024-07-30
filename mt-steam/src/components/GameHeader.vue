<script>
import { useGameStore } from "../stores/Game.js"
export default {
    props:["gameIdProp","gameNameProp"],
    data() {
        return {
            store: useGameStore()

        }
    },

}
</script>
<template>
<div class="bg-gradient-to-r from-cyan-500 to-sky-500 shadow-xl p-4 mx-2 rounded-lg flex justify-between items-center my-2">
    <div class="text-white text-2xl">
        {{gameNameProp}}
    </div>
    <div>
    <RouterLink to="/cartView" class="flex gap-2 items-center">
        <img src="https://img.icons8.com/?size=100&id=v472B4H6zjFt&format=png&color=000000" alt="cart" class="w-10">
        <div>{{store.numberOfItem}}</div>
    </RouterLink>
    </div>
</div>
</template>
