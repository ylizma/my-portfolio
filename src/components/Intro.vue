<template>
<div>
  <div class=" rounded overflow-hidden shadow-md mx-4 px-10 py-4 my-10 h-48 bg-gray-600">

    <vue-typed-js :strings="['awesome', 'brilliant']" :loop="true">
      <h2>ⴰⵣⵓⵍ , <span class="typing"></span> company!</h2>
    </vue-typed-js>

<!-- type pausing -->
<vue-typed-js :strings="['This is text ^1000 which gets paused for 1 second', 'wow, interesting']">
  <h2 class="typing"></h2>
</vue-typed-js>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>