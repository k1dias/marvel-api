<template>
 <div class="container">
   <div class="logo">
     <router-link to="/">
       <img src="../assets/logo_red.png" alt="logo" class="logo-img" />
      </router-link>
    </div>
    <div class="burger-menu"
      @click="handleMobileMenu">
      <i class="fa-solid fa-bars"></i>
  </div>  
  <transition name="slide-fade">
    <NavigationMobile v-show="showMobileMenu" @handle="handleMobileMenu" />
  </transition>
 </div>
</template>

<script>
import NavigationMobile from './NavigationMobile.vue';

export default {
  name: "MobileHeader",
  components: {
    NavigationMobile,
  },
  methods: {
    handleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    }
  },
  created() {
    this.showMobileMenu
  },
  data: () => ({
    showMobileMenu: false
  })
};
</script>

<style lang="scss">
.container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.burger-menu{
  background-color: #0D0D0D;
  border: none;
}

.fa-bars{
  color: white;
  padding: 20px;
  font-size: 2rem;
  cursor: pointer;
}
.logo{
  width: 20%;
  padding: 20px;
}
.logo-img{
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 400ms ease;
}
.slide-fade-leave-active {
  transition: all 400ms cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100px);
  transition: 400ms;
  opacity: 0;
}

</style>
