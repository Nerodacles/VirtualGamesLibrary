<template>
    <modal name="coño">
    <div id="login">
        <h1>Login</h1>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
        <Form action="" v-on:submit.prevent="aut">
        </Form>
    </div>
    </modal>
</template>

<script>
    import VueCookies from 'vue-cookies'

    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    keya: null,
                    username: "Admin",
                    password: "Admin"
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == "Admin" && this.input.password == "Admin") {
                        this.$emit("authenticated", true);
                        VueCookies.set(this.input.username,this.key,this.input.password);
                        this.$router.replace({ name: "secure" });
                        location="/";
                        
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>



<style scoped>

    #login {
        width: 500px;
        border: 10px solid #CCCCCC;
        background-color: #FFFF;
        margin: auto;
        margin-top: 200px;
        padding: 10px;
    }
</style>