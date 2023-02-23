import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    }
  },
  state = {
    counter: 0,
    workout: {
      ben: [
        {
          name: 'Romanian deadlift',
          img: '../../assets/romaninan-deadlift.gif'
        }
      ],
      arm: [
        {
          name: 'Bench dip',
          img: '../../assets/dip.gif'
        },
        {
          name: 'Push up',
          img: '../../assets/push-up.gif'
        },
        {
          name: 'Plyo side lunge',
          img: '../../assets/plyo-side-lunge.gif'
        }
      ],
      mage: [
        {
          name: 'Standing lateral',
          img: '../../assets/standing-lateral.gif'
        }
      ]
    }
  }

export default createStore({ mutations, state, strict: true })
