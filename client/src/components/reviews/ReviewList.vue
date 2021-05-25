<template>
  <div>
    <div v-for="(review, idx) in reviews" :key="idx">
      <MovieReviewItem 
        :review="review" 
        :movie="movie"
        @deleteReview="deleteReview"
        @review-update="updateReview"
      />
    </div>
  </div>
</template>

<script>
import MovieReviewItem from '@/components/reviews/MovieReviewItem'
export default {
  name: 'ReviewList',
  props: {
    reviews: [Array, Object],
    movie: Object
  },
  components: {
    MovieReviewItem
  },
  methods: {
    deleteReview() {
      this.$emit('deleteReview')
    },
    updateReview() {
      this.$emit('review-update')
    }
  }
}
</script>

<style>

</style>