<template>
  <div>
    <client-only placeholder="Loading...">
      <navigation ></navigation>  
    </client-only>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/navigation'
import axios from 'axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/theme/default-dark.css'

axios.defaults.headers.common['x-rapidapi-host'] = 'rawg-video-games-database.p.rapidapi.com'
axios.defaults.headers.common['x-rapidapi-key'] = '8a895adf10msh0d35a728b6ad2d7p1b0d63jsn0ec4375fd350'
axios.defaults.headers.common['useQueryString'] = true
axios.defaults.headers.common['SameSite'] = 'Lax'


export default { components: { Navigation, VueMaterial} }

</script>