<template>
    <nav class="flex items-center justify-between flex-wrap bg-black p-3">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">Virtual Games</span>
        </div>
        <div class="block lg:hidden text-white">
            <button class="flex items-center px-3 py-2 border rounded hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20">
                <title class="text-white">Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="/" class="block text-white mt-4 lg:inline-block lg:mt-0 mr-4">Home</a>
                <a href="/about" class="block text-white mt-4 lg:inline-block lg:mt-0">About</a>
            </div>
            <div>
                <a href="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Login</a>
            </div>
        </div>
    </nav>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'

export default {
  components: {
    VueMaterial
  }
}
</script>