<template>
  <div id="first-element-content">
    <!--You have complete freedom over how this particular menu item will be displayed-->
    <!--All sorts of circles, lists, other components, etc. using incoming props/slots/vuex/etc-->
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
  width: 100vw;
  height: 500px;
  padding: 20px;
  justify-content: space-between;
  ///////////Title-wrapper ///////////
  .Title-wrapper {
    display: flex;
    // justify-content: space-evenly;
    flex-direction: row;
    justify-content: space-evenly;

    ////////////////main title /////////////
    .main-title  {
      margin-right: 100px;
      flex: 1 !important;
    }
  }
}
</style>
