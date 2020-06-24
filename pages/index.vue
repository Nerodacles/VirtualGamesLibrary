<template>
  <div class="flex h-screen">
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white" v-on:click='toggle'>
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
          <title class="">Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full md:w-1/4 p-4 text-center text-gray-700 h-full" v-if="BToggle">
      <div class="flex items-center py-2 px-2 divide-y divide-gray-400">
        <input type="number" class="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:outline-none" v-model="limite" id="limit" placeholder="Limite de resultados" min="1" max="40">
      </div>
      <div class="flex items-center py-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M45.6875,26.875l-1.67969,2.18359l-17.13281,22.84375v93.22266h118.25v-93.22266l-17.13281,-22.84375l-1.67969,-2.18359zM51.0625,37.625h69.875l8.0625,10.75h-86zM37.625,59.125h96.75v75.25h-96.75zM68.86719,69.875c-2.96045,0.27295 -5.14404,2.91846 -4.87109,5.87891c0.27295,2.96045 2.91846,5.14404 5.87891,4.87109h32.25c1.93164,0.02099 3.73731,-0.98682 4.72412,-2.66651c0.96582,-1.67969 0.96582,-3.7373 0,-5.41699c-0.98681,-1.67969 -2.79248,-2.6875 -4.72412,-2.66651h-32.25c-0.16797,0 -0.33594,0 -0.50391,0c-0.16797,0 -0.33594,0 -0.50391,0z"></path></g></g></svg>
        <button v-on:click="popularGames, platform_id = null, selected = null" class="text-white">Popular Games</button>
      </div>
      <div class="flex items-center py-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M10.75,26.875v96.75h69.875v10.75h-26.875v10.75h64.5v-10.75h-26.875v-10.75h69.875v-96.75zM21.5,37.625h129v75.25h-129zM48.375,48.375v53.75h75.25v-53.75zM59.125,59.125h53.75v32.25h-53.75z"></path></g></g></svg>
        <button v-on:click="searchPlatform(4)" class="text-white"> Popular PC Games</button>
      </div>
      <div class="flex items-center py-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M66.15385,23.15385v121.35096l26.25481,8.0625v-101.29808c0,-2.6875 0.33594,-4.65144 1.44712,-5.78846c1.11118,-1.55048 2.14483,-1.70553 3.72115,-1.03365c3.79868,1.11118 5.58173,4.54808 5.58173,10.12981v40.72596c8.5018,4.03125 16.125,4.44471 21.70673,0.20673c5.8143,-4.03125 8.88942,-11.1893 8.88942,-21.91346c0,-11.1893 -2.09315,-19.82031 -7.02885,-25.42788c-4.47055,-6.02103 -12.35216,-10.85337 -23.98077,-14.88462c-14.52283,-4.70312 -26.74579,-8.0625 -36.59135,-10.12981zM58.09135,96.54327l-5.16827,1.65385l-32.45673,11.57692l-5.58173,2.27404c-8.5018,3.56611 -13.04988,7.39063 -12.81731,10.75c0.4393,4.90986 6.04688,8.47596 16.125,11.16346c13.07572,3.51442 26.33233,4.31551 39.89904,2.27404v-13.85096l-5.16827,1.86058l-5.78846,2.27404l-9.30288,1.86058l-8.88942,-1.03365c-1.78305,-1.13702 -2.3774,-2.40324 -1.24038,-3.51442c1.11118,-0.67187 2.76503,-1.60216 4.54808,-2.27404l5.99519,-2.06731l19.84615,-7.02885zM133.34135,102.95192c-2.42908,-0.10337 -4.88401,0.10337 -7.23558,0.20673c-8.68269,0.18089 -17.59796,1.60217 -26.875,4.54808v16.33173l18.39904,-6.40865l9.50962,-3.30769c0,0 3.59195,-0.95613 6.20192,-1.65385c4.00541,-1.05949 8.26923,0.41346 8.26923,0.41346c2.45493,0.20673 3.69531,1.13702 4.13462,2.27404c0.4393,1.34375 -1.1887,2.3774 -4.54808,3.51442l-8.26923,3.30769l-33.69712,11.99038v15.91827l15.71154,-5.58173l37.83173,-13.4375l4.54808,-2.06731c8.96695,-3.35937 13.04988,-6.89964 12.61058,-11.37019c-0.23257,-4.26382 -5.32331,-7.6232 -14.26442,-10.54327c-7.54567,-2.53245 -15.06551,-3.85036 -22.32692,-4.13462z"></path></g></g></svg>
        <button v-on:click="searchPlatform(18)" class="text-white"> Popular PS4 Games</button>
      </div>
      <div class="flex items-center py-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M134.375,43v86h-28.38672l-39.87158,-59.96484v59.96484h-28.4917l0.02099,-86h28.63867l39.68262,59.96484l-0.02099,-59.96484h28.42871M145.125,32.25h-49.92871v34.95849l-19.94629,-30.12939l-3.19141,-4.8291h-45.1626v10.75l-0.02099,86v10.75h49.9917v-35.12646l20.15625,30.31836l3.19141,4.8081h44.91065z"></path></g></g></svg>
        <button v-on:click="searchPlatform(7)" class="text-white">Popular Nintendo Switch Games</button>
      </div>
      <div class="flex items-center py-2 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" 
          x="0px" y="0px"
          width="32" height="32"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,21.5c-35.56738,0 -64.5,28.93262 -64.5,64.5c0,35.56739 28.93262,64.5 64.5,64.5c35.56739,0 64.5,-28.93261 64.5,-64.5c0,-35.56738 -28.93261,-64.5 -64.5,-64.5zM86,32.25c0.50391,0 1.00781,0.14697 1.51172,0.16797c1.36474,0.04199 2.6875,0.04199 4.03125,0.16797c0.16797,0.02099 0.33594,-0.02099 0.50391,0c0.50391,0.06299 1.00781,0.10498 1.51172,0.16797c0.33594,0.04199 0.67188,0.10498 1.00781,0.16797c2.07861,0.33594 4.05224,0.77685 6.04688,1.34375c2.09961,0.58789 4.24121,1.34375 6.21484,2.18359c0.04199,0.02099 0.12598,-0.02099 0.16797,0c0.88184,0.37793 1.67969,0.92383 2.51953,1.34375c1.11279,0.5459 2.28857,1.04981 3.35938,1.67969c0.29395,0.16797 0.5669,0.33594 0.83984,0.50391c0.35693,0.12598 0.79785,0.39893 1.34375,0.83984c0.02099,0.02099 -0.02099,0.14697 0,0.16797c-8.86035,-5.10205 -28.89062,11.08594 -28.89062,11.08594c-7.93652,-6.06787 -15.13818,-10.1831 -20.49219,-11.58984c-3.48535,-0.88183 -6.13086,-0.69287 -7.89453,0c0.86084,-0.5459 1.6167,-1.19678 2.51953,-1.67969c0.06299,-0.04199 0.10498,-0.12597 0.16797,-0.16797c1.36474,-0.77685 2.77148,-1.38574 4.19922,-2.01562c0.10498,-0.04199 0.23096,-0.12597 0.33594,-0.16797c1.00781,-0.44092 1.99463,-0.81885 3.02344,-1.17578c0.92383,-0.33594 1.91065,-0.5669 2.85547,-0.83984c1.38574,-0.39893 2.77148,-0.88183 4.19922,-1.17578c0.44092,-0.08398 0.90283,-0.08398 1.34375,-0.16797c1.15479,-0.20996 2.33057,-0.37793 3.52734,-0.50391c0.16797,-0.02099 0.33594,0.02099 0.50391,0c1.80567,-0.18896 3.67432,-0.33594 5.54297,-0.33594zM118.25,46.19141c1.57471,0 3.42236,0.33594 5.03906,1.34375c0.20996,0.18896 0.48291,0.31494 0.67188,0.50391c0.29395,0.25195 0.5669,0.5249 0.83984,0.83984c0.75586,0.77685 1.49072,1.53271 2.18359,2.35156c0.14697,0.18896 0.35693,0.31494 0.50391,0.50391c0.41992,0.50391 0.77685,0.98682 1.17578,1.51172c0.65088,0.86084 1.23877,1.78467 1.84766,2.6875c0.96582,1.42773 1.86865,2.83447 2.6875,4.36719c0.77685,1.40674 1.55371,2.87646 2.18359,4.36719c0.04199,0.10498 0.12598,0.23096 0.16797,0.33594c0.16797,0.39893 0.33594,0.77685 0.50391,1.17578c0.48291,1.23877 0.94482,2.58252 1.34375,3.86328c0.5249,1.67969 0.98682,3.29639 1.34375,5.03906c0.04199,0.23096 0.12598,0.44092 0.16797,0.67188c0.62989,3.29639 0.83984,6.76074 0.83984,10.24609c0,13.01758 -4.59815,24.98535 -12.26172,34.26563c-0.44092,0.5249 -0.88183,1.00781 -1.34375,1.51172c2.56153,-13.52148 -2.1416,-23.49463 -9.74219,-35.94531c-7.93652,-12.61865 -20.49219,-25.02734 -20.49219,-25.02734c11.19092,-10.51904 20.47119,-13.92041 22.33984,-14.61328zM53.07813,46.52734c3.50635,0.23096 7.13867,1.5957 10.41406,3.69531l0.33594,0.16797c6.9917,4.19922 12.59766,10.41406 12.59766,10.41406c-6.06787,5.83692 -20.63916,23.51563 -25.53125,35.44141c-7.22266,18.22461 -3.86328,26.20313 -3.86328,26.20313c0.92383,-10.05713 15.81006,-27.81982 21.16406,-33.42578c2.79248,-3.27539 8.23047,-8.56641 12.42969,-12.76562c3.02344,-3.27539 5.54297,-5.87891 5.54297,-5.87891c1.6377,1.6377 3.29639,3.29639 4.70313,4.70313c6.76074,6.78174 11.79981,12.15674 15.28516,16.125c3.50635,3.96826 9.61621,11.44287 11.25391,13.77344c7.0127,9.97315 8.33545,16.73389 8.39844,17.13281c-0.58789,0.65088 -1.21777,1.21778 -1.84766,1.84766c-1.21777,1.21778 -2.37256,2.43555 -3.69531,3.52734c-1.32276,1.0918 -2.77148,2.05762 -4.19922,3.02344c-1.42773,0.96582 -2.83447,1.86865 -4.36719,2.6875c-1.17578,0.62989 -2.30957,1.30176 -3.52734,1.84766c-0.23096,0.10498 -0.44092,0.23096 -0.67187,0.33594c-1.46972,0.62989 -3.00244,1.17578 -4.53516,1.67969c-0.12597,0.04199 -0.20996,0.12598 -0.33594,0.16797c-1.38574,0.44092 -2.77148,0.83984 -4.19922,1.17578c-0.50391,0.12598 -0.98682,0.23096 -1.51172,0.33594c-1.02881,0.20996 -2.1416,0.18896 -3.19141,0.33594c-2.45654,0.35693 -4.99707,0.67188 -7.55859,0.67188c-1.91065,0 -3.86328,-0.14697 -5.71094,-0.33594c-3.54834,-0.37793 -6.94971,-0.98682 -10.24609,-2.01562c-0.04199,-0.02099 -0.12597,0.02099 -0.16797,0c-4.97607,-1.57471 -9.70019,-4.01026 -13.94141,-6.88672c-0.04199,-0.02099 -0.12597,0.02099 -0.16797,0c-2.81347,-1.91065 -5.33301,-4.15722 -7.72656,-6.55078c-9.70019,-9.72119 -15.62109,-23.1167 -15.62109,-37.96094c0,-14.25635 5.58496,-27.04297 14.44531,-36.61719c0,0 2.30957,-2.85547 6.04688,-2.85547z"></path></g></g></svg>
        <button v-on:click="searchPlatform(1)" class="text-white"> Popular Xbox One Games</button>
      </div>
      <div class="flex items-center py-2 px-2">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" 
            x="0px" y="0px"
            width="32" height="32"
            viewBox="0 0 172 172"
            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M72.24,10.32c-32.26344,0 -58.48,26.21656 -58.48,58.48c0,32.26344 26.21656,58.48 58.48,58.48c12.76563,0 24.56375,-4.11187 34.185,-11.0725l45.2575,45.15l9.675,-9.675l-44.72,-44.8275c8.78813,-10.23937 14.0825,-23.52906 14.0825,-38.055c0,-32.26344 -26.21656,-58.48 -58.48,-58.48zM72.24,17.2c28.54125,0 51.6,23.05875 51.6,51.6c0,28.54125 -23.05875,51.6 -51.6,51.6c-28.54125,0 -51.6,-23.05875 -51.6,-51.6c0,-28.54125 23.05875,-51.6 51.6,-51.6z"></path></g></g></svg>
        </div>
        <select v-model="selected" class="block appearance-none w-full bg-transparent text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-black focus:border-gray-500">
          <option disabled value="">Select a genre: </option>
          <option v-for="genre in genres" :key="genre.id" v-bind:value="genre.id">{{ genre.name }}</option>
        </select>
      </div>
    </div>

    <div class="w-full md:w-3/4 p-4 text-center text-gray-200 h-full">
      <div class="flex items-center border-b border-2 py-2 px-2">
        <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" v-model="keyword" id="search" placeholder="Search">
      </div>
      <div class="py-2 px-2 h-full">
        <div>
          <h1 class="font-heading uppercase mb-1 text-white" v-if="(!keyword) && (!platform_id) && (!selected)">Popular Games</h1>  
          <h1 class="font-heading uppercase mb-1 text-white" v-if="(keyword) && (!platform_id) && (!selected)">Search game {{ keyword }}</h1>
          <h1 class="font-heading uppercase mb-1 text-white" v-if="(!keyword) && (platform_id)">Popular {{ platform_name }} games</h1>
          <div v-for="genre in genres" :key="genre.id">
            <div v-if="genre.id == selected">
              <h1 class="font-heading uppercase mb-1 text-white" v-if="(!keyword) && (!platform_id) && (selected)">{{ genre.name }} games</h1>
            </div>
          </div>
        </div>
        <div>
          <div class="game-container flex flex-wrap">
            <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 py-3 px-3">
              <div class="text-white hover:text-gray-600">
                <img thumbnail fluid :src="game.background_image" alt="cover" class="md:h-20 w-full">
                <div class="font-semibold text-base overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'

