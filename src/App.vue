<template>
  <div id="app">
    <Nav/>
   
   
    
  
    
  </div>
</template>

<script>

import Nav from "./components/Nav.vue"
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap');

*{
  padding: 0;
  margin: 0 ; 
  box-sizing: border-box;
}

#app{
  font-family: 'Titillium Web', sans-serif;
  width: 100vw;
  /* overflow:hidden; */
  
  

}

.flex{
  display: flex
}

.ma{
  margin-right: auto;
  margin-left: auto;
}
</style>
