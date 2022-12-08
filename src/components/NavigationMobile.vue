<template>
  <div class="wrapper">
    <nav class="navigation">
      <ul class="list">
        <SearchBar />
        <router-link to="/" class="teste"> Personagens </router-link>
        <router-link to="/about" class="teste"> Sobre </router-link>
        <router-link to="/contact"> Contato </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "NavigationMobile",
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss">

.wrapper{
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.navigation{
  padding: 10px;
}
.list{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 0px;
  
}
nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: red;
}
</style>
