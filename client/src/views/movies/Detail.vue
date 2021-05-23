<template>
  <div class="detail container">
    <h1>Movie Detail</h1>

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
              <h5>주요정보</h5>
              <dl>
                <dt>개봉일</dt>
                <dd>{{ movie.release_date }}</dd>
              </dl>
              <dl>
                <dt>장르</dt>
                <dd>{{ movie.genre_ids }}</dd>
              </dl>
              <dl>
                <dt>평점</dt>
                <dd>{{ movie.vote_average }}</dd>
              </dl>

            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <h5 class="text-start">줄거리</h5>
    <p class="text-start">{{ movie.overview }}</p>
    <hr>


    <h5 class="text-start">영화 예고편</h5>
      <iframe :src="videoUrl" width="1280" height="640" frameborder="0"></iframe>
    <MovieReview :movie="movie" />
  </div>
</template>

<script>

  import axios from 'axios'
  import MovieReview from '@/components/reviews/MovieReview'

  export default {
    name: 'Detail',
    data() {
      return {
        reviews: [],
        video: '',
        searchData: this.movie.title + ' 예고편',
      }
    },
    props: {
      movie: {
        type: Object,
      },
    },
    components: {
      MovieReview,
    },
    computed: {
      videoUrl: function () {
        const videoId = this.video
        return `http://www.youtube.com/embed/${videoId}`
      }
    },
    methods: {
      requestSearch: function () {
        const API_URL = 'https://www.googleapis.com/youtube/v3/search'
        const API_KEY = 'AIzaSyDvCFlKmg55T9mUBdcmekPltuI4UZelI_c'
        const search = this.searchData

        axios.get(API_URL, {
          params: {
            key: API_KEY,
            part: 'snippet',
            q: search,
            type: 'video',
          }
        })

        .then(response => {
          this.video = response.data.items[0].id.videoId
        })

        .catch(error => {
          console.log(error);
        })
      },  
    },
    created: function() {
      this.requestSearch()
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