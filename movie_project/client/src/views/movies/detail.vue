<template>
  <div class="detail">
    <h1>Movie Detail</h1>
    <div>{{ movie }}</div>
  </div>
</template>

<script>


export default {
  name: 'Detail',
  props: {
    movie: {
      type: Array,
    }
  },
  components: {
    MovieCard,
  },

}
</script>

<style>

</style>