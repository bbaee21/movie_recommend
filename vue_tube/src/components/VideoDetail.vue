<template>
  <div v-if="selectedVideo">
    <iframe :src="videoUrl" frameborder="0"></iframe>
    <p>{{ videoTitle }}</p>
    <p>{{ videoDesc }}</p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'VideoDetail',
  props: {
    selectedVideo: Object,
  },
  computed: {
    videoUrl: function () {
      const videoId = this.selectedVideo.id.videoId
      return `http://www.youtube.com/embed/${videoId}`
    },
    videoTitle: function () {
      
      return _.unescape(this.selectedVideo.snippet.title)
    },
    videoDesc: function () {
      return _.unescape(this.selectedVideo.snippet.description)
    },
  }
}
</script>

<style>

</style>