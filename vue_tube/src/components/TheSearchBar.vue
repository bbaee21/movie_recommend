<template>
  <div>
    <h1>My first youtube project</h1>
    <input type="text" v-model="searchData" @keydown.enter="sendQuery">

  </div>
</template>

<script>
export default {
  name: 'TheSearchBar',
  data: function () {
    return {
      searchData: '',
    }
  },
  methods: {
    sendQuery: function () {
      this.$emit('send-query', this.searchData)
    }
  }
}
</script>

<style>

</style>