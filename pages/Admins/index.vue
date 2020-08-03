<template>
  <div class="py-10 px-2">
    <div class="flex flex-wrap bg-juanma rounded shadow-sm p-5" v-for="comments in comentarios" :key="comments.id_user">
      <div>
        <div>
          <p class="text-xl font-semibold">{{comments.asunto}}</p>
        </div>
        <div class="flex justify-between mb-1">
          <p class="text-white leading-normal text-base">{{comments.comentario}}</p>
          <button class="border border-blue-300 bg-green-600 text-white hover:bg-green-400 hover:text-black py-2 px-100 rounded tracking-wide mr-1" style="float: right;" v-on:click="state=true">Editar</button>
          <button class="border border-blue-300 bg-red-600 text-white hover:bg-Red-400 hover:text-black py-1 px-100 rounded tracking-wide mr-1" style="float: right;" v-on:click="borrar(comments.id)">Borrar</button>
          <button v-if="editable" @click="state = 'editing'" class="ml-2 mt-1 mb-auto text-blue-600 hover:text-blue-900 text-sm">Edit</button>
        </div>
        <div class="text-grey-dark leading-normal text-xs">
          <p>{{comments.author.id_user}} <span class="mx-1 text-xs">&bull;</span> {{comments.fecha}}</p>
        </div>
        <div class="rounded bg-juanma shadow-sm p-8 mb-4" v-if="state==true">
                <div class="mb-4">
                  <h1>Edit</h1>
                </div>
                <div class="py-2">
                  <input type="text" v-model="comm.asunto" placeholder="Add a title" class="text-black px-5 rounded leading-normal py-1">
                </div>
                <textarea placeholder="Add a comment" v-model="comm.coment" class="text-black rounded leading-normal resize-none w-full h-15 py-2 px-3"></textarea>
                <div class="mt-3">
                  <button class="border border-blue-300 bg-green-600 text-white hover:bg-green-400 hover:text-black py-2 px-4 rounded tracking-wide mr-1" v-on:click="Editar()">Save</button>
                  <button class="border border-blue-300 bg-red-600 text-white hover:bg-red-400 hover:text-black py-2 px-4 rounded tracking-wide ml-1" v-on:click="Cancelar()">Cancel</button>
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
  data: () => ({
    comentarios: [],
  }),
  data: () => ({  state: false, data: {body: ''}, screen: [], comentarios: [], comm: { asunto: null, coment: null } }),

  methods: {
    
  },

  mounted(){
    const messageRef = firebase.database().ref('comentarios')
    axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
  },
  methods: {
    borrar(a){
      firebase.database().ref('comentarios/'+a).update({
        deleted: true,
      })
      this.refrescarDatabase()
    },
    refrescarDatabase(){
      const messageRef = firebase.database().ref('comentarios')
      axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
    },
    Editar(){
      this.state=false
    },
    cancelar(){

    }
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
