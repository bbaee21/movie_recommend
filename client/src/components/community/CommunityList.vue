<template>
  <div class="py-5">
    <ul>
      <dl v-for="(community, idx) in communities" :key="idx">
        <div>
          <span class="fs-2 py-1" @click="CommunityDetail(community)">게시글 번호 : {{ community.id }}</span>
        </div>
        <div class="py-1">
          <span class="fs-1 py-1" @click="CommunityDetail(community)">제목 : {{ community.title }}</span>
        </div>
        <div>
          <span class="fs-3 py-3" @click="CommunityDetail(community)">내용 : {{ community.content }}</span>
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
