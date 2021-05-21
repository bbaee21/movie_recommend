<template>
  <div>
    <div v-for="(review, idx) in reviews" :key="idx">
      <MovieReviewItem :review="review" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieReviewItem from '@/components/MovieReviewItem'
export default {
  name: 'ReviewList',
  props: {
    reviews: [Array, Object],
    movie: Object
  },
  components: {
    MovieReviewItem
  }
}
</script>

<style>

</style>