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
    workout: {
      ben: [
        {
          name: 'Romanian deadlift',
          img: '../../assets/romaninan-deadlift.gif'
        }
      ],
      arm: [
        {
          name: 'Pull-up',
          img: '../../assets/chin-up.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/biceps/chin-ups'
        },
        {
          name: 'test',
          img: '../../assets/chin-up.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/biceps/chin-ups'
        }
      ],
      mage: [
        {
          name: 'Standing lateral',
          img: '../../assets/standing-lateral.gif'
        }
      ]
    },
    goalWeight: 0,
    currentWeight: 0,
    newWeight: 0
  }

export default createStore({ mutations, state, strict: true })
