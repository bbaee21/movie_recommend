<template>
  <div class="home">
    <!-- 돌아가면서 10개정도 play cliplink뒷부분 숫자만 수정 -->
    <iframe 
        src="https://play-tv.kakao.com/embed/player/cliplink/383717655?service=daum_movie&amp;autoplay=1&amp;mute=1&amp;profile=HIGH&amp;start=5&amp;width=1280&amp;height=720"
        allow="autoplay; fullscreen" 
        allowfullscreen="" 
        width="1960px" 
        height="730px" 
        frameborder="0"
        color="Light"
        class="container">
    </iframe>

    <div class="container">
      <!-- 영화 검색 -->
      <div class="my-5 p-3">
        <h3 class="fs-1 screen_out">영화 검색</h3>
        <div class="justify-content-center moviesearch_wrap" data-tiara-layer="service"> 
          
          <form action="" class="" role="search">
              <fieldset class="">
                  <div class="">
                      <input type="text" class="tf_keyword fs-3" name="q" title="검색어 입력" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="영화 검색" value="">
                      <button type="button" class="btn_search" data-tiara-layer="search" data-tiara-copy="내부검색">
                          <span class="fs-3">검색</span>
                      </button>
                  </div>
              </fieldset>
          </form>
        </div>

      </div>
      
      <!-- 전체 인기순 슬라이드 -->
      <h3 class="py-3 text-start" v-if="this.age==='어린이'">
        <span>전체 {{ age }} 인기 영화</span>
      </h3>
      <h3 class="py-3 text-start" v-if="this.age==='성인'">
        <span>전체 {{ age }} 인기 영화</span>
      </h3>
      <h3 class="py-3 text-start" v-else>
        <span>전체 인기 영화</span>
      </h3>
      <div>
          <RecommendAll
            :age="age"
            :gender="gender"
          />
      </div>

      <!-- 성별 추천 인기순 슬라이드 -->
      <div class="my-5">
        <h3 class="d-flex my-3" v-if="this.age==='어린이'">
          <div class="text-start">
          <span>{{ gender }} 추천 영화</span>
          </div>
          <button @click="changeGender">></button>
        </h3>
        <h3 class="d-flex my-3" v-else-if="this.gender==='남성'">
          <div class="text-start">
          <span>{{ gender }} 추천 영화</span>
          </div>
          <button @click="changeGender">></button>
        </h3>
        <h3 class="d-flex my-3" v-else-if="this.gender==='여성'">
          <div class="text-start">
          <span>{{ gender }} 추천 영화</span>
          </div>
          <button @click="changeGender">></button>
        </h3>
        <h3 class="d-flex my-3" v-else>
          <div class="text-start">
          <span>추천 영화</span>
          </div>
        </h3>
        <div>
          <Recommend
            :age="age"
            :gender="gender"
          />
        </div>
      </div>


      <!-- 전체 카드 -->
      <h3> 전체 영화</h3>
      <hr>

      <div class="row row-cols-1 row-cols-md-3">
        <MovieCard v-for="(movie, idx) in movies" 
          :key="idx"
          :movie="movie"
        />
      </div>
    </div>
    <footer class="bg-light text-center text-lg-start">
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 SSAFY 박상락 - 황배근
      </div>
      <!-- Copyright -->
    </footer>
  </div>
</template>

<script>
import MovieCard from '@/components/movies/MovieCard'
import RecommendAll from '@/components/movies/RecommendAll'
import Recommend from '@/components/movies/Recommend'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Home',
  data() {
    return {
      movies: [],
      // gender: "여성",
      // age: "성인",

    }
  },
  props: {
    age: String,
    gender: String
    },
  components: {
    MovieCard,
    Recommend,
    RecommendAll,
  },
  methods: {
    changeGender() {
      if (this.gender==="남성") {
        this.gender = "여성"
      } else {
        this.gender = "남성"
      }
    },

  },
  created: function () {

    // vuex로 data 저장`
    this.$store.dispatch('addCatImg')
    // router data 저장
    axios.get(`${SERVER_URL}/movies/?format=json`)
      .then((res) => {
        // console.log(res)
        this.movies = res.data
      })
      .catch((error) => {
        console.error(error)
      })
    
  }
}
</script>

<style>

</style>