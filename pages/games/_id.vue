<template>
  <div class="text-white">
    <div class="hero bg-gray-600" :style="`background:url(${backgroundImage}); background-size:cover`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-4" style="height:250px">
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12">
          <h1 class="font-heading ">{{ games.name }}</h1>
          <div v-if="(games.publishers != null) && (games.publishers == [])">{{ games.publishers[0].name }}</div>
        </div>
      </div>
    </div>

     <div class="container mx-auto flex flex-col md:flex-row ">
      <div class="w-full md:w-1/4 -mt-16">
        <img :src="games.background_image " alt="cover" class="mb-8" v-if="games.background_image != null">

        <div class="mb-4" v-if="games.platforms != null">
          <span class="font-semibold">Platforms:</span>
          <span v-for="platform in games.platforms" :key="platform.platform.id" class="">{{ platform.platform.name }}, </span>
        </div>

        <div class="mb-2" v-if="games.genres != null">
          <span class="font-semibold">Genres:</span>
          <span v-for="genres in games.genres" :key="genres.id" >{{ genres.name }}, </span>
        </div>

        <div class="mb-2" v-if="games.esrb_rating != null">
          <span class="font-semibold">ESRB Rating:</span>
          <span>{{ games.esrb_rating.name }}</span>
        </div>

        <div class="mb-4" v-if="games.released =! null">
          <span class="font-semibold">Released:</span>
          <span>{{ games.released }}</span>
        </div>

        <div class="mb-6">
          <a :href="getOfficialWebsite">Official Website</a>
        </div>

        <div class="mb-6" v-if="games.rating != null">
          <div class="Stars" :style="`--rating: ${games.rating};`"></div>
          <div class="font-semibold">Overall Rating</div>
        </div>

        <div class="mb-6" v-if="games.stores != null">
          <span>Stores:</span>
            <div v-for="store in games.stores" :key="store.id">
              <div class="hover:text-gray-600">
                <a :href="store.url">{{ store.store.name }}</a>
              </div>
            </div>
        </div>

        <div class="mb-6" v-if="games.reddit_url != null">
          <a :href="getRedditUrl">Reddit</a>
        </div>

      </div>
      <div class="w-full md:w-3/4 md:ml-12 py-8 leading-normal">
        <p class="font-semibold">Description:</p>
        <span v-html="getDescription" class=""></span>
        <br>
        <p class="font-semibold ">Screenshots:</p>
        <div class="flex flex-wrap -mx-4">
          <a v-for="screenshot in screen" :key="screenshot.id" class="w-full md:w-1/4 px-4 mb-12 no-underline">
            <img :src="screenshot.image" alt="screenshot">
          </a>
        </div>
        <p class="font-semibold" v-if="games.clip != null">Trailer:</p>
        <div class="flex flex-wrap" v-if="games.clip != null">
          <Media 
            :kind="'video'"
            :controls="true"
            :src="games.clip.clip">
          </Media>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Media from '@dongido/vue-viaudio'
import VueMaterial from 'vue-material'


import 'vue-material/dist/theme/default-dark.css'

export default {
  components: {
    Media,
    VueMaterial,
  },

  // aqui se guardaran las screenshots en un array
  data: () => ({ screen: [] }),

  async asyncData({ params }) {
    const games = await axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`);
    const screen = await axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}/screenshots`);
    return { games: games.data, screen: screen.data.results };
  },

  computed: {
    getOfficialWebsite() { return this.games.website },
    backgroundImage() { return this.games.background_image_additional },
    getDescription() { return this.games.description},
    getRedditUrl() { return this.games.reddit_url }
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
  letter-spacing: 1px;
  background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>