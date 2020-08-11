<template>
    <modal>
        <div class="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col text-black" style=" border: 10px solid white; margin-top: 140px;background-color: Black;">
            <div class="mb-4 justify-between">
                <img style="float: right;" src="~/static/logo.png" alt="" width="125" height="125" />
                <h1 class="text-white text-xl mb-5">Recover your account</h1>
        
                <label class="block text-white text-sm font-bold mb-2" for="username"> Enter your email address to recover your account.</label>
                <input class="shadow appearance-none border rounded w-50 py-2 px-3 text-grey-darker" style="width: 500px;" placeholder="Your Email" v-model="email">
                <p class="text-white text-xs italic">Please choose a Email Address.</p>
            </div>

            <div class="flex items-center ">
                <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"  type="button"  style=" border: 5px solid #CCCCCC;" v-on:click="PasswordReset()"> Send </button>
            </div>
        </div>
    </modal>
</template>

<script>
import firebase from '~/components/firebase.js'
import Swal from 'sweetalert2'

export default {
    data() {
        return {
            email: null
        }
    },
    methods: {
        PasswordReset(){
            var auth = firebase.auth();
            var emailAddress = this.email;
            if(!!emailAddress){
                auth.sendPasswordResetEmail(emailAddress).then(function() {
                    // alert("The recovery email was send succesfully.")
                    Swal.fire({background: 'Black',timer:3000 ,Outlinecolor:'white',type: 'success',title: "The recovery email was send succesfully.",textcolor: 'white', icon:'success'}) 
                    location="/"
                }).catch(function(error) {
                    // alert("This email is invalid.")
                    Swal.fire({background: 'Black',timer:3000 ,Outlinecolor:'white',type: 'success',title: "The Email is not valid",textcolor: 'white',text:'Retry',icon:'error'}) 
                });
            }
        }
    }
}
</script>