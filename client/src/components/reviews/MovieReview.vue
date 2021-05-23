<template>
  <div>
    <CreateReview :movie="movie"/>
    <ReviewList :reviews="reviews"/>
  </div>
</template>

<script>
import CreateReview from '@/components/reviews/CreateReview'
import ReviewList from '@/components/reviews/ReviewList'

import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieReview',
  props: {
    movie: Object
  },
  data() {
    return {
      reviews: [],
    }
  },
  components: {
    CreateReview,
    ReviewList,
  },
  methods: {
    getReviews() {
      axios.get(`${SERVER_URL}/movies/${this.movie.id}/review/`)
        .then(res => {
          this.reviews = res.data
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getReviews()
  }
}
</script>

<style>

</style>