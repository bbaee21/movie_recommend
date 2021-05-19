<template>
  <div>
    <div class="col-mb-4">
      <div class="card">
        <img class="img-fluid" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>