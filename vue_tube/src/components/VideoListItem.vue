<template>

    <li class="item-list" @click="selectItem">
      <img :src="imgUrl" alt="">
      <span>{{ textTitle }}</span>
    </li>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  methods: {
    selectItem: function () {
      this.$emit('send-video', this.video)
    }
  },
  computed: {
    imgUrl: function () {
      return _.unescape(this.video.snippet.thumbnails.default.url)
    },

    textTitle: function () {
      return _.unescape(this.video.snippet.title)
    }

    }
  }

</script>

<style scope>
  .item-list{
    cursor: pointer;
    border: 1px solid green;
    margin: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>