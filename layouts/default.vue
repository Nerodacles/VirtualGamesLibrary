<template>
  <div>
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/navigation'
import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'
import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCLHYy95bdLQRpvuLKJrSRyridfSsedRC4",
    authDomain: "videogamesusers.firebaseapp.com",
    databaseURL: "https://videogamesusers.firebaseio.com",
    projectId: "videogamesusers",
    storageBucket: "videogamesusers.appspot.com",
    messagingSenderId: "635174532046",
    appId: "1:635174532046:web:13e915dbfb1a538efa319f",
    measurementId: "G-T43FEWWK90"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};


axios.defaults.headers.common['x-rapidapi-host'] = 'rawg-video-games-database.p.rapidapi.com'
axios.defaults.headers.common['x-rapidapi-key'] = '8a895adf10msh0d35a728b6ad2d7p1b0d63jsn0ec4375fd350'
axios.defaults.headers.common['useQueryString'] = true

export default {
  components: {
    Navigation,
    VueMaterial,
  }
}
</script>