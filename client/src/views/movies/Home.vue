<template>
  <div class="home">
    <!-- 돌아가면서 10개정도 play cliplink뒷부분 숫자만 수정 -->
    <iframe 
        src="https://play-tv.kakao.com/embed/player/cliplink/383717655?service=daum_movie&amp;autoplay=1&amp;mute=1&amp;profile=HIGH&amp;start=5&amp;width=1280&amp;height=100%"
        allow="autoplay; fullscreen; encrypted-media" 
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
        <h3 class="screen_out">영화 검색</h3>
        <div class="justify-content-center moviesearch_wrap" data-tiara-layer="service"> 
          
          <form action="" class="" role="search">
              <fieldset class="fld_sch">
                  <div class="box_search">
                      <input type="text" class="tf_keyword" name="q" title="검색어 입력" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" placeholder="영화, 인물 검색" value="">
                      <button type="button" class="btn_search" data-tiara-layer="search" data-tiara-copy="내부검색">
                          <span class="ico_movie ico_search">검색</span>
                      </button>
                  </div>
              </fieldset>
          </form>
        </div>

      </div>
      
      <!-- 전체 인기순 슬라이드 -->
      <h3 class="text-start">
        <span>전체 인기</span>
        영화순위
      </h3>
      <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-interval="false">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="d-flex">
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex">
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-flex">
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
              <div class="card" style="width: 18rem;">
                <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="card-img-top" alt="...">
                <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- 성별 추천 인기순 슬라이드 -->
      <h3 class="text-start">
        <span>남자</span>
        인기 영화순위
      </h3>
      <!-- <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mblogthumb-phinf.pstatic.net/20140813_263/lego15992_1407927930429ySLoS_GIF/10.gif?type=w2" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> -->


      <!-- 전체 카드 -->
      <div class="row row-cols-1 row-cols-md-3">
        <MovieCard v-for="(movie, idx) in movies" 
          :key="idx"
          :movie="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Home',
  data() {
    return {
      movies: [],
    }
  },
  components: {
    MovieCard,
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