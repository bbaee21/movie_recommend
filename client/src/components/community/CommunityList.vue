<template>
  <div>
    <ul>
      <dl v-for="(community, idx) in communities" :key="idx">
        <div>
          <span @click="CommunityDetail">제목 : {{ community.title }}</span>
        </div>
        <div>
          <span @click="CommunityDetail">내용 : {{ community.content }}</span>
        </div>
      </dl>
    </ul>
  </div>
</template>

<script>


export default {
  name: 'CommunityList',
  props: {
    communities: Array
  },
  methods: {
    CommunityDetail(community) {
      this.$router.push({name: 'CommunityDetail', params: {community_id: `${community.id}`} })
    },
  },
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
