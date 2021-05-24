import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    movieList: [],
    reviews: [],
  },
  getters: {
    getCard(state) {
      return state.movieList
    },
  },
  mutations: {
    ADD_MOVIE: function (state, movie) {
      state.movieList.push(movie)
    },
    CREATE_REVIEW: function (state, review) {
      state.reviews.push(review)
    }
  },
  actions: {
    addCatImg: function (context) {
      const SERVER_URL = process.env.VUE_APP_SERVER_URL
      const MOVIE_API = `${SERVER_URL}/movies/?format=json`
      axios.get(MOVIE_API)
        .then(res => {
          context.commit('ADD_MOVIE', res.data)
        })
      },
    createReview: function (context, review) {
      context.commit('CREATE_REVIEW', review)
    }

  },
  modules: {
  }
})
