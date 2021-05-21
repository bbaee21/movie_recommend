<template>
  <div class="home">
    <!-- <h1>Movie</h1> -->
    <div class="row row-cols-1 row-cols-md-3">
      <MovieCard v-for="(movie, idx) in movies" 
        :key="idx"
        :movie="movie"
      />
    </div>
    
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'


export default {
  name: 'Home',
  props: {
    movies: {
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