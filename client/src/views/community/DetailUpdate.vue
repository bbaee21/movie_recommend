<template>
  <div>
    <h2>수정하기</h2>
    <hr>
    <div>
      <label>title</label>
    </div>
    <div class="mb-3">
      <label class="form-label"></label>
      <input type="text" class="form-control" v-model="community.title" placeholder="글 제목">
    </div>
    <div class="mb-3">
      <label class="form-label"></label>
      <textarea class="form-control" v-model="community.content" rows="3" @keypress.enter="createCommunity"></textarea>
    </div>
    <div>
      <button @click="UpdateDetail(community)">수정하기</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'DetailUpdate',
  props: {
    community_id: Number,
  },
  data: function () {
    return {
      community: [],
    }
  },
  methods: {
    setToken: function () {
      // 1. 저장된 jwt를 가져온다.
      const token = localStorage.getItem('jwt')
      const config ={
        Authorization: `JWT ${token}`, 
      }
      return config
      // 2. header에다가 jwt를 넣어준다.
    },
    getCommunity: function () {
      const config = this.setToken()

      const community_id = this.$route.params.community_id

      axios.get(`${SERVER_URL}/community/${community_id}`, config)
        .then((res) => {
          console.log(res)
          this.community = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    UpdateDetail: function (community) {
      const communityItem = {
        title: community.title,
        content: community.content
      }
        axios({
          method: 'put',
          url: `http://127.0.0.1:8000/community/community_d_u/${community.id}/`,
          data: communityItem,
          headers: this.setToken(),
        })
        .then((res) => {
          console.log(res)
          if (res.data.message) {
            alert("본인만 수정 가능")
          }
          else {
            this.$router.push({ name: 'CommunityDetail', params:  `${community.id}` })
          }
        })
    }
  },
  created() {
    this.getCommunity()
  }
}
</script>

<style>

</style>