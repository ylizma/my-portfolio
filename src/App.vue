<template>
  <div id="app" class="flex flex-col h-screen justify-between bg-gray-800">
      <navbar  />
      <div class="mb-auto ">
        <Home />
      </div>
      <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Home from '@/views/Home.vue';

import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,

    Footer
  }
}
</script>


