<template>
  <div class="home">
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue'


export default {
  name: 'HomeView',
  components: {
    Characters,
  }, 

}
</script>

<style lang="css">
  html{
    background-color: #0D0D0D;
  }
</style>
