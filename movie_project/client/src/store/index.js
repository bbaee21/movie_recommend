import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    catList: [],
  },
  getters: {
    getCard(state) {
      return state.catList
    },
  },
  mutations: {
    ADD_CAT_IMG: function (state, cat) {
      state.catList.push(cat)
    }
  },
  actions: {
    addCatImg: function (context) {
      const CAT_API = 'https://gist.githubusercontent.com/eduChange-hphk/d9acb9fcfaa6ece53c9e8bcddd64131b/raw/9c8bc58a99e2ea77d42abd41376e5e1becabea69/movies.json'
      axios.get(CAT_API)
        .then(res => {

          context.commit('ADD_CAT_IMG', res.data)
        })
      }

  },
  modules: {
  }
})