export default {
  components: {
    VueMaterial,
  },

  computed: {
    getPlatforms() {
      return axios(`https://rawg-video-games-database.p.rapidapi.com/platforms?ordering=id`)
      .then(res => { this.platforms = res.data.results } )
    },
    postPlatformName() {
      return axios(`https://rawg-video-games-database.p.rapidapi.com/platforms/${this.platform_id}`)
      .then(res => { this.platform_name = res.data.name })
    }
  },

  data: () => ({
    games: [], // aqui se guardaran los juegos en un array
    platforms : [], // lista de plataformas
    keyword: null, // palabra que se buscara
    limite: null, // limite de items
    platform_id: null, // id de plataformas
    platform_name: null, // nombre de la plataforma
    BToggle: true, //
    selected: null, 
    genres: [],
    }),

  // Esto es para que cuando se cargue la pagina, automatico le lleguen datos.
  async asyncData(){ 
    const games = await axios(`https://rawg-video-games-database.p.rapidapi.com/games/lists/main?ordering=-relevance&discover=true`);
    const generos = await axios('https://rawg-video-games-database.p.rapidapi.com/genres');
    return { games: games.data.results, genres: generos.data.results }
    // return axios(`https://rawg-video-games-database.p.rapidapi.com/games/lists/main?ordering=-relevance&discover=true`)
    // .then(res => { this.games = res.data.results } )
    // .catch(err => { console.error(err) } );
    },
    
  methods: {
    searchGames() {
      axios.get("https://rawg-video-games-database.p.rapidapi.com/games?ordering=-relevance&discover=true",  // Se empleza con la llamada a la api para buscar los juegos.
        { params: { search: this.keyword, platforms: this.platform_id, genres: this.selected } })
        .then(res => { this.games = res.data.results } )
        .catch(err => { console.log(err) } )
      this.platform_name = null;
    },
    searchPlatform(id) {
      axios.get("https://rawg-video-games-database.p.rapidapi.com/games/lists/main?ordering=-relevance", // Se empleza con la llamada a la api para obtener todos los id de las plataformas
        { params: { platforms: id, page_size: this.limite, genres: this.selected } })
        .then(res => { this.games = res.data.results } )
        .catch(err => { console.log(err) } );
      this.platform_id = id;
      this.keyword =  null;
    },
    popularGames(){
      return axios(`https://rawg-video-games-database.p.rapidapi.com/games/lists/main?ordering=-relevance&discover=true`)
      .then(res => { this.games = res.data.results } )
      .catch(err => { console.error(err) } );
    },
    toggle: function(){
      this.BToggle = !this.BToggle
  }
  },

  watch: { // Esto es para que cuando cambie el valor de keyword, se busque automaticamente
    keyword(newKeyword, oldKeyword){ this.searchGames() },
    limite(newLimite, oldLimite){ this.searchPlatform() },
    selected(newSelected, oldSelected){ this.searchGames() }
  }
}
</script>