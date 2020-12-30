<template>
    <div class="lg:flex">
      <homeimage @hook:mounted="isLoaded = true" />
      <Intro v-show="isLoaded"  />
    </div>
</template>

<script>

import Homeimage from '@/components/HomeImage'
import Intro from '@/components/Intro'
export default {
data() {
  return {
    isLoaded : false
  }
},
components:{
Homeimage,
Intro
}
}
</script>

<style>

</style>