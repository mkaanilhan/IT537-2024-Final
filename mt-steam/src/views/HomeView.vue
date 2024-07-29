<script>
import Header from "../components/Header.vue"
import GameCard from "../components/GameCard.vue"
export default {
    data() {
        return {

        }
    },
    components: {
        Header,
        GameCard
    }
}
</script>

<template>
<div class="flex justify-start">
    <div class="mx-2 my-2 w-8 md:w-16 lg:w-32 h-full shadow-xl">
        <Header />
    </div>
    <div class="my-2 w-full mr-2">
        <div class="h-64 shadow-xl mb-2">
            Live Stream
        </div>
        <div class="shadow-xl">
            <GameCard />
        </div>
    </div>
</div>
</template>
