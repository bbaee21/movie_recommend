<template>
  <div class="movie_review">
    <dt>
      <div class="mb-3">
        <label>리뷰 남기기</label>
      </div>

      <div>
        <label>리뷰 내용</label><br>
        <textarea class="form-control" v-model="content" @keypress.enter="createReview"></textarea>
      </div>

      <div>
        <label>평점</label>
        <select class="form-select" aria-label="Default select example" v-model="myrate">
          <option selected>별점</option>
          <option value="1">1</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <button @click="createReview">리뷰 작성하기</button>
      
    </dt>
  </div>
</template>

<script>
import axios from 'axios';

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CreateReview',
  props: {
    movie: Object
  },
  data() {
    return {
      // title: '',
      content: '',
      myrate: 0,
    }
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
    },
    createReview: function () {
      const reviewItem = {
        content: this.content,
        rank: this.myrate,
        movie: this.movie.id,
      }
      console.log(reviewItem);
      if (reviewItem.content) {
        axios.post(`${SERVER_URL}/movies/${this.movie.id}/review/`, reviewItem)
          .then(() => {
            this.$emit('review-update')
            this.content = ''
            this.myrate = ''
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  },
  // created(){
  //   this.getReviews()
  // }
}
</script>

<style>

</style>