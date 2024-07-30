<template>

<div class="about-us">
      <h1>About Us</h1>
      <p>
        Welcome to SALEXFY! We are a leading online store offering a wide range of products to cater to all your needs. Our mission is to provide you with the best shopping experience by offering high-quality products at competitive prices.
      </p>
      <p>
        At SALEXFY, we value our customers and strive to deliver exceptional service. Our dedicated team works hard to ensure that every product meets our high standards of quality and that your shopping experience is seamless and enjoyable.
      </p>
      <p>
        If you have any questions or feedback, please feel free to contact us. We would love to hear from you!
      </p>
    </div>

</template>
<script>
export default {
  name: 'About',
  
};

</script>


 <style lang="scss">
  
  .about-us {
  padding: 40px 20px;
  text-align: center;

  .container {
    max-width: 800px;
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    a {
      color: #aa00ff;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
  
</style>