<template>
  <div>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active" data-bs-interval="10000">
          <div class="d-flex justify-content-between" v-if="this.age==='어린이'">
            <RecommendCard v-for="(movie, idx) in movieList1"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else-if="this.gender==='남성'">
            <RecommendCard v-for="(movie, idx) in movieList4"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else>
            <RecommendCard v-for="(movie, idx) in movieList7"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="carousel-caption d-none d-md-block">
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="10000">
          <div class="d-flex justify-content-between" v-if="this.age==='어린이'">
            <RecommendCard v-for="(movie, idx) in movieList2"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else-if="this.gender==='남성'">
            <RecommendCard v-for="(movie, idx) in movieList5"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else>
            <RecommendCard v-for="(movie, idx) in movieList8"
              :key="idx"
              :movie="movie"
            />
          </div>

          <div class="carousel-caption d-none d-md-block">
          </div>

        </div>

        <div class="carousel-item" data-bs-interval="10000">
          <div class="d-flex justify-content-between" v-if="this.age==='어린이'">
            <RecommendCard v-for="(movie, idx) in movieList3"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else-if="this.gender==='남성'">
            <RecommendCard v-for="(movie, idx) in movieList6"
              :key="idx"
              :movie="movie"
            />
          </div>
          <div class="d-flex justify-content-between" v-else>
            <RecommendCard v-for="(movie, idx) in movieList9"
              :key="idx"
              :movie="movie"
            />
          </div>

          <div class="carousel-caption d-none d-md-block">
          </div>

        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import RecommendCard from '@/components/movies/RecommendCard'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Recommend',
  data() {
    return {
      movies: [],
      movieList1: null,
      movieList2: null,
      movieList3: null,
      movieList4: null,
      movieList5: null,
      movieList6: null,
      movieList7: null,
      movieList8: null,
      movieList9: null,
    }
  },

  props: {
    gender: String,
    age: String,
    },

  components: {
    RecommendCard,
  },
  created: function () {
    // vuex로 data 저장
    this.$store.dispatch('addCatImg')
    // router data 저장
    axios.get(`${SERVER_URL}/movies/?format=json`)
      .then((res) => {
        this.movies = res.data
        // 전체 리스트 결정
        // 청소년 영화 추천
        this.movieList1 = [
          this.movies[97], this.movies[94], this.movies[37], this.movies[32]
        ]
        this.movieList2 = [
          this.movies[54], this.movies[58], this.movies[77], this.movies[78]
        ]
        this.movieList3 = [
          this.movies[10], this.movies[55], this.movies[9], this.movies[10]
        ]
        // 어른 남자 추천
        this.movieList4 = [
          this.movies[28], this.movies[58], this.movies[97], this.movies[76]
        ]
        this.movieList5 = [
          this.movies[69], this.movies[21], this.movies[29], this.movies[18]
        ]
        this.movieList6 = [
          this.movies[42], this.movies[3], this.movies[86], this.movies[63]
        ]

        // 어른 여자 추천
        this.movieList7 = [
          this.movies[10], this.movies[54], this.movies[97], this.movies[77]
        ]
        this.movieList8 = [
          this.movies[69], this.movies[68], this.movies[60], this.movies[53]
        ]
        this.movieList9 = [
          this.movies[37], this.movies[3], this.movies[44], this.movies[63]
        ]




      })
      .catch((error) => {
        console.error(error)
      })


  }
}
</script>

<style>

</style>