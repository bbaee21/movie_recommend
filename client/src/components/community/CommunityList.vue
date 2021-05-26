<template>
  <div>
    <ul>
      <dl v-for="(community, idx) in communities" :key="idx">
        <div>
          <span @click="CommunityDetail(community)">제목 : {{ community.title }}</span>
        </div>
        <div>
          <span @click="CommunityDetail(community)">내용 : {{ community.content }}</span>
        </div>
      </dl>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'CommunityList',
  props: {
    communities: [Array, Object]
  },
  methods: {
    CommunityDetail(community) {
      this.$router.push({name: 'CommunityDetail', params: { community_id: `${community.id}`} })
    },
  },
}
</script>

<style scoped>

</style>
