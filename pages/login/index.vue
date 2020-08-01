<template>
    <modal name="coño">
        <div class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-black " style=" border: 10px solid white; margin-top: 140px;background-color: Black;">
            <div class="mb-4 justify-between">
                <img
                style="float: right;"
                src="~/static/logo.png"
                alt=""
                width="125"
                height="125" />
        
                <label class="block text-white text-sm font-bold mb-2" for="username"> Username</label>
                <input class="shadow appearance-none border rounded w-50 py-2 px-3 text-grey-darker" style="width: 500px;" id="username" v-model="input.username" type="text" placeholder="Username">
                <label class="block text-white text-sm font-bold mb-2" for="password"> Password </label>
                <input class="shadow appearance-none border border-red rounded w-50 py-2 px-3 text-grey-darker mb-3"  style="width: 500px;" id="password" v-model="input.password" type="password" placeholder="******************">
                <p class="text-white text-xs italic">Please choose a password.</p>
            </div>

            <div class="flex items-center ">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"  type="button" v-on:click="login()"  style=" border: 5px solid #CCCCCC;"> Login </button>
                <label class="block text-white text-sm font-bold mb-0" style="margin-left:10px;" for="password"> You do not have an account?
                <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="/Registro"> Sign up. </a> </label>
                <a class="inline-block align-baseline font-bold mb-0 text-sm text-blue hover:text-blue-darker" style="margin-left:815px;" href="#"> Forgot Password? </a>
            </div>
        </div>
    </modal>
</template>

<script>
    import VueCookies from 'vue-cookies'
    import axios from 'axios'

    import firebase from '~/components/firebase.js'

    export default {
        name: "Login",
        data() {
            return {
                input: {
                    username: "admin@admin.com",
                    password: "123456"
                }
            }
        },
        methods: {
            login() {
                
                firebase.auth().signInWithEmailAndPassword(this.input.username, this.input.password)
                .then((user) => location="/" ,(error) => alert("The username and / or password is incorrect"))
                VueCookies.set(this.input.username)
                } 
            },
        }


</script>

<style scoped>
    #login {
        width: 500px;
        border: 10px solid #CCCCCC;
        background-color: #FFFFff;
        margin: auto;
        margin-top: 200px;
        padding: 10px;
    }
</style>