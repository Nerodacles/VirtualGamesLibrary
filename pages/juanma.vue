<template>

</template>

<script>
import axios from 'axios'
import firebase from '~/components/firebase.js'

export default {
    data: () => ({
        comentarios: [],
    }),

    computed: {
    GetIndex() { return this.comentarios.length }
    },

    mounted(){
        const messageRef = firebase.database().ref('comentarios')
        axios(messageRef.toString() + '.json').then(res => { this.comentarios = res.data })
    },
}
</script>