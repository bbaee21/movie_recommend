<template>
  <div>
    <input type="text" v-model.trim="title" @keyup.enter="createTodo">
    <button @click="createTodo">+</button>
  </div>
</template>

<script>
import axios from'axios'

export default {
  name: 'CreateTodo',
  data: function () {
    return {
      title: '',
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
    createTodo: function () {
      const todoItem = {
        title: this.title,
      }

      if (todoItem.title) {
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/todos/',
          data: todoItem,
          headers: this.setToken(),
        })
          .then((res) => {
            console.log(res)
            this.$router.push({ name: 'TodoList' })
          })
          .catch((err) => {
            console.log(err)
          })
        }
    },
  }
}
</script>
