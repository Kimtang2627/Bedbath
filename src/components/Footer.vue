<template>
  <div class="footer-wrapper">
    <!--   Main title Part  -->
    <div class="main-title flex">
      <!-- Bed And Bath  -->
      <div class="title-wrapper">
        <span class="title">BED BATH N'TABLE</span>
        <ul class="sub-title">
          <li>About Us</li>
          <li>Our Brands</li>
          <li>Our Commitment</li>
          <li>Life@Home</li>
          <li>E-Gift Cards</li>
          <li>Rewards</li>
          <li>Careers</li>
        </ul>
      </div>

      <!-- Customer Support  -->
      <div class="title-wrapper">
        <span class="title">CUSTOMER SUPPORT</span>
        <ul class="sub-title">
          <li>Contact Us</li>
          <li>Zip</li>
          <li>Afterpay</li>
          <li>Term & Condition</li>
          <li>Frequently Asked Questions</li>
          <li>Terms Of Use</li>
          <li>Privacy</li>
        </ul>
      </div>
      <!-- Shop with us -->

      <div class="title-wrapper">
        <span class="title">SHOP WITH US</span>
        <ul class="sub-title">
          <li>Track your Order</li>
          <li>GIft Card Redemption</li>
          <li>Delivery and Return</li>
          <li>Our Stories</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </div>

    <!-- Social Media Part  -->
    <div class="social">
      <!-- Social Media part  -->
      <div class="social-icon">
        <span>FOLLOW US </span>
        <div class="icon-container flex">
          <span class="icon"><img src="../assets/face.png" alt="" /></span>
          <span class="icon"><img src="../assets/insta.png" alt="" /></span>
          <span class="icon"><img src="../assets/pi.png" alt="" /></span>
        </div>
      </div>

      <!-- Payment Parts -->

      <div class="payment-wrapper">
        <span>PAYMENT OPTIONS</span>
        <div class="pay-container flex ">
          <span class="payment"><img src="../assets/master.png" alt="" /></span>
          <span class="payment"><img src="../assets/visa.png" alt="" /></span>
          <span class="payment"><img src="../assets/paypal.png" alt="" /></span>
        </div>
        <span
          >Transactions might go through 3DS
          <a
            class="link"
            href="https://www.adyen.com/blog/3d-secure-20-a-new-authentication-solution"
            >find out more</a
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
/////////Main Wrapper ///////////
.footer-wrapper {
  height: 355px;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 50px;
  

  ////////// Social Part //////////

        ///social Icon///

  .social {
      
    .icon-container {
      justify-content: space-between;
      max-width: 180px;
      .icon {
          padding: 18px 0;
        img {
          width: 44px;
          height: 40px;
        }
      }
    }
  }
        /// payment icon ///

  .payment-wrapper{
      a{
          color: black;
      }
    // width: 425px;
      .pay-container{
          max-width: 200px;
          justify-content: space-between;
          padding: 15px 0px;
         img{
             width: 55px;
             height: 45px;
         }
      }
  }
  ////////// main titile //////////

  .main-title {
      margin-left: 30px;
      span{
          font-size: 18px;
      }
    li {
      padding-top: 11px;

      list-style: none;
    }
    width: 522px;
    justify-content: space-between;
  }
}
</style>
