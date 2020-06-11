<template>
  <div class="font-sans text-black antialiased">
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/navigation'
import axios from 'axios'

export default {
  components: {
    Navigation
  }
}
</script>