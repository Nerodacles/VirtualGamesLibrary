<template>
  <div>
    <div class="hero bg-gray-600" :style="`background:url(${backgroundImage}); background-size:cover`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-4" style="height:250px">
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12">
          <h1 class="font-heading text-white">{{ game.name }}</h1>
          <div class="text-white">{{ game.involved_companies[0].company.name }}</div>
        </div>
      </div>
    </div>

    <div class="container mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-1/4 -mt-16">
        <img :src="game.cover.url.replace('t_thumb', 't_cover_big')" alt="cover" class="mb-8">
        <div class="mb-4">
          <span class="font-semibold">Platforms:</span>
          <span v-for="platform in game.platforms" :key="platform.id">{{ platform.name }}, </span>
        </div>

        <div class="mb-4">
          <span class="font-semibold">Released:</span>
          <span>{{ new Date(game.first_release_date).toDateString() }}</span>
        </div>

        <div class="mb-6">
          <a :href="getOfficialWebsite">Official Website</a>
        </div>

        <div class="mb-8">
          <div class="text-5xl font-semibold">{{ Math.round(game.total_rating) }}%</div>
          <div class="font-semibold">Overall Rating</div>
        </div>

      </div>
      <div class="w-full md:w-3/4 md:ml-12 py-8 leading-normal">
      <p class="mb-12">{{ game.summary }}</p>

      <div class="flex flex-wrap -mx-4">
        <a v-for="screenshot in game.screenshots" :key="screenshot.cloudinary_id" class="w-full md:w-1/4 px-4 mb-12 no-underline">
          <img :src="screenshot.url.replace('t_thumb', 't_1080p')" alt="screenshot">
        </a>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    getOfficialWebsite() {
      return this.game.websites[0].url
    },
    backgroundImage(){
      return this.game.screenshots[0].url.replace('t_thumb', 't_1080p')
    }
  },
  asyncData({ params, error }) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_KEY = 'a5f7eb5b40fb4a9fb1ac2bb57b4a0284'

    return axios({
      url: `${proxyurl}https://api-v3.igdb.com/games/`,
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'user-key': API_KEY,
          'X-Requested-With': 'XML_HttpRequest'
      },
      data: `fields name,involved_companies.company.*,cover.*,summary,platforms.*,first_release_date,websites.*,total_rating,screenshots.*;where id=${params.id};`
    })
      .then(res => {
        return{
          game: res.data[0]
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  head() {
    return {
      title: this.game.name + " | Video Games Library"
    };
  }
};
</script>