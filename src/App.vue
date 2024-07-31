<script>
    import Router from './router/index.js'
    import HeaderComponent from './components/HeaderComponent.vue'

    export default{

        name:"InvestMate",

        components: {
            HeaderComponent,
        }
    }
</script>

<template>
    <body class="bg-dark-back min-h-screen text-lite-text">
        <header>
            <HeaderComponent />
        </header>
        <main>
            <div class="flex justify-center">
                <div class="flex-column w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12">
                    <RouterView />
                </div>
            </div>
        </main>
    </body> 
</template>

<style>
    .separator {
      border: none;
      height: 1px;
      background-color: #333;
      margin: 0;
    }
</style>
