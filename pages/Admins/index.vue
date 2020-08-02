<template>
  <div style="backgroundImage: `url(~/assets/img/bg.jpg)`">
    <span>Hola</span>
  </div>
  <!-- <form class="form-horizontal" style="background-image: url('https://i.imgur.com/sMPnsa5.jpg'); background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%;"> -->
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'
import VueCookies from 'vue-cookies'
import firebase from '~/components/firebase.js'
import axios from 'axios'

export default {
  components: {
    VueMaterial,
  },

  data: () => ({
    comentarios:'',
    indiceComent: null,
  }),
  methods: {
    comentar(){
        const messageRef = firebase.database().ref('comentarios')
        axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data, this.indiceComent = this.comentarios.length })
        var a=this.indiceComent
        console.log(a)
        firebase.auth().onAuthStateChanged(function(user) {
        firebase.database().ref('comentarios/'+2).set({
          id_coment: a,
          asunto: 'Ejemplo 4',
          comentario: 'Ejemplo 2',
          fecha:'31/07/2020',
          id_user:firebase.auth().currentUser.uid
    })
    });
  }
  }
}
</script>
