import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCLHYy95bdLQRpvuLKJrSRyridfSsedRC4",
    authDomain: "videogamesusers.firebaseapp.com",
    databaseURL: "https://videogamesusers.firebaseio.com",
    projectId: "videogamesusers",
    storageBucket: "videogamesusers.appspot.com",
    messagingSenderId: "635174532046",
    appId: "1:635174532046:web:13e915dbfb1a538efa319f",
    measurementId: "G-T43FEWWK90"
};


export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();