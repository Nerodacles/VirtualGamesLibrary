<template>
  <nav class="flex items-center justify-between flex-wrap bg-black p-3">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span class="font-semibold text-xl tracking-tight">Virtual Games</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white" v-on:click='toggle'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="12" height="12"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M21.5,37.625v10.75h129v-10.75zM21.5,80.625v10.75h129v-10.75zM21.5,123.625v10.75h129v-10.75z"></path></g></g></svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" v-if="BToggle">
      <div class="text-sm lg:flex-grow">
        <a href="/"><p class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">Home</p></a>
        <a href="/about"><p class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500">About</p></a>
      </div>
      <div>
        <a href="/login" class="" v-if="this.cookie==0"><p class="inline-block lg:-ml-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Login</p></a>
        <a @click="Logout()" class="" v-if="this.cookie>=1"><p class="inline-block lg:-ml-20 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0">Logout</p></a>
      </div>
    </div>
  </nav>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'
import VueCookies from 'vue-cookies'


  
export default {
  components: {
    VueMaterial,
  },

  data: () => ({
    BToggle: true,
    cookie: 0
  }),
  async AsyncData(){
      alert("hola");
      if(VueCookies.isKey('Admin')==true) {
        this.cookie=1;
      }
      else if (VueCookies.isKey('Admin')==false){
        this.cookie=0;
      }
    },

  methods: {
    toggle: function(){
      this.BToggle = !this.BToggle
    },
    Logout(){
      VueCookies.remove('Admin');
      location=("/Admins");
    }
  }
}
</script>
