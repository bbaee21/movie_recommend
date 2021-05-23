<template>
  <div>
    <div class="col-mb-4">
      <div>
        <img @click='detail' class="img-fluid" id="movie_poster" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
          <h5 class="card-title">{{ movie.title }}</h5>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MovieCard',

  props: {
    movie: Object
  },
  methods: {
    detail() {
      const movie = this.movie
      // this.$emit('detail', movie)
      this.$router.push({ name: 'Detail', params: {movie} })
    }
  }
}
</script>

<style>
#movie_poster{
  border: 0px; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  width: 150px; /* Set a small width */
}

/* Add a hover effect (blue shadow) */
#movie_poster:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}
</style>