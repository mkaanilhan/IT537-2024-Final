<script>
import {
    useGameStore
} from "../stores/Game.js";
import Shop from '../components/Shop.vue'
import Recomended from '../components/Recomended.vue'
export default {
    data() {
        return {
            store: useGameStore()

        }
    },
    components: {
        Shop,
        Recomended,
    }

}
</script>
<template>
<div>
    <div>
        <Shop />
    </div>
    <div class="px-2 mx-2 drop-shadow-xl grid">
        <h1 class="underline max-lg:text-xs">Recomended For You</h1>
        <Recomended class=""/>
    </div>
</div>
</template>
