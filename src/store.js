import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const URL = 'https://randomuser.me/api/?results=20&nat=us'

export default new Vuex.Store({
  state: {
    adds: [],
    loading: true,
  },
  actions: {
    loadData ({commit}) {
      axios.get(URL).then((response) => {
        // console.log(response.data.results, this)
        commit('updateAddress', response.data.results)
        commit('changeLoadingState', false)
      })
    },
  },
  mutations: {
    updateAddress (state, address) {
      address.forEach((item) => {
          const location = item.location
          const obj = {
            check: false,
            city: location.city,
            street: location.street,
            coordinates: Object.assign(location.coordinates),
            sides: [
              {
                name: 'A',
                status: false,
                img: '',
                lighting: false,
              },
              {
                name: 'B',
                status: false,
                img: '',
                lighting: false,
              },
            ],
            code: item.phone,
            size: location.state,
          }
          state.adds.push(obj)
        },
      )
    },
    changeLoadingState (state, loading) {
      state.loading = loading
    },
  },
})
