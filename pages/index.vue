<template>
  <div class="container mx-auto py-16">
    <h1 class="font-heading uppercase mb-8">Popular Games</h1>
    
    <div class="game-container flex flex-wrap -mx-4">
      <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 px-4 mb-12 no-underline">
        <!-- <img :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="cover"> -->
        <div class="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
        <!-- <div class="text-gray-900 text-base overflow-hidden whitespace-no-wrap overflow-dots pb-1">{{ game.genres[0].name }}</div> -->
      </nuxt-link>
      <!-- <img v-for="game in games" :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="cover" > -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ params, error }) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/'
    const API_KEY = 'a5f7eb5b40fb4a9fb1ac2bb57b4a0284'

    return axios({
      url: `${proxyurl}https://api-v3.igdb.com/games/`,
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'user-key': API_KEY,
          'X-Requested-With': 'XML_HttpRequest'
      },
      data: 
      "fields name,genres.name,cover.url,popularity; limit 30"
    })
      .then(res => {
        return{
          games: res.data
        }
      })
      .catch(err => {
        console.error(err);
      });


    // return axios.get(`${proxyurl}https://api-v3.igdb.com/games/`)
    //   .then((res) => {
    //     console.log(res)
    //     // return { 
    //     //   games: res.data
    //     //   }
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
  },

  data(data){
    console.log(data)
    return{
      games:[]
    }
  }  
}
</script>
