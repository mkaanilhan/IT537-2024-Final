<script>
export default {
    props:["imageProp"
    ],
    data() {
        return {
            
        }
    },

}
</script>
<template>
<div class="shadow-xl mx-2 mt-2 rounded-lg">
    <img :src="`${imageProp}`" alt="gameImage" class="rounded-lg">
</div>
</template>
