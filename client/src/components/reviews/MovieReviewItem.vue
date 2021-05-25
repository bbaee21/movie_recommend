<template>
  <div>
    <div>
      <h4 class="text-start">내용 | {{ review.content }}</h4>
      <h5 class="text-start">평점 | {{ review.rank }}</h5>
    </div>
      <button>수정</button>
      <button @click="deleteReview(review)">삭제</button>
    <hr>
    <div class="text-start">
      <label class="form-label">댓글</label>
      <input type="text" class="form-control" v-model="comment_content">
      <hr>
    <div v-for="(comment, idx) in comments" :key="idx">
      {{ comment.content }}
    </div>

      <button @click="createComments">댓글 작성</button>
    </div>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL
export default {
  name: 'MovieReviewItem',
  props: {
    review: Object,
    movie: Object,
  },
  data() {
    return {
      content: '',
      movierate: '',
      myrate: 0,
      comments: [],
      comment_content: '',
    }
  },
  methods: {
    deleteReview() {
      axios.delete(`${SERVER_URL}/movies/review/${this.review.id}/`)
        .then(res => {
          if (res.data.message) {
            alert("본인이 작성한 리뷰만 삭제 가능합니다.")
          }
          else {
            this.$emit('deleteReview')
          }
        })
    },
    getComments() {
      axios.get(`${SERVER_URL}/movies/${this.review.id}/review_comments/`)
      .then(res => {
        this.comments = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    createComments() {
      const CommentItem = {
        content: this.comment_content
      }
      if (CommentItem.content) {
        axios.post(`${SERVER_URL}/movies/${this.review.id}/review_comments/`, CommentItem)
          .then(() => {
            this.getComments()
            this.comment_content = ''
          })
      }
    },
    deleteComments() {
      axios.delete(`${SERVER_URL}/movies/review_comment/${this.review.id}/`)
        .then(res => {
          if (res.data.message) {
            alert("본인만 삭제 가능")
          }
          else {
            this.getComments()
          }
        })
    }
  },
  // created() {
  //   this.getComments()
  // }
}
</script>

<style>

</style>