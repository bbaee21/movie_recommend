<template>
  <div class="card" style="width: 18rem;">
    <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" class="card-img-top" width="285px" height="428px" alt="...">
    <div class="card-img-overlay">
      <!-- 평점 -->
      <h5 class="fs-3 text-start card-title text-white">{{movie.vote_average * 10}}%</h5>
    </div>
    <div class="card-body">
      <p class="fs-3 card-text">{{ movie.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    movie: Object
  },
}
</script>

<style>

</style>