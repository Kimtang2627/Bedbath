
/* eslint-disable */
<template>
  <div class="hello">
    <div class="title-bar">
      <span class="title"> About Us </span>
      <span class="title"> Track your order</span>
      <span class="title"> Store Lcoator </span>
    </div>
    <div class="flex main-title">
        <router-link to='/'>
            <div class='bed-logo'>
                <img id="logo1" src="../assets/logo.svg" alt="">
            </div>
        </router-link>
      

      <div class="icon-container">
        <div class="input">
          <button class="search-btn">
            <img src="../assets/search.svg" alt="" />
          </button>
          <input class="form" type="text" placeholder="Search a product" />
        </div>
       
        <div class="icon">
             <router-link :to="{
            name: 'Gift'
        }">
         <div class="sign sign-1">
            <div class="test"><img src="../assets/card.svg" alt="" /></div>
            <div class="text">E-Gift Cards</div>
          </div>
        </router-link>
        <router-link :to="{name: 'Signin'}">
            <div class="sign sign-2">
            <div class="test"><img src="../assets/person.svg" alt="" /></div>
            <div class="text">Sign In</div>
          </div>
        </router-link>
        <router-link :to="{name: 'Bag'}">
             <div class="sign sign-3">
            <div class="test"><img src="../assets/bag.svg" alt="" /></div>
            <div class="text">My Bag</div>
          </div>
        </router-link>
         
          
         
        </div>
      </div>


     
    </div>

    <vsm-menu :menu="menu">
      <template #default="{ item }">
           <!-- this place, through the default slot on each iteration of your array (where there is a dropdown menu)--> 
          <!--I pass an array object, and you output it as you want (here, through a dynamic component, etc)-->
          <!--https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand-->
        <component :is="item.component" :item="item" />
         
      </template>
  </vsm-menu> 

  

     <!-- <div class="category">
          <span class="cate-title">BED</span>
          <span class="cate-title">BATH</span>
          <span class="cate-title">TABLE</span>
      </div> -->
  </div>
</template>

<script>
 

import Bed from "../components/Stripe/Bed.vue"
export default {

name: 'Nav',

  
  
data(){
      return {
        menu: [
        { title: 'BED',element: 'router-link',  attributes:{ to: '/'},dropdown: 'first',component: Bed ,  },
       
        { title: 'BATH' ,dropdown: 'bath' ,  attributes: { href: '/' }},
        {title: 'TABLE', dropdown: 'table', }

      ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.hello {
  // text-align: center;
  height: 12rem;
  overflow: none;
  width: 100vw;
  text-align: center;
//   justify-content: center;
//   display: flex;


  /////////Titile Bar ///////////
  .title-bar {
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
  }

  /////////Main Title //////////////
  .main-title {

    margin-top: 8px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px ;
    

    width: 65%;
    height: 65px;
    padding: 10px 10px 0 10px;

    .bed-logo{
        #logo1{
            
            
            
            width: 290px;
        height: 52px

        }
        width: 290px;
        height: 60px;
        
        
    }

    ///////////Icon Container //////////////

    .icon-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      // width: 100%;

      .icon {
        display: flex;
        margin-left: 20px;
        margin-top: 4px;
        
        

        a{
            text-decoration: none;
            color: black;
        }
        // align-items: baseline;

        .sign {
          margin: 0 20px;
          .text {
            margin-bottom: 10px;
            font-size: 12px;
            text-decoration: none;
          }

          .test {
            height: 45px;

            img {
              height: 40px;
              margin-top: 7px;
            }
          }
        }
      }

      /////////Input Form ////////////
      .input {
        display: flex;
        border: 0.1px rgba($color: #000000, $alpha: 0.4) solid;
        position: relative;
        border-radius: 2px;
        .search-btn {
          display: flex;
          background-color: white;
          border: none;
          padding: 0 6px;
          justify-content: flex-end;
          align-items: center;
          padding-left: 20px;
        }

        .form:focus {
          outline: 0;
          width: 360px;
        }

        input::placeholder {
          font-family: 'Titillium Web', sans-serif;
          padding-top: 5px;
          padding-right: 50px;
          font-size: 16px;
          color: rgba($color: #000000, $alpha: 0.7);
          position: absolute;
        }

        .form {
          padding: 10px 10px 10px 0px;

          width: 180px;
          height: 52px;
          padding-left: 0px;
          border: none;
        }
      }

      


    }

   
  }

   ////////////Category /////////////////

    // .category{
    //     margin-top: 18px;
    //     display: flex;
    //     justify-content: center;
    //     height: 58px;
    //     align-items: center;

    //     .cate-title{
    //         margin: 0 20px;
    //         font-size: 20px;
    //         ont-family: 'Titillium Web', sans-serif;
    //     }
        

    // }
}
.vsm-menu {
   
    display: flex;
    justify-content: center;
  width: 500px;
 
  margin: 0 auto;
//   color: black;
position: relative;
z-index: 100;


}

::v-deep .vsm-link {
     cursor: pointer;
  color: black;
  margin-right: 2rem;
  font-size: 1.25rem;
  font-weight: light;
  font-family: 'Titillium Web', sans-serif;

}


</style>
