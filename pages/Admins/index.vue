
<template>
  <div class="container mx-auto py-5 px-1">
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
          <button class="border border-blue-300 bg-green-600 text-white hover:bg-green-400 hover:text-black py-2 px-1 rounded tracking-wide mr-2" style="float: left;" v-on:click="state=true, id = comments.id" v-if="state==false">Editar</button>
          <button class="border border-blue-300 bg-red-600 text-white hover:bg-Red-400 hover:text-black py-2 px-1 rounded tracking-wide" v-on:click="borrar(comments.id)" v-if="state==false">Borrar</button>
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
            <button class="border border-blue-300 bg-green-600 text-white hover:bg-green-400 hover:text-black py-2 px-4 rounded tracking-wide mr-1" v-on:click="Editar(comments.id, newAsunto, newComentario)">Save</button>
            <button class="border border-blue-300 bg-red-600 text-white hover:bg-red-400 hover:text-black py-2 px-4 rounded tracking-wide ml-1" v-on:click="state=false, id=null, newAsunto=null, newComentario=null">Cancel</button>
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

.text-juanma{
  color:rgb(66, 66, 66)
}
</style>
