<template>
  <div class="py-10 px-2">
    <div class="flex flex-wrap bg-juanma rounded shadow-sm p-5" v-for="comments in comentarios" :key="comments.id_user">
      <div>
        <div>
          <p class="text-xl font-semibold">{{comments.asunto}}</p>
        </div>
        <div class="flex justify-between mb-1">
          <p class="text-white leading-normal text-base">{{comments.comentario}}</p>
          <button v-if="editable" @click="state = 'editing'" class="ml-2 mt-1 mb-auto text-blue-600 hover:text-blue-900 text-sm">Edit</button>
        </div>
        <div class="text-grey-dark leading-normal text-xs">
          <p>{{comments.author.id_user}} <span class="mx-1 text-xs">&bull;</span> {{comments.fecha}}</p>
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
    state: 'default'
  }),
  methods: {
    
  },

  mounted(){
    const messageRef = firebase.database().ref('comentarios')
    axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
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
