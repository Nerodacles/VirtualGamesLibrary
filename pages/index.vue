<template>
  <div class="container mx-auto py-16">
    <h1 class="font-heading uppercase mb-8">Popular Games</h1>
    <client-only>
      <input v-model="message" placeholder="edíteme">
      <p>El mensaje es: {{ message }}</p>
    </client-only>
    
    <div class="game-container flex flex-wrap -mx-4">
      <nuxt-link :to="'/games/' + game.id" v-for="game in games.results" :key="game.id" class="w-full md:w-1/5 px-4 mb-12 no-underline">
        <img :src="game.background_image" alt="cover">
        <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
        <div class="text-gray-900 text-base overflow-  hidden whitespace-no-wrap overflow-dots pb-1">{{ game.genres[0].name }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params, error }) {
    return axios({
      url: `https://rawg-video-games-database.p.rapidapi.com/games?page_size=1`,
      method: 'GET',
      headers: {
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key":"8a895adf10msh0d35a728b6ad2d7p1b0d63jsn0ec4375fd350",
          "useQueryString":true
      }
    })
      .then(res => {
        return{
          games: res.data,
        }
      })
      .catch(err => {
        console.error(err);
      });
  },

  data(data){
    return{
      games: [],
    }
  }, 
  fetchOnServer: false 
}
</script>
