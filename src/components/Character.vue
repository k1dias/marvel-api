<template>
  <div class="container">
    <div class="character-card">
      <div class="left">
        <h1 class="title">
          {{ character.name }}
        </h1>
        <p class="description">
          {{ character.description }}
        </p>
      </div>
      <div class="right">
        <img :src="urlImg" alt="Hero Image" class="hero-image" />
      </div>
    </div>
  </div>
</template>
<script>
import { getCharacter } from "../../services/characters";

export default {
  name: "Character",

  components: {},

  data: () => ({
    character: {},
    urlImg: "",
  }),

  created() {
    this.fetchCharacter();
  },

  methods: {
    async fetchCharacter() {
      try {
        const {
          data: {
            data: { results },
          },
        } = await getCharacter(this.$route.params.id);
        console.log(results);
        this.character = results[0];
        this.urlImg = `${results[0].thumbnail.path}/standard_fantastic.${results[0].thumbnail.extension}`;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss">
.container {
  color: white;
  text-shadow: 0px 0px 4px #000000;
}

.left {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  margin: 10px;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0px;
  }
}
.right {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
  margin: 10px;
}
.character-card {
  display: flex;
  height: 500px;
  padding: 50px;
  margin: 50px;
  background-color: #f23d3d;
  border-radius: 30px;
  box-shadow: 0px 0px 20px 1px #161616d7;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px;
    margin: 10px;
    height: auto;
    min-height: 700px;
  }
}
.hero-image {
  border-radius: 30px;
  box-shadow: 0px 0px 20px 1px #161616d7;
  @media (max-width: 768px) {
    width: 100%;
  }
}
.description {
  font-size: 20px;
  text-align: justify;
}
</style>
