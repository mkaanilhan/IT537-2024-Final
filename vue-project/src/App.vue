<template>

<div id="app">
    <Header />
    
  </div>
    
  <router-view/>

  <Footer/>

</template>

<script>
 
  import { mapState } from 'vuex/dist/vuex.cjs.js';
  import Header from './components/Header.vue'; 
  import Footer from './components/Footer.vue';

  export default {

    name: 'App',
    created(){
     this.$store.dispatch('loadProducts');
     this.$store.dispatch('loadBag');
    },

    
    computed: mapState([
     'productsInBag'
    
    ]),
    components: {
    Header,
    Footer
  },
  }
  
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1280px;
  margin: 80px auto;
  button {
    color: #fff;
    background-color: #aa00ff;
    border: 1px solid #aa00ff;
    border-radius: 100px;
    font-weight: 400;
    text-align: center;
    padding: 8px 16px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
}




</style>
