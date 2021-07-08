<template>
  <div>
    <h2>게시글</h2>
    <hr>
    <div>
      <h3>제목 | {{ community.title }}</h3><br>
      <h4>내용 | {{ community.content }}</h4>
    </div>
    <br>
    <div>
      <span>작성시간 | {{ $moment(community.created_at).format('YYYY-MM-DD HH:mm:ss')  }}</span><br>
      <span>수정시간 | {{ $moment(community.updated_at).format('YYYY-MM-DD HH:mm:ss') }}</span>
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
  props: {
    community_id: Number,
  },
  data() {
    return {
      community: [],
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config ={
        Authorization: `JWT ${token}`, 
      }
      return config
    },
    getCommunity: function () {
      const config = this.setToken()

      const community_id = this.$route.params.community_id

      axios.get(`${SERVER_URL}/community/${community_id}/`, config)
        .then((res) => {
          this.community = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    deleteCommunity: function (community) {
      axios({
        method: 'delete',
        url: `${SERVER_URL}/community/community_d_u/${community.id}/`,
        headers: this.setToken()
      })
        .then((res) => {
          // console.log(res)
          if (res.data.message) {
            alert("본인만 삭제 가능")
          }
          else {
            this.$router.push({name: 'Community'})
          }
        })
    },
    ToUpdateCommunity: function (community) {
      this.$router.push({ name: 'DetailUpdate', params: { community_id: `${community.id}`}})
    },
  },
  created: function () {
    this.getCommunity()
  },
}
</script>

<style>

</style>