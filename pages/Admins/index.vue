
<template class="bg-jm">
  <div class="container mx-auto py-5 px-1 bg-jm">
    <div class="bg-juanma rounded shadow-sm p-5 mb-3" v-for="comments in comentarios" :key="comments.id_user">
      <div>
        <div>
          <p class="text-xl font-semibold" v-if="comments.deleted == false">{{comments.asunto}}</p>
          <p class="text-xl font-semibold" v-if="comments.deleted == true">{{comments.asunto}} - Deleted</p>
        </div>
        <div class="flex justify-between mb-1">
          <p class="text-white leading-normal text-base">{{comments.comentario}}</p>
        </div>
        <div class="text-grey-dark leading-normal text-xs">
          <p>{{comments.author.id_user}} <span class="mx-1 text-xs">&bull;</span> {{comments.fecha}}</p>
        </div>
        <div class="py-2">
          <button class="py-2 px-1 mr-2" style="float: left;" v-on:click="state=true, id = comments.id" v-if="state==false"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            width="24" height="24"
            viewBox="0 0 172 172"
            style=" fill:#000000;"> <title>Edit</title>
            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M131.96744,14.33333c-1.83467,0 -3.66956,0.70211 -5.06706,2.09961l-14.33333,14.33333l-10.13411,10.13411l-80.93294,80.93294v28.66667h28.66667l105.40039,-105.40039c2.80217,-2.80217 2.80217,-7.33911 0,-10.13412l-18.53255,-18.53255c-1.3975,-1.3975 -3.23239,-2.09961 -5.06706,-2.09961zM131.96744,31.63411l8.39844,8.39844l-9.26628,9.26628l-8.39844,-8.39844zM112.56706,51.03451l8.39844,8.39844l-76.73372,76.73372h-8.39844v-8.39844z"></path></g></g></svg>
          </button>
          <button class="py-2 px-1" v-on:click="borrar(comments.id)" v-if="state==false">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="24" height="24"
              viewBox="0 0 172 172"
              style=" fill:#000000;"> <title>Delete</title>
              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M71.66667,14.33333l-7.16667,7.16667h-35.83333v14.33333h7.16667v107.5c0,7.83362 6.49972,14.33333 14.33333,14.33333h71.66667c7.83362,0 14.33333,-6.49972 14.33333,-14.33333v-107.5h7.16667v-14.33333h-14.33333h-21.5l-7.16667,-7.16667zM50.16667,35.83333h71.66667v107.5h-71.66667zM69.56706,59.43294l-10.13411,10.13411l16.43295,16.43294l-16.43295,16.43294l10.13411,10.13411l16.43294,-16.43294l16.43294,16.43294l10.13411,-10.13411l-16.43294,-16.43294l16.43294,-16.43294l-10.13411,-10.13411l-16.43294,16.43295z"></path></g></g></svg>
          </button>
        </div>
        <div class="flex flex-wrap mx-5 rounded bg-juanma shadow-sm p-1 mb-4" v-if="state == true && comments.id == id">
          <div class="mb-2">
            <h1>Edit the comment</h1>
          </div>
          <div class="container">
            <div class="py-2 w-full">
              <input type="text" v-model="newAsunto" placeholder="Add a title" class="text-black px-3 rounded leading-normal py-1 w-1/4">
            </div>
            <div>
              <textarea placeholder="Add a comment" v-model="newComentario" class="text-black rounded leading-normal resize-none h-15 w-full py-2 px-3"></textarea>
            </div>
          </div>
          <div class="mt-3">
            <button class="py-2 px-4" v-on:click="Editar(comments.id, newAsunto, newComentario)">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="36" height="36"
                viewBox="0 0 172 172"
                style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M26.875,26.875v118.25h62.30591c6.4154,15.71402 21.86858,26.875 39.81909,26.875c23.65,0 43,-19.35 43,-43c0,-17.95051 -11.16098,-33.40369 -26.875,-39.81909v-37.65649l-24.64942,-24.64941h-2.22558h-64.5zM37.625,37.625h16.125v32.25h64.5v-30.02441l16.125,16.125v30.40234c-1.76606,-0.22332 -3.55086,-0.37793 -5.375,-0.37793h-80.625v48.375h-10.75zM64.5,37.625h21.5v10.75h10.75v-10.75h10.75v21.5h-43zM59.125,96.75h41.57227c-8.9801,7.89595 -14.69727,19.42535 -14.69727,32.25c0,1.82414 0.15461,3.60894 0.37793,5.375h-27.25293zM129,96.75c17.7375,0 32.25,14.5125 32.25,32.25c0,17.7375 -14.5125,32.25 -32.25,32.25c-17.7375,0 -32.25,-14.5125 -32.25,-32.25c0,-17.7375 14.5125,-32.25 32.25,-32.25zM145.125,114.4917l-17.7417,17.7312l-12.3562,-12.3562l-7.5271,7.5166l19.8833,19.8938l25.2688,-25.2688z"></path></g></g></svg>
            </button>
            <button class="py-2 px-4" v-on:click="state=false, id=null, newAsunto=null, newComentario=null">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="24" height="24"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ff0000"><path d="M86,0c-47.42317,0 -86,38.57683 -86,86c0,47.42318 38.57683,86 86,86c47.42318,0 86,-38.57682 86,-86c0,-47.42317 -38.57682,-86 -86,-86zM86,14.33333c39.66862,0 71.66667,31.99805 71.66667,71.66667c0,17.18881 -6.10286,32.92188 -16.125,45.23958l-100.78125,-100.78125c12.31771,-10.02213 28.05078,-16.125 45.23958,-16.125zM30.45833,40.76042l100.78125,100.78125c-12.31771,10.02214 -28.05078,16.125 -45.23958,16.125c-39.66862,0 -71.66667,-31.99805 -71.66667,-71.66667c0,-17.1888 6.10287,-32.92187 16.125,-45.23958z"></path></g></g></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/components/firebase.js'
import axios from 'axios'

export default {
  data: () => ({ newAsunto:null, newComentario:null, id: null ,state: false, screen: [], comentarios: [] }),

  mounted(){
    const messageRef = firebase.database().ref('comentarios')
    axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
    firebase.auth().onAuthStateChanged(function(user) {
      if (user){
        if (firebase.auth().currentUser.email!="admin@admin.com") { location="/" }
      } else { location="/" }
    });
  },

  methods: {
    borrar(a){
      firebase.database().ref('comentarios/'+a).update({ deleted: true })
      this.refrescarDatabase()
    },
    refrescarDatabase(){
      const messageRef = firebase.database().ref('comentarios')
      axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
    },
    Editar(id,newAsunto,newComentario){
      if(!!newAsunto && !!newComentario){
        this.state=false
        firebase.database().ref('comentarios/'+id).update({ asunto: newAsunto, comentario: newComentario, edited: true })
        this.newComentario = null, this.newAsunto = null
        this.refrescarDatabase()
      } else {
        
      }
    },
  }
}
</script>

<style>
.bg-juanma {
  background-color: rgb(66, 66, 66)
}

.bg-jm {
  background-color: rgb(29, 29, 29)
}

.text-juanma{
  color:rgb(66, 66, 66)
}
</style>
