<template>
    
</template>

<script>
import axios from 'axios'
import * as firebase from '@firebase'

export default {
    data: () => ({
        vaina: null,
    }),

    async asyncData() {
            // const messageRef = this.$fireDb.ref('videogamesusers')
            // axios.get(messageRef.toString() + '.json').then( res => { this.vaina = res.data } )
            // console.log("juanma")

            firebase.database()
    },

    methods: {
        
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyCLHYy95bdLQRpvuLKJrSRyridfSsedRC4",
    authDomain: "videogamesusers.firebaseapp.com",
    databaseURL: "https://videogamesusers.firebaseio.com",
    projectId: "videogamesusers",
    storageBucket: "videogamesusers.appspot.com",
    messagingSenderId: "635174532046",
    appId: "1:635174532046:web:13e915dbfb1a538efa319f",
    measurementId: "G-T43FEWWK90"
}
// if (!firebase.apps.length) {
    // firebase.initializeApp(firebaseConfig)
// }
firebase.analytics()
</script>