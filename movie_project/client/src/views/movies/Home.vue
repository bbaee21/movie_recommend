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
        color="Light">
    </iframe>

    <div class="container">
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