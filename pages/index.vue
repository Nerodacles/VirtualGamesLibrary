<template>
  <div class="container mx-auto py-16">
    <input v-model="keyword" id="name" placeholder="Buscar">
    <h1 class="font-heading uppercase mb-8" v-if="!keyword">Popular Games</h1>  
    <h1 class="font-heading uppercase mb-8" v-if="keyword">Search game {{ keyword }}</h1>  
    <div class="game-container flex flex-wrap -mx-4">
      <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 px-4 mb-12 no-underline">
        <img :src="game.background_image" alt="cover">
        <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    games: [],
    keyword: ""
    }),

  methods: {
    searchGames() {
      console.log(`Checking name: ${this.keyword}`)
      axios
        .get("https://rawg-video-games-database.p.rapidapi.com/games", {
          params: {
            search: this.keyword
          }
        })
        .then(res => {
          console.log(res.data.results);
          this.games = res.data.results;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },

  watch: {
    keyword(newKeyword, oldKeyword){
      this.searchGames();
    }
  }
};
</script>
