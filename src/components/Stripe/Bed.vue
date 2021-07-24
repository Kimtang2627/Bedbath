<template>
  <div id="first-element-content">
      <div class="divider">
           <div class="Title-wrapper">
      <div class="main-title">
        <div class="Title">
          <div class="section-title">Bed Linen</div>
          <ul class="a">
            <li><a href="/">Quilts Cover</a></li>
            <li><a href="/">Bed Sheets</a></li>
            <li><a href="/">Cover & Bed Spreads</a></li>
            <li><a href="/">Blankets</a></li>
            <li><a href="/">All Pillowcases</a></li>
            <li><a href="/">Silk Pillowcases</a></li>
          </ul>
        </div>

        <div class="Title">
          <div class="section-title">Bed Linen</div>
          <ul  >
            <li><a href="/">Quilts Cover</a></li>
            <li><a href="/">Bed Sheets</a></li>
            <li><a href="/">Cover & Bed Spreads</a></li>
            <li><a href="/">Blankets</a></li>
            <li><a href="/">All Pillowcases</a></li>
            <li><a href="/">Silk Pillowcases</a></li>
          </ul>
        </div>
      </div>
      <div class="main-title">
        <div class="Title">
          <div class="section-title">Bed Linen</div>
          <ul>
            <li><a href="/">Quilts Cover</a></li>
            <li><a href="/">Bed Sheets</a></li>
            <li><a href="/">Cover & Bed Spreads</a></li>
            <li><a href="/">Blankets</a></li>
            <li><a href="/">All Pillowcases</a></li>
            <li><a href="/">Silk Pillowcases</a></li>
          </ul>
        </div>

        <div class="Title">
          <div class="section-title">Bed Linen</div>
          <ul>
            <li><a href="/">Quilts Cover</a></li>
            <li><a href="/">Bed Sheets</a></li>
            <li><a href="/">Cover & Bed Spreads</a></li>
            <li><a href="/">Blankets</a></li>
            <li><a href="/">All Pillowcases</a></li>
            <li><a href="/">Silk Pillowcases</a></li>
          </ul>
        </div>
      </div>

      <div class="main-title">
        <div class="Title">
          <div class="section-title">Bed Linen</div>
          <ul>
            <li><a href="/">Quilts Cover</a></li>
            <li><a href="/">Bed Sheets</a></li>
          </ul>
        </div>

        <div class="Title">
          <div class="section-title"><a href="Bed Sale"></a></div>
        </div>
      </div>

      <div class="main-title">
        <img src="../../assets/bedsale.jpeg" alt="" />
      </div>
    </div>

      </div>
    <!--You have complete freedom over how this particular menu item will be displayed-->
    <!--All sorts of circles, lists, other components, etc. using incoming props/slots/vuex/etc-->
   
    <!-- <span>{{ item.title }}</span> -->
  </div>
</template>

<script>
export default {
  name: "Bed",
  // props:{
  //     item:{
  //         type:Object,
  //         required: true
  //     }
  // }
};
</script>

<style lang="scss">
#first-element-content {
//   display: flex;

border-bottom: 1px black solid ;
    background-color: rgba($color: white, $alpha: 0);
  width: 100vw;
  height: 600px;
  padding: 20px;
  justify-content: space-between;
  .divider{
      
border-top: 1px solid rgba($color: #000000, $alpha: 0.15);
  }
  ///////////Title-wrapper ///////////
  .Title-wrapper {
      width: 1330px;
    //   margin-left: auto;
    //   margin-right: auto;
    margin-right: auto;
    margin-left: auto;
    
      margin-top: 50px;
    display: flex;
    // justify-content: space-evenly;
    flex-direction: row;
    justify-content: space-around;

    ////////////////main title /////////////
    .main-title  {
    //   margin-right: 100px;
    margin: 0 25px;

    

    .section-title{
        margin-bottom: 15px;
        font-size: 20px;
        font-weight: bold;
        // margin-bottom: 100px;
        
        
    }
    
ul{
    list-style-type: none;
    margin-bottom: 15px;
    a:hover{
        text-decoration: underline;
    }
 a{
        text-decoration: none;
        color: black;
        // margin: 50px 0 ;
    }
    li{
        font-size: 15px;
        margin: 8px 0;
        // margin: 10px 0 ;
    }
}
   
    
    }
  }
}
</style>
