import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    catList: [],
    reviews: [],
  },
  getters: {
    getCard(state) {
      return state.catList
    },
  },
  mutations: {
    ADD_CAT_IMG: function (state, cat) {
      state.catList.push(cat)
    },
    CREATE_REVIEW: function (state, review) {
      state.reviews.push(review)
    }
  },
  actions: {
    addCatImg: function (context) {
      const SERVER_URL = process.env.VUE_APP_SERVER_URL
      const CAT_API = `${SERVER_URL}/movies/?format=json`
      axios.get(CAT_API)
        .then(res => {
          context.commit('ADD_CAT_IMG', res.data)
        })
      },
    createReview: function (context, review) {
      context.commit('CREATE_REVIEW', review)
    }

  },
  modules: {
  }
})
