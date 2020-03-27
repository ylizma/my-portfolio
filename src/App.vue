<template>
  <div id="app" class="bg-gray-800 h-screen">
      <navbar />
      <div class="flex">
      <home />
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Home from '@/components/Home.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  }
}
</script>


