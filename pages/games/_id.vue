<template>
  <div>
    <div class="hero bg-gray-600" :style="`background:url(${backgroundImage}); background-size:cover`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-4" style="height:250px">
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12">
          <h1 class="font-heading text-white">{{ games.name }}</h1>
          <div class="text-white">{{ games.developers[0].name }}</div>
        </div>
      </div>
    </div>

     <div class="container mx-auto flex flex-col md:flex-row">
      <div class="w-full md:w-1/4 -mt-16">
        <img :src="games.background_image_additional" alt="cover" class="mb-8">
        <div class="mb-4">
          <span class="font-semibold">Platforms:</span>
          <span v-for="platform in games.platforms" :key="platform.platform.id">{{ platform.platform.name }}, </span>
        </div>

        <div class="mb-4">
          <span class="font-semibold">Released:</span>
          <span>{{ games.released }}</span>
        </div>

        <div class="mb-6">
          <a :href="getOfficialWebsite">Official Website</a>
        </div>

        <div class="mb-8">
          <div class="text-5xl font-semibold">{{ games.rating }}%</div>
          <div class="font-semibold">Overall Rating</div>
        </div>

      </div>
      <div class="w-full md:w-3/4 md:ml-12 py-8 leading-normal">
      <p class="mb-12">{{ games.description_raw }}</p>
      
      <!-- <div class="flex flex-wrap -mx-4">
        <a v-for="screenshot in game.screenshots" :key="screenshot.cloudinary_id" class="w-full md:w-1/4 px-4 mb-12 no-underline">
          <img :src="screenshot.url.replace('t_thumb', 't_1080p')" alt="screenshot">
        </a>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    getOfficialWebsite() {
      return this.games.website
    },
    backgroundImage(){
      return this.games.background_image
    }
  },
  asyncData({ params, error }) {
    return axios({
      url: `https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`,
      method: 'GET',
      headers: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
	        'x-rapidapi-key': '8a895adf10msh0d35a728b6ad2d7p1b0d63jsn0ec4375fd350',
	        'useQueryString': true
      },
    })
      .then(res => {
        console.log(res)
        return{
          games: res.data,
        }
      })
      .catch(err => {
        console.error(err);
      });
  },
  head() {
    return {
      // title: this.game.name + " | Video Games Library"
    };
  }
};
</script>