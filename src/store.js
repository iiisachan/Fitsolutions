import { createStore } from 'vuex'

const mutations = {
    addNewWeight(state, weight) {
      state.currentWeight = weight
      console.log(state.currentWeight)
    },
    addNewWeight2(state, weight) {
      state.goalWeight = weight
      console.log(state.goalWeight)
    }
  },
  state = {
    goalWeight: 0,
    currentWeight: 0,
    newWeight: 0
  }

export default createStore({ mutations, state, strict: true })
