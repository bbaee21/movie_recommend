<template>
  <div>
    <div>
      <h2>게시글 작성</h2>
      <!-- <button >작성하기</button> -->
        <div class="mb-3">
          <label class="form-label"></label>
          <input type="text" class="form-control" v-model="title" placeholder="글 제목">
        </div>
        <div class="mb-3">
          <label class="form-label"></label>
          <textarea class="form-control" v-model="content" rows="3" @keypress.enter="createCommunity"></textarea>
        </div>

        <button @click="createCommunity">작성완료</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CreateCommunity',
  data() {
    return {
      title: '',
      content: '',
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
    createCommunity: function () {
      // const config = this.setToken()

      const CommunityItem = {
        title: this.title,
        content: this.content,
      }
      console.log(CommunityItem);
      if (CommunityItem.title) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/community/community_c/',
          data: CommunityItem,
          headers: this.setToken()
        })
        // axios.post(`${SERVER_URL}/community/community_c/`, CommunityItem, config) //, config
          .then(() => {
            this.$emit('community-update')
            this.title = ''
            this.content = ''
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style>

</style>