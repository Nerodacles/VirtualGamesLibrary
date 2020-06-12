<template>
  <div class="flex mb-4">
    <div class="w-1/4 border-b border-4 border-black h-full bg-black">
  
    </div>
    <div class="w-full bg-gray-500 h-12">
      <div class="flex items-center border-b border-2 border-gray-500 py-2 bg-black px-2 divide-y divide-gray-400">
      <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" v-model="keyword" id="search" placeholder="Search">
      
      </div>
      <div class="border-b border-2 border-gray-500 py-2 bg-black px-2">
        <div>
          <h1 class="font-heading uppercase mb-8 text-white" v-if="!keyword">Popular Games</h1>  
        
        </div>  
        <h1 class="font-heading uppercase mb-8 text-white" v-if="keyword">Search game {{ keyword }}</h1>
        <div class="game-container flex flex-wrap -mx-4 border-3 border-gray-500">
          <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 px-4 mb-12 no-underline">
            <img :src="game.background_image" alt="cover">
            <div class="text-white font-semibold text-base overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
          </nuxt-link>
        </div>
      </div>
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
