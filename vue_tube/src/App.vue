<template>
  <div id="app">

    <TheSearchBar @send-query="requestSearch"/>
    <VideoDetail :selected-video="selectedVideo"/>
    <VideoList 
      :videos="videos"
      @send-video="getVideo"
    />

  </div>
</template>

<script>
  import axios from 'axios'

  import TheSearchBar from '@/components/TheSearchBar'
  import VideoDetail from '@/components/VideoDetail'
  import VideoList from '@/components/VideoList'

  const API_URL = 'https://www.googleapis.com/youtube/v3/search'
  const API_KEY = process.env.VUE_APP_YOTUBE_API_KEY

export default {
  name: 'App',
  components: {
    TheSearchBar,
    VideoDetail,
    VideoList,
  },
  data: function () {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  methods: {
    requestSearch: function (search) {
      console.log(API_KEY)
      console.log(search)

      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          q: search,
          type: 'video',
        }
      })

      .then(response => {
        this.videos = response.data.items
      })

      .catch(error => {
        console.log(error);
      })
    },
    getVideo: function (video)  {
      this.selectedVideo = video

    }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
