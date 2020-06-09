<template>
  <div class="font-sans text-black antialiased">
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/navigation'
import axios from 'axios'

axios.defaults.headers.common['user-key'] = 'a5f7eb5b40fb4a9fb1ac2bb57b4a0284'
axios.defaults.headers.common['X-Requested-With'] = 'XML_HttpRequest'

export default {
  components: {
    Navigation
  }
}
</script>
