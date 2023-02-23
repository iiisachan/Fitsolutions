import { createStore } from 'vuex'

const mutations = {
    addNewWeight(state, weight) {
      state.currentWeight = weight
      console.log(state.currentWeight)
    }
  },
  state = {
    goalWeight: 0,
    currentWeight: 0,
    newWeight: 0
  }

export default createStore({ mutations, state, strict: true })
