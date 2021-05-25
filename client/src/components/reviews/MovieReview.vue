<template>
  <div>
    <CreateReview @review-update="reviewUpdate" :movie="movie"/>
    <ReviewList 
      :reviews="reviews"
      :movie="movie"
      @review-update="reviewUpdate" 
      @deleteReview="getReviews"
    />
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
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
          Authorization: `JWT ${token}`
        },
      }
      return config
    },
    getReviews() {
      const config = this.setToken()
      axios.get(`${SERVER_URL}/movies/${this.movie.id}/review/`, config)
        .then((res) => {
          this.reviews = res.data
        })
        .catch(err => {
          console.log(err);
        })
    },
    reviewUpdate() {
      this.getReviews()
    }
  },
  created() {
    this.getReviews()
  }
}
</script>

<style>

</style>