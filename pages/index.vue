<template>
  <div class="flex mb-4 h-screen">
    <div class="w-full md:w-1/4 bg-gray-400 p-4 text-center text-gray-700 h-full"> 
      <input type="number" class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" v-model="limite" id="limit" placeholder="Limite de resultados">
    <!--
      Esta es la barra de la izquierda, donde se va a agregar la busqueda de plataformas. ETC
    -->
  
    </div>
    <div class="w-full md:w-3/4 bg-gray-500 p-4 text-center text-gray-200 h-full">
      <!-- 
        Esta es la barra de la derecha, que tiene el contenido de las busquedas
        y tiene el contenido de los juegos.
      -->
      <div class="flex items-center border-b border-2 border-gray-500 py-2 bg-teal-800 px-2 divide-y divide-gray-400">
      <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" v-model="keyword" id="search" placeholder="Search">
      
      </div>
      <div class="border-b border-2 border-gray-500 py-2 bg-gray-400 px-2 h-full">
        <div class="">
          <h1 class="font-heading uppercase mb-8 text-black" v-if="!keyword">Popular Games</h1>  
          <h1 class="font-heading uppercase mb-8 text-black" v-if="keyword">Search game {{ keyword }}</h1>
        </div>  
        <div class="game-container flex flex-wrap border-3 border-gray-500">
          <nuxt-link :to="'/games/' + game.id" v-for="game in games" :key="game.id" class="w-full md:w-1/5 py-3 px-3">
            <img thumbnail fluid :src="game.background_image" alt="cover" class="md:h-20 w-full">
            <div class="text-black font-semibold text-base overflow-hidden whitespace-no-wrap overflow-dots">{{ game.name }}</div>
            <!-- <div class="text-black text-base overflow-hidden whitespace-no-wrap overflow-dots">{{ game.genres[0] }}</div> --> <!-- tengo que arreglar este error --> 
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
    games: [], // aqui se guardaran los juegos en un array
    keyword: "", // palabra que se buscara
    limite: "" // limite de items
    }),

    // Esto es para que cuando se cargue la pagina, automatico le lleguen datos.
    async fetch(){ 
      return axios(`https://rawg-video-games-database.p.rapidapi.com/games`)
      .then(res => { this.games= res.data.results } )
      .catch(err => { console.error(err) } );
    },
    
  methods: {
    searchGames() {
      axios.get("https://rawg-video-games-database.p.rapidapi.com/games",  // Se empleza con la llamada a la api
        { params: { search: this.keyword, page_size: this.limite } })
        // se le mandan los datos de la busqueda a games y se guarda como un array
        .then(res => { this.games = res.data.results } )
        .catch(err => { console.log(err) } )
    }
  },

  watch: { // Esto es para que cuando cambie el valor de keyword, se busque automaticamente
    keyword(newKeyword, oldKeyword){ this.searchGames() },
    limite(newLimite, oldLimite){ this.searchGames() }
  }
}
</script>