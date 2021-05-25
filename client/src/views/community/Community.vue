<template>
  <div>
    <h1>Community</h1>
    <hr>
    <CreateCommunity @community-update="communityUpdate"/>
    <CommunityList :communities="communities"/>
  </div>
</template>

<script>
import CreateCommunity from '@/components/community/CreateCommunity'
import CommunityList from '@/components/community/CommunityList'

import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Community',
  data() {
    return {
      communities: [],
    }
  },
  components: {
    CommunityList,
    CreateCommunity
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
    getCommunities: function () {
      const config = this.setToken()
      axios.get(`${SERVER_URL}/community/`, config)
        .then(res => {
          this.communities = res.data
        })
        .catch(err => {
          console.log(err);
        })
    },
    communityUpdate: function () {
      this.getCommunities()
    }
  },
  created: function () {
    this.getCommunities()
  },
}
</script>

<style>

</style>