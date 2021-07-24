/* eslint-disable */
<template>
  <div class="hello">
    <div class="divider">
      <div class="title-bar flex">
        <div class="bar-wrapper">
          <router-link :to="{ name: '/' }">
            <div class="title-1">About Us</div>
          </router-link>
        </div>

        <div class="bar-wrapper">
          <router-link :to="{ name: '/' }">
            <div class="logo-bar"><img src="../assets/truck.png" alt="" /></div>
            <div class="title-1">Track your order</div>
          </router-link>
        </div>

        <div class="bar-wrapper">
          <router-link :to="{ name: '/' }">
            <div class="logo-bar">
              <img class="location" src="../assets/location.png" alt="" />
            </div>
            <div class="title-2">Store Locator</div>
          </router-link>
        </div>

        <!-- Country selector  -->
        <div class="filter-country" @click="toggle_filter">
          <span> {{ li }}</span>
          <img src="../assets/arrow.svg" alt="" />
          <ul class="country-dropdown" v-show="selected">
            <li
              v-for="(list, index) in lists"
              :key="index"
              @click="set_country(index)"
            >
              <div class="name">{{ list }}</div>
            </li>
          </ul>
          <!-- <select class="Country" name= "country">
            <option selected >🇦🇺 Austrlia</option>
            <option >🇫🇷 France</option>
            <option > 🇸🇬 Singapore</option>
          </select> -->
        </div>
      </div>
    </div>

    <!-- <hr class="line" /> -->
    <div class="sticky-wrapper divider">
      <div class="flex main-title">
        <router-link to="/">
          <div class="bed-logo">
            <img id="logo1" src="../assets/logo.svg" alt="" />
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
            <router-link
              :to="{
                name: 'Gift',
              }"
            >
              <div class="sign sign-1">
                <div class="test"><img src="../assets/card.svg" alt="" /></div>
                <div class="text">E-Gift Cards</div>
              </div>
            </router-link>
            <router-link :to="{ name: 'Signin' }">
              <div class="sign sign-2">
                <div class="test">
                  <img src="../assets/person.svg" alt="" />
                </div>
                <div class="text">Sign In</div>
              </div>
            </router-link>
            <router-link :to="{ name: 'Bag' }">
              <div class="sign sign-3">
                <div class="test"><img src="../assets/bag.svg" alt="" /></div>
                <div class="text">My Bag</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <vsm-menu :menu="menu" element="header" :screen-offset="0">
        <template #default="{ item }">
          <!-- this place, through the default slot on each iteration of your array (where there is a dropdown menu)-->
          <!--I pass an array object, and you output it as you want (here, through a dynamic component, etc)-->
          <!--https://vuejs.org/v2/guide/components-slots.html#Named-Slots-Shorthand-->
          <component :is="item.component" :item="item" />
        </template>
      </vsm-menu>

      <!-- <hr class="line" /> -->
    </div>

    <div class="divider">
      <div class="bottom-title">
        <router-link :to="{ name: 'Home' }">
          <div class="section-title">Sale Catalogue</div>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <div class="section-title">Free Shipping on orders over $150</div>
        </router-link>
        <router-link :to="{ name: 'Home' }">
          <div class="section-title">Winter Magazine</div>
        </router-link>
      </div>
    </div>

    <Bar />

    <router-view></router-view>

    <Footer />

    <End />

    <!-- <div class="category">
          <span class="cate-title">BED</span>
          <span class="cate-title">BATH</span>
          <span class="cate-title">TABLE</span>
      </div> -->
  </div>
</template>

