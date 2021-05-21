<template>
  <div class="detail">
    <h1>Movie Detail</h1>
    <!-- <div>{{this.$store.state.catList }}</div> -->
    <hr>
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img class="img-fluid" id="movie_poster_detail" :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="detail_title">
              <h3 class="card-title">{{ movie.title }}</h3>
            </div>
            <div class="detail_content">
              <dl>
                <dt>개봉일</dt>
                <dd>{{ movie.release_date }}</dd>
              </dl>
              <dl>
                <dt>장르</dt>
                <dd>{{ movie.genre_ids }}</dd>
              </dl>
              <p>평점 : {{ movie.vote_average }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <div class="tabmenu" role="tablist">
      <ul>
        <dl>주요정보</dl>
        <dl>출연/제작</dl>
        <dl>영상/포토</dl>
        <dl>평점</dl>
      </ul>
      <hr>
    </div>
    <MovieReview :movie="movie"/>
  </div>
</template>

<script>
// import axios from 'axios';

// const SERVER_URL = process.env.VUE_APP_SERVER_URL
import MovieReview from '@/components/MovieReview'

export default {
  name: 'Detail',
  props: {
    movie: {
      type: Object,
    },
  },
  data() {
    return {
      reviews: [],
    }
  },
  components: {
    MovieReview,
  }
}
</script>

<style>
#movie_poster_detail{
  border: 0px; /* Gray border */
  border-radius: 4px;  /* Rounded border */
  padding: 5px; /* Some padding */
  width: 150px; /* Set a small width */
}
</style>