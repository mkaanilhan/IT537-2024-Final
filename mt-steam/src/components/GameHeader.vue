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
<div class="bg-gray-400 p-4 mx-2 mb-2 rounded-lg flex justify-between items-center">
    <div class="text-white text-2xl">
        {{gameNameProp}} -- {{gameIdProp}}
    </div>
    <div>
    <RouterLink to="/cartView" class="flex gap-2 items-center">
        <img src="https://img.icons8.com/?size=100&id=v472B4H6zjFt&format=png&color=000000" alt="cart" class="w-10">
        <div>{{store.numberOfItem}}</div>
    </RouterLink>
    </div>
</div>
</template>
