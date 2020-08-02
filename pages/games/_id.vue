<template>
  <div class="text-white">
    <div class="hero bg-gray-600" :style="`background:url(${backgroundImage}); background-size:cover`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-4" style="height:250px">
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12">
          <h1 class="font-heading">{{ games.name }}</h1>
          <div v-if="(games.publishers != null) && (games.publishers != [])">{{ games.publishers[0].name }}</div>
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
        <p class="font-semibold">Screenshots:</p>
        <div class="flex flex-wrap -mx-4 justify-center">
          <a v-for="screenshot in screen" :key="screenshot.id" class="w-full md:w-1/4 px-4 mb-12 no-underline">
            <img :src="screenshot.image" alt="screenshot">
          </a>
        </div>
        <p class="font-semibold" v-if="games.clip != null">Trailer:</p>
        <div class="flex flex-wrap items-center justify-center" v-if="games.clip != null">
          <Media :kind="'video'" :controls="true" :src="games.clip.clip"> </Media>
        </div>

        <div class="py-10">
          <div>
            <div>
              <div class="rounded bg-gray-900 shadow-sm p-8 mb-4">
                <div class="mb-4">
                  <h2 class="text-black">Comments</h2>
                </div>
                <textarea placeholder="Add a comment" class="bg-grey-lighter rounded leading-normal resize-none w-full h-10 py-2 px-3"></textarea>
                <div class="mt-3">
                  <button class="border border-blue bg-blue text-black hover:bg-blue-dark py-2 px-4 rounded tracking-wide mr-1" @click="saveComment">Save</button>
                  <button class="border border-grey-darker text-black hover:bg-grey-dark hover:text-grey py-2 px-4 rounded tracking-wide ml-1">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="container" v-for="comments in comentarios" :key="comments.id_user">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Media from '@dongido/vue-viaudio'
import firebase from '~/components/firebase.js'
import 'vue-material/dist/theme/default-dark.css'

export default {
  components: {
    Media,
  },

  // aqui se guardaran las screenshots en un array
  data: () => ({ screen: [], comentarios: [], comm:{ asunto: null, coment: null, user: null, date: null} }),

  async asyncData({ params }) {
    const games = await axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}`);
    const screen = await axios.get(`https://rawg-video-games-database.p.rapidapi.com/games/${params.id}/screenshots`);
    return { games: games.data, screen: screen.data.results };
  },

  computed: {
    getOfficialWebsite() { return this.games.website },
    backgroundImage() { return this.games.background_image_additional },
    getDescription() { return this.games.description},
    getRedditUrl() { return this.games.reddit_url },
    GetIndex() { return this.comentarios.length }
  },

  mounted(){
    const messageRef = firebase.database().ref('comentarios')
    axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
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

body{margin-top:20px;}

.comment-wrapper .panel-body {
    max-height:650px;
    overflow:auto;
}

.comment-wrapper .media-list .media img {
    width:64px;
    height:64px;
    border:2px solid #e5e7e8;
}

.comment-wrapper .media-list .media {
    border-bottom:1px dashed #efefef;
    margin-bottom:25px;
}
</style>