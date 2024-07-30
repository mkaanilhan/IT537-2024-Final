<template>   
  <div id="nav">
    <span id="title"> <b>SALEXFY</b> </span>
    <router-link to="/">Home</router-link> 
    <router-link to="/basket">Shopping Cart ({{this.productsInBag.length}})</router-link> 
    <router-link to="/aboutPage">About Us</router-link> 
    <a href="#" class="login">Login</a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Header',
  computed: {
    ...mapState(['productsInBag'])
  }
};

</script>

<style lang="scss">



#nav {
  display: flex;
  flex-wrap: wrap;
  flex: 1; 
  padding: 0px 30px; 
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  background-color: #aa00ff;
  color: white;
  color: #fff;      
  margin-bottom: 15%; 
  .login{
    margin-right: 5%;
  }
  #title{
      font-size: 30px;
      margin-left: 5%;
    }


  a {
    color: white;
    text-decoration: none;
    border-radius: 70px;
    border: 1px solid #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 8px 8px;
    margin: 16px ;
    font-weight: bold;
    &:hover {opacity: 0.6;}
    
    
    &.router-link-exact-active {
      border-radius: 100px;
      color: #aa00ff;
      border: 1px solid #fce301;
      background-color: #fce301;

    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    height: auto;

    #title {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    #nav {
      flex-direction: column;
      gap: 15px;

      a {
        margin: 8px 0;
        padding: 8px 12px;
      }
    }
  }
}
</style>