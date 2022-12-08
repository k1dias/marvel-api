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
import { getCharacters } from "../../services/characters";

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
        const res = await getCharacters();
        console.log(res.data.data.results);
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

<style lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-around;
  padding-bottom: 25px;
  margin-left: 150px;
  margin-right: 150px;

  @media (max-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    gap: 30px;
  }
}

.card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  background-color: rgba(245, 245, 245, 0.877);
  min-height: 440px;
  width: 310px;
  border-radius: 10px;
  flex-direction: column;
  transition: 400ms;
  margin-bottom: 40px;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 210px;
    min-height: 340px;
    
  }
}
.card:hover {
  background-color: #f23d3d;
}
.btn-container {
  padding-bottom: 30px;
}
.btn-sobre {
  width: 180px;
  height: 30px;
  color: white;
  background-color: #d91828;
  border-radius: 10px;
  font-weight: bold;
  transition: 400ms;
  border: 1px solid rgba(255, 255, 255, 0.199);
  box-shadow: 0px 0px 5px 1px #a5a4a4d7;
}
.btn-sobre:hover {
  width: 190px;
  height: 32px;
  box-shadow: 0px 0px 5px 1px #8a0000d7;
}
.card:hover .btn-sobre {
  color: #0d0d0d;
  background-color: rgba(255, 255, 255, 0.842);
  border: 1px solid rgba(255, 255, 255, 0.199);
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px #8a0000d7;
}
.hero-img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 230px;
  @media (max-width: 768px) {
    height: 150px; 
  }
}
h1 {
  color: white;
}
</style>
