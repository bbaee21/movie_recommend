<template>
  <div>
    <div>
      <h5 class="text-start">내용 | {{ review.content }} 평점 | {{ review.rank }}</h5>
      <p>{{ review.created_at }}</p>
    </div>
      <button @click="update" data-bs-toggle="modal" data-bs-target="#exampleModal">수정</button>
      <button @click="deleteReview(review)">삭제</button>
    <hr>

    <div v-show="show" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">리뷰 수정하기</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">내용</label>
                <input type="text" class="form-control" id="recipient-name" v-model.trim="content" :placeholder="review.content">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">평점</label>
                  <select class="form-select" aria-label="Default select example" v-model="myrate">
                  <option selected>평점</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button type="button" class="btn btn-primary" @click="updateReview(review)" data-bs-dismiss="modal">저장하기</button>
          </div>
        </div>
      </div>
    </div>


    <!-- <div class="text-start">
      <label class="form-label">댓글</label>
      <input type="text" class="form-control" v-model="comment_content" @keypress.enter="createComments">
      <hr>
    <div v-for="(comment, idx) in comments" :key="idx">
      {{ comment.content }}
    </div>

      <button @click="createComments">댓글 작성</button>
    </div> -->
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
      show: 'false',
      content: '',
      movierate: '',
      myrate: 0,
      comments: [],
      comment_content: '',
    }
  },
  methods: {
    setToken: function () {
      // 1. 저장된 jwt를 가져온다.
      const token = localStorage.getItem('jwt')
      // console.log(token)
      const config ={
        Authorization: `JWT ${token}`, 
      }
      return config
      // 2. header에다가 jwt를 넣어준다.
    },
    deleteReview() {
      axios({
        method: 'delete',
        url: `${SERVER_URL}/movies/review/${this.review.id}/`,
        headers: this.setToken()
      })
        .then((res) => {
          if (res.data.message) {
            alert("본인이 작성한 리뷰만 삭제 가능합니다.")
          }
          else {
            this.$emit('deleteReview')
          }
        })
    },
    updateReview() {
      const reviewItem = {
        content: this.content,
        rank: this.myrate,
        // movie: review.movie,
      }
      axios({
        method: 'put',
        url: `${SERVER_URL}/movies/review/${this.review.id}/`,
        data: reviewItem,
        headers: this.setToken()
      })
        .then((res) => {
          if (res.data.message) {
            alert("본인만 리뷰 수정이 가능합니다.")
          }
          else {
            this.updateClose()
            this.$emit('review-update')
          }
        })
    },
    getComments() {
      axios.get(`${SERVER_URL}/movies/${this.review.id}/comment/`)
      .then(res => {
        this.comments = res.data
      })
      .catch(err => {
        console.log(err);
      })
    },
    createComments() {
      const config = this.setToken()
      const CommentItem = {
        content: this.comment_content
      }
      if (CommentItem.content) {
        axios.post(`${SERVER_URL}/movies/${this.review.id}/comment/`, CommentItem, config)
          .then(() => {
            this.getComments()
            this.comment_content = ''
          })
      }
    },
    deleteComments() {
      const config = this.setToken()
      axios.delete(`${SERVER_URL}/movies/comment/${this.review.id}/`, config)
        .then(res => {
          if (res.data.message) {
            alert("본인만 삭제 가능")
          }
          else {
            this.getComments()
          }
        })
    },
    update() {
      this.show = true
    },
    updateClose() {
      this.show = false
    }
  },
  // created() {
  //   this.getComments()
  // }
}
</script>

<style>

</style>