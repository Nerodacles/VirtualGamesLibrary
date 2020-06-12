<template>
  <div class="font-sans text-black antialiased">
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/navigation'
import axios from 'axios'

axios.defaults.headers.common['x-rapidapi-host'] = 'rawg-video-games-database.p.rapidapi.com'
axios.defaults.headers.common['x-rapidapi-key'] = '8a895adf10msh0d35a728b6ad2d7p1b0d63jsn0ec4375fd350'
axios.defaults.headers.common['useQueryString'] = true

export default {
  components: {
    Navigation
  }
}
</script>