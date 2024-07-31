<template>
    <li class="flex justify-between border-dashed border-b-2 border-dimmed-text/20">
        <span class="text-left font-light">    {{metric}} </span> 
        <span class="text-right font-semibold"> {{value}} </span> 
    </li>
</template>

<script>

    export default {
            name: 'QuoteComponent',

            props: {
                metric: {required: true},
                value:  {required: true},
            },
        }

</script>
