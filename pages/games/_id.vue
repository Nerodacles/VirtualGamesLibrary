<template>
  <div class="bg-gray-600">
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
        <img :src="games.background_image " alt="cover" class="mb-8">
        <div class="mb-4">
          <span class="font-semibold text-white">Platforms:</span>
          <span v-for="platform in games.platforms" :key="platform.platform.id" class="text-white">{{ platform.platform.name }}, </span>
        </div>

        <div class="mb-4">
          <span class="font-semibold text-white">Released:</span>
          <span class="text-white">{{ games.released }}</span>
        </div>

        <div class="mb-6">
          <a :href="getOfficialWebsite" class="text-white">Official Website</a>
        </div>

        <div class="mb-6">
          <div class="Stars" :style="`--rating: ${games.rating};`"></div>

          <div class="font-semibold text-white">Overall Rating</div>
        </div>

      </div>
      <div class="w-full md:w-3/4 md:ml-12 py-8 leading-normal">
        <p class="mb-12 text-white">{{ games.description_raw }}</p>
        <div class="flex flex-wrap -mx-4">
          <!-- <a v-for="screenshot in screenShot" :key="screenshot.id" class="w-full md:w-1/4 px-4 mb-12 no-underline"> -->
            <!-- <img :src="screenshot.image" alt="screenshot"> -->
          <!-- </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  // aqui se guardaran las screenshots en un array
  // data: () => ({ screen: [] }),

  computed: {
    getOfficialWebsite() { return this.games.website },
    backgroundImage() { return this.games.background_image_additional },
  },

  async fetch({params}){
    return axios(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}/screenshots`)
      .then((res) => { return { screens: res.data.results } })
      .catch((err) => { console.error(err) });
  },

  asyncData({ params, error }) {
    return axios(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`)
      .then(res => { return { games: res.data } })
      .catch(err => { console.error(err) });
  },

  head() { return { title: this.games.name + " | Video Games Library" } }
}
</script>

<style>
:root {
  --star-size: 60px;
  --star-color: #fff;
  --star-background: #fc0;
}

.Stars {
  --percent: calc(var(--rating) / 5 * 100%);
  display: inline-block;
  font-size: var(--star-size);
  font-family: Times;
  line-height: 1;
}
.Stars::before {
  content: '★★★★★';
  letter-spacing: 3px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>