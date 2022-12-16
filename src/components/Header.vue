<template>
  <div class="hello">
    <header>
      <div class="wrapper">
        <nav class="navigation">
          <div class="logo">
            <router-link to="/">
              <img src="../assets/logo_red.png" alt="logo" class="logo-img" />
            </router-link>
          </div>
          <ul>
            <router-link to="/"> Personagens </router-link>
            <router-link to="/about"> Sobre </router-link>
            <router-link to="/contact"> Contato </router-link>
            <SearchBar v-on="$listeners" />
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  name: "Header",
  components: {
    SearchBar
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 20px;
  padding-right: 10px;
  margin-right: 10px;
  align-items: center;
}
a {
  color: white;
  text-decoration: none;
  transition: 400ms;
}
a:hover {
  color: #d91828 !important;
  font-size: 18px;
}
.container{
  display: flex;
  
}
.logo {
  margin-right: auto;
}
.logo-img {
  width: 100px;
  transition: 400ms;
}
.logo-img:hover {
  filter: drop-shadow(16px 16px 10px black);
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 5%;
}
.btn-contato {
  width: 100px;
  height: 30px;
  color: #0d0d0d;
  background-color: rgba(255, 255, 255, 0.842);
  border-radius: 10px;
  font-weight: bold;
  transition: 400ms;
  border: 1px solid rgba(255, 255, 255, 0.199);
}
.btn-contato:hover {
  width: 103px;
  height: 33px;
  color: white;
  background-color: #d91828;
  border: 1px solid #d91828d7;
  box-shadow: 0px 0px 10px 1px #d91828d7;
  cursor: pointer;
}
</style>
