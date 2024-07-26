<script>
export default {
    props:["gameIdProp","gameNameProp"],
    data() {
        return {

        }
    },

}
</script>
<template>
<div class="bg-gray-400 p-4 mx-2 my-2 rounded-lg flex justify-between items-center">
    <div class="text-white text-2xl">
        {{gameNameProp}}
    </div>
    <div>
        <img src="https://img.icons8.com/?size=100&id=v472B4H6zjFt&format=png&color=000000" alt="cart" class="w-16">
    </div>
</div>
</template>
