<script>
import { useGameStore } from "../stores/Game.js";
import Shop from '../components/Shop.vue'
export default {
    data() {
        return {
            store: useGameStore()
            
        }
    },
    components:{
        Shop,
    }

}
</script>
<template>
<div >
    <div>
        <Shop />
    </div>
    <div class="px-2 mx-2 border-2 border-slate-950 underline grid">
        Recomended For You -- 

        <div v-for="(gameData,index) in this.store.gameDataList" :key="index">
            {{gameData.name}}
        </div>

    </div>
</div>
</template>
