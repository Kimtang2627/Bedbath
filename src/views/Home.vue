<template>
<div class="home-wrapper">
     <div class="home">
    <!-- Cover Imae Part  -->
    <router-link :to="{ name: 'Bag' }">
      <div class="cover">
        <img src="../assets/cover.jpeg" alt="" />
      </div>
    </router-link>

    <!-- componnent Parts   -->
    <div class="component-container flex">
      <!-- Link to Bed component  -->
      <router-link :to="{ name: 'Bed' }">
        <div class="part flex">
          <img src="../assets/BED.jpeg" alt="" />
          <div class="sub-wrapper flex">
            <span>Bed</span>
          </div>
        </div>
      </router-link>

      <div class="part flex">
        <img src="../assets/BATH.jpeg" alt="" />
        <div class="sub-wrapper flex"><span>Bath</span></div>
      </div>
      <div class="part flex">
        <img src="../assets/Table.jpeg" alt="" />
        <div class="sub-wrapper flex"><span>Table</span></div>
      </div>
    </div>

    <!-- introduction Part  -->
    <div class="intro-wrapper  ma">
      <div class="paragraph">
        <div><span class="homi">YOUR COMPLETE HOME LIFESTYLE DESTINATION</span></div>
        <div>
             <p>
          Welcome the Bed Bath N’ Table. We believe that there is no place more
          important than home so we’ve designed our range of premium homewares
          to enhance the enjoyment of every moment you spend there. We have
          created an inspiring selection of designer homewares and bathroom
          accessories that will bring the wonderfully rich pattern and colour of
          the world around us into your daily life. We are passionate about
          making Bed Bath N’ Table a place to help everyone create the home of
          their dreams. Shop online or visit us in one of our 170 locations
          across Australia, New Zealand, Singapore, to discover a complete home
          lifestyle destination, including homewares, home décor, home apparel
          and bathroom accessories.
        </p>
        </div>
       
      </div>
      <div class="paragraph">
        <span></span>
        
      </div>
      <div class="paragraph">
        <span class="memories">A happy home inspires great memories </span>
        <p>
          Our brand reflects our love of the land we call home, bringing the
          beauty of the modern Australian lifestyle to you. From our design
          studio and headquarters in Melbourne, we are dedicated to supplying
          beautiful products that will create a space in your home where you can
          make lasting memories.
        </p>
      </div>
      <div class="paragraph">
        <span class="design">Design, Innovate, Create or Decorate </span>
        <p>
          With every new season comes our new collection of locally designed
          homewares and bathroom accessories, so you can update your home décor
          to reflect your personal style. Our carefully curated collections
          offer an extensive range of coordinating designs, making it easy for
          you to mix and match and find items to complement your existing home
          décor. We want your home to reflect your personal style, so in each of
          our stores you’ll find an inspirational environment and receive expert
          advice to make sure you find the exact item you’re looking for. We
          strive to help you enhance your home with beautiful product and
          decorating ideas that make home living fun, easy and creative! Visit
          our online Lookbooks, Blog, Instagram and Pinterest to find the latest
          products and home décor ideas to transform your home.
        </p>
      </div>
    </div>
  </div>
</div>
 
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-wrapper{
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2) ;
}
.home {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;

  /////// Cover Images Part ////////
  .cover {
    margin-bottom: 15px;
  }

  //////// Components part /////////
  .component-container {
    width: 1170px;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: black;
    }

    .part {
      flex-direction: column;

      .sub-wrapper {
        background-color: rgb(240, 240, 240);
        //
        justify-content: center;
        width: 100%;
        height: 45px;
        align-items: center;
      }
    }
  }

  ////// Introduction Parts ///////

  .intro-wrapper {
      margin-top: 16px;
      max-width: 1170px;
      flex-direction: column;
      text-align: center;
      

      .paragraph{
          margin-bottom: 25px;
          p{
              padding-top: 10px;
              text-align:start;
              font-size: 13.5px;
              

          }
         .homi{
             font-size: 25px;
         }
         .memories{
             font-size: 20px;
         }
         .design{
             font-size: 16px;
         }
         
      }
      
  }
}
</style>
