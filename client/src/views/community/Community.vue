<template>
  <div class="container">
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
      const token = localStorage.getItem('jwt')
      const config ={
        Authorization: `JWT ${token}`, 
      }
      return config
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