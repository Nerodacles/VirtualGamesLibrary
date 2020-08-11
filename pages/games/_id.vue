<template>
  <div class="text-white">
    <div class="hero bg-gray-600" :style="`background:url(${backgroundImage}); background-size:cover`">
      <div class="container mx-auto flex flex-col md:flex-row items-end pb-4" style="height:250px">
        <div class="w-full md:w-1/4"></div>
        <div class="w-full md:w-3/4 md:ml-12">
          <h1 class="font-heading">{{ games.name }}</h1>
          <div v-if="(!!games.publishers) && (games.publishers != [])">{{ games.publishers[0].name }}</div>
        </div>
      </div>
    </div>
    <div class="container mx-auto flex flex-col md:flex-row ">
      <div class="w-full md:w-1/4 -mt-16">
        <img :src="games.background_image " alt="cover" class="mb-8" v-if="!!games.background_image">

        <div class="mb-4" v-if="!!games.platforms">
          <span class="font-semibold">Platforms:</span>
          <span v-for="platform in games.platforms" :key="platform.platform.id" class="">{{ platform.platform.name }}, </span>
        </div>

        <div class="mb-2" v-if="!!games.genres">
          <span class="font-semibold">Genres:</span>
          <span v-for="genres in games.genres" :key="genres.id" >{{ genres.name }}, </span>
        </div>

        <div class="mb-2" v-if="!!games.esrb_rating">
          <span class="font-semibold">ESRB Rating:</span>
          <span>{{ games.esrb_rating.name }}</span>
        </div>

        <div class="mb-4" v-if="!!games.released">
          <span class="font-semibold">Released:</span>
          <span>{{ games.released }}</span>
        </div>

        <div class="mb-6">
          <a :href="getOfficialWebsite">Official Website</a>
        </div>

        <div class="mb-6" v-if="!!games.rating">
          <div class="Stars" :style="`--rating: ${games.rating};`"></div>
          <div class="font-semibold">Overall Rating</div>
        </div>

        <div class="mb-6" v-if="!!games.stores">
          <span>Stores:</span>
            <div v-for="store in games.stores" :key="store.id">
              <div class="hover:text-gray-600">
                <a :href="store.url">{{ store.store.name }}</a>
              </div>
            </div>
        </div>

        <div class="mb-6" v-if="!!games.reddit_url">
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
        <p class="font-semibold" v-if="!!games.clip">Trailer:</p>
        <div class="flex flex-wrap items-center justify-center" v-if="!!games.clip">
          <Media :kind="'video'" :controls="true" :src="games.clip.clip"> </Media>
        </div>

        <div class="py-10 px-2">
          <div>
            <div>
              <div class="rounded bg-juanma shadow-sm p-8 mb-4">
                <div class="mb-4">
                  <h1>Comments</h1>
                </div>
                <div class="py-2">
                  <input type="text" v-model="comm.asunto" placeholder="Add a title" class="text-black px-5 rounded leading-normal py-1">
                </div>
                <textarea placeholder="Add a comment" v-model="comm.coment" class="text-black rounded leading-normal resize-none w-full h-15 py-2 px-3"></textarea>
                <div class="mt-3">
                  <button class="border border-blue-300 bg-green-600 text-white hover:bg-green-400 hover:text-black py-2 px-4 rounded tracking-wide mr-1" v-on:click="AgregarComentarios()">Save</button>
                  <button class="border border-blue-300 bg-red-600 text-white hover:bg-red-400 hover:text-black py-2 px-4 rounded tracking-wide ml-1" v-on:click="Cancelar()">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap bg-juanma rounded shadow-sm p-5 mb-3" v-for="comments in comentarios" :key="comments.id_user" v-if="comments.id_game == games.id && comments.deleted == false"> 
            <div>
              <div>
                <p class="text-xl font-semibold">{{comments.asunto}}</p>
              </div>
              <div class="flex justify-between mb-1">
                <p class="text-white leading-normal text-base">{{comments.comentario}}</p>
              </div>
              <div class="text-grey-dark leading-normal text-xs">
                <p>{{comments.author.id_user}} <span class="mx-1 text-xs">&bull;</span> {{comments.fecha}}</p>
              </div>
            </div>
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
import Swal from 'sweetalert2'

import 'vue-material/dist/theme/default-dark.css'

export default {
  components: {
    Media,
  },

  // aqui se guardaran las screenshots en un array
  data: () => ({ screen: [], comentarios: [], comm: { asunto: null, coment: null } }),
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

  methods:{
    AgregarComentarios(){
      var indice = this.GetIndex
      var games_id = this.games.id
      var com_asunto = this.comm.asunto
      var com_comentario = this.comm.coment
      if (!!this.comm.asunto && !!this.comm.coment){
        if(!!firebase.auth().currentUser){
          firebase.auth().onAuthStateChanged(function(user) {
            firebase.database().ref('comentarios/'+indice).set({
              id: indice,
              id_game: games_id,
              edited: false,
              deleted: false,
              asunto: com_asunto,
              comentario: com_comentario,
              fecha: new Date().toLocaleString(),
              author: { id_user: firebase.auth().currentUser.email }
            })
          })
        }
        Swal.fire({background: 'Black',timer:3000 ,Outlinecolor:'white',type: 'success',title: "You need to be logged in to comment",textcolor: 'white',text:'Login or Register for coment',icon:'error'})
      }
      this.comm.asunto = null
      this.comm.coment = null
      this.refrescarDatabase()
    },

    Cancelar(){
      this.comm.asunto = null
      this.comm.coment = null
    },

    refrescarDatabase(){
      const messageRef = firebase.database().ref('comentarios')
      axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
    }
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

.bg-juanma {
  background-color: rgb(66, 66, 66)
}

.text-juanma{
  color:rgb(66, 66, 66)
}
</style>