<template>
  <div>
    <h2>게시글</h2>
    <div>
      <span>작성자 | {{community.username}}</span>
      <span>작성시간 | {{ community.created_at }}</span>
      <span>수정시간 | {{ community.created_at }}</span>
    </div>
    <div>
      <span>제목 | {{ community.title }}</span>
      <span>내용 | {{ community.content }}</span>
    </div>
    <div>
      <button @click="ToUpdateCommunity(community)">수정</button>
      <button @click="deleteCommunity(community)">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CommunityDetail',
  data() {
    return {
      community: [],
      user: [],
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
    deleteCommunity: function (community) {
      const config = this.setToken()

      axios.delete(`${SERVER_URL}/community/community_d_u/${community.id}/`, config)
        .then((res) => {
          console.log(res)
          if (res.data.message) {
            alert("본인만 삭제 가능")
          }
          else {
            this.$router.push({name: 'Community'})
          }
        })
    },
    ToUpdateCommunity: function (community) {
      if (this.user.username === community.username) {
        this.$router.push({ name: 'DetailUpdate', params: `${community.id}`})
      }


    },
  },
  created: function () {
    this.getCommunity()
  },
}
</script>

<style>

</style>