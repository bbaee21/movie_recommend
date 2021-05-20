<template>
  <div class="detail">
    <h1>Movie Detail</h1>
    <!-- <div>{{this.$store.state.catList }}</div> -->
    {{ movie }}
    
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

}
</script>

<style>

</style>