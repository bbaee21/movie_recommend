<template>
  <div>
    <ul>
    <VideoListItem v-for="video in videos" 
      :video="video"
      :key="video.etag"
      @send-video="sendVideo"
      />
    </ul>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    sendVideo: function (video) {
      this.$emit('send-video', video)
    }
  }
}
</script>

<style>

</style>