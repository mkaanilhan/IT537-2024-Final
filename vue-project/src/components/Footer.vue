<template>   
    <div id="footer">
      <span id="sub-title"> <b>SALEXFY</b> </span>
      <router-link to="/aboutPage">About Us</router-link> 
      
    </div>
  </template>

<script>


export default {
  name: 'Footer',
  
};

</script>

<style lang="scss">



#footer {
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  background-color: #aa00ff;
  color: white;
  color: #fff; 
  justify-content: center;
  align-items: center;
  margin-top: 5%;      

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
    
    .sub-title{
      font-size: 50px;
      margin-right: 20px;
    }

    &.router-link-exact-active {
      border-radius: 100px;
      color: #aa00ff;
      border: 1px solid #fce301;
      background-color: #fce301;

    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    padding: 20px;

    #sub-title {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    a {
      margin:  0;
      padding: 8px 12px;
    }

   }   
}
</style>  