<script>
import Bed from "../components/Stripe/Bed.vue";
import Bar from "./Bar.vue";
import Footer from "./Footer.vue";
import End from "./End.vue";
export default {
  name: "Nav",
  components: {
    Bar,
    Footer,
    End,
  },
  data() {
    return {
      ///////Display of the Country selector menu ///////////
      selected: null,

      lists: ["🇦🇺  Australia", " 🇫🇷  France", "🇸🇬  Singapore"],

      li: "🇦🇺  Australia",

      menu: [
        {
          title: "BED",
          element: "router-link",
          attributes: { to: "/" },
          dropdown: "first",
          component: Bed,
        },

        { title: "BATH", dropdown: "bath", attributes: { href: "/" } },
        { title: "TABLE", dropdown: "table" },
        { title: "HOME DECOR", dropdown: "table" },
        { title: "APPAREL", dropdown: "table" },
        { title: "KIDS", dropdown: "table" },
        { title: "NEW", dropdown: "table" },
        { title: "ONLINE EXCLUSIVE", dropdown: "table" },
        { title: "SALE", dropdown: "table" },
      ],
    };
  },

  methods: {
    toggle_filter() {
      return (this.selected = !this.selected);
    },

    set_country(index) {
      this.li = this.lists[index];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  // text-align: center;
  height: 100%;
  //   overflow: none;
  min-width: 100vw;
  //   text-align: center;
  //   margin: 0 25vw;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  //   display: flex;
  //   flex-direction: column;

  .title-bar {
    margin-top: 5px;
    //   justify-content: flex-end;
    align-items: center;
    justify-content: flex-end;

    .bar-wrapper {
      position: relative;
      padding: 0 15px;
    }

    a {
      display: flex;
      font-size: 12px;
      color: #28463a;
      text-decoration: none;

      .title-1 {
        padding: 6px 0px 0px 5px;
      }

      .title-2 {
        padding: 10px 1px 1px 6px;
      }
      .logo-bar {
        display: inline-block;
        .location {
          width: 12px;
          height: 28px;
        }
        img {
          padding-top: 10px;
          //   position: absolute;
          width: 20px;
          height: 23px;
        }
      }
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .line {
    margin-top: 5px;
    width: 150vw;
    opacity: 0.4;
    margin-left: -200px;
  }

  /////////Titile Bar ///////////
  .title-bar {
    margin-bottom: 10px;
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    //   width: 100vw;
    // border-bottom: 1px solid rgba($color: #000000, $alpha: 0.2);
    text-align: end;

    .filter-country {
      position: relative;
      cursor: pointer;
      //    width: 160px;
      text-align: left;

      span {
        font-size: 13px;
      }

      img {
        padding-left: 5px;
      }

      .country-dropdown {
        position: absolute;
        height: 145px;
        z-index: 999;
        background-color: white;
        list-style: none;
        max-width: 150px;
        text-align: left;
        box-shadow: #bdbdb4 0px 8px 24px;
        margin: 17px -61px 1px;
        margin-right: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        li:hover {
          background-color: rgba($color: rgb(226, 224, 224), $alpha: 0.3);
        }
        li {
          width: 160px;
          height: 43px;
          padding-left: 28px;
          padding-top: 5px;
          // padding-top: 5px;
          // // display: flex;
          //     // padding: 5px 1px 1px 25px;
          //     margin-left: 25px;
          //     margin-top: 5px;
        }
      }
    }
  }

  .sticky-wrapper {
    background-color: white;
    position: sticky;
    top: 0;
  }

  /////////Main Title //////////////
  .main-title {
    width: 1170px;
    margin-right: auto;
    margin-left: auto;
    position: sticky;
    top: 0;
    align-self: flex-start;

    min-height: 50px;
    margin-top: 8px;
    text-align: center;
    // display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    // gap: 20%;
    // margin: 8px 50vw 20px 25vw;

    // width: 1300px;
    // height: 500px;
    padding: 10px 10px 0 10px;

    .bed-logo {
      #logo1 {
        width: 290px;
        height: 80px;
        margin-right: 15px;
      }
      width: 290px;
      height: 60px;
    }

    ///////////Icon Container //////////////

    .icon-container {
      display: flex;
      justify-content: space-between !important;
      align-items: center;

      // width: 100%;

      .icon {
        display: flex;

        margin-top: 4px;
        justify-content: space-between;
        margin-right: -13px;

        a {
          text-decoration: none;
          color: black;
          display: flex;
          // justify-content: flex-start;
          margin-left: 10px;
          align-items: flex-start;
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
        // position: relative;
        border-radius: 2px;
        margin-right: 15px;
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
          font-family: "Titillium Web", sans-serif;
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
  .divider {
    width: 100vw;

    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.15);
    .bottom-title {
      width: 1170px;
      margin-right: auto;
      margin-left: auto;

      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      .section-title {
        font-size: 17px;
        color: black;
        text-decoration: none !important;
        font-weight: 500;
      }
      a {
        text-decoration: none;
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

  justify-content: space-around;
  max-width: 1170px;
  height: 45px;
  margin: 0 auto;
  //   color: black;
  //   position: relative;
  z-index: 1;
  margin-bottom: 25px;
}
::v-deep .vsm-background {
  background-color: rgba($color: white, $alpha: 1);
  box-shadow: none;
}

::v-deep .vsm-arrow {
  background-color: rgba($color: #000000, $alpha: 0);
}

::v-deep .vsm-link {
  cursor: pointer;
  color: black;
  //   margin-right: auto;
  //   margin-left: auto;
  font-size: 20px;
  padding: 10px 38px 51px 27px;
  font-weight: light;
  font-family: "Titillium Web", sans-serif;
  //   background-color: red;
  //   height: 200px;
}

::v-deep .vsm-link:last-child {
  color: red;
}
</style>
