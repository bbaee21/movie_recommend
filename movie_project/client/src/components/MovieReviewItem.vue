<template>
  <div>
    <div>
      <h3 class="text-start">제목 {{ review.title }}</h3>
      <h4 class="text-start">내용 {{ review.content }}</h4>
    </div>
    <hr>
    <div class="text-start">
      <label class="form-label">댓글</label>
      <input type="text" class="form-control" v-model="comment_content">
    </div>
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
      // reviewtitle: '',
      content: '',
      movierate: '',
      myrate: 0,
      comments: [],
      comment_content: '',
    }
  },
  methods: {
    getComments() {
      axios.get(`${SERVER_URL}/movies/${this.review.id}/comment/`)
      .then(res => {
        this.comments = res.data
        // console.log(res);
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
        axios.post(`${SERVER_URL}/movies/${this.review.id}/comment/`, CommentItem)
          .then(() => {
            this.getComments()
            this.comment_content = ''
          })
      }
    },
  },
  // created() {
  //   this.getComments()
  // }
}
</script>

<style>

</style>