<template>
  <div id="app">
    <component :is="isCurrencyHeader" />
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import { isMobile } from 'mobile-device-detect';
  import MobileHeader from './components/MobileHeader.vue';

  export default {
    components: {
      Header,
      MobileHeader,
    },
    computed: {
      isMobile() {
        return isMobile;
      },
      isCurrencyHeader() {
        return this.isMobile ? 'MobileHeader' : 'Header'
      }
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
}


</style>
