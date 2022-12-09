<template>
  <div>
    <h1 class="title">Personagens</h1>
    <div class="card-container">
      <div class="card" v-for="character in characters" :key="character.id">
        <img :src="character.url" alt="" class="hero-img" />
        <h3>{{ character.name }}</h3>
        <div class="btn-container">
          <router-link
            :to="{ name: 'character', params: { id: character.id } }"
          >
            <button type="button" name="button" class="btn-sobre">Sobre</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearch } from "../../services/characters";

export default {
  name: "Characters",

  data: () => ({
    characters: [],
  }),

  created() {
    this.fetchCharacters();
  },

  methods: {
    async fetchCharacters() {
      try {
        const res = await getSearch(this.$route.params.inputValue);
        console.log(res.data);
        this.characters = res.data.data.results.map((character) => {
          return {
            ...character,
            url: `${character.thumbnail.path}/landscape_incredible.${character.thumbnail.extension}`,
          };
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>