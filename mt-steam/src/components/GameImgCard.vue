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
<div>
    <img :src="`${imageProp}`" alt="gameImage" class="">
</div>
</template>
