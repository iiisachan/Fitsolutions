import { createStore } from 'vuex'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { v4 as uuidv4 } from 'uuid'

const actions = {
  registerUser({ commit }, { email, password, cWeight, gWeight }) {
    // Register the user with Firebase
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const newUser = {
          uuid: uuidv4(),
          email: user.email,
          cWeight: cWeight,
          gWeight: gWeight
        }
        commit('addUser', newUser)
        commit('updateUser', newUser)
      })
      .catch((error) => {
        console.log(error.code)
        alert(error.message)
      })
  }
}
const mutations = {
    addNewWeight(state, weight) {
      state.currentWeight = weight
      console.log(state.currentWeight)
    },
    addNewWeight2(state, weight) {
      state.goalWeight = weight
      console.log(state.goalWeight)
    },
    addUser(state, payload) {
      state.users.push(payload)
    },
    updateUser(state, payload) {
      const userIndex = state.users.findIndex(
        (user) => user.email === payload.email
      )
      if (userIndex !== -1) {
        state.users[userIndex] = payload
      }
    }
  },
  state = {
    workout: {
      ben: [
        {
          name: '',
          id: '',
          img: '../../assets/.mp4',
          ref: ''
        }
      ],
      arm: [
        {
          name: 'Pull-up',
          id: 'pull-up',
          img: '../../assets/chin-up.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/biceps/chin-ups'
        },
        {
          name: 'Overhead Press',
          id: 'overhead-press',
          img: '../../assets/barbell-overhead-press.mp4',
          ref: 'https://musclewiki.com/barbell/female/shoulders/barbell-overhead-press'
        },
        {
          name: 'Triceps dips',
          id: 'triceps-dips',
          img: '../../assets/tricep-dips.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/triceps/bench-dips'
        },
        {
          name: 'Barbell Close Grip Bench Press',
          id: 'grip-bench-press',
          img: '../../assets/grip-bench-press.mp4',
          ref: 'https://musclewiki.com/barbell/male/triceps/barbell-close-grip-bench-press'
        },
        {
          name: 'Barbell Upright Row',
          id: 'upright-row',
          img: '../../assets/barbell-upright-row.mp4',
          ref: 'https://musclewiki.com/barbell/male/shoulders/barbell-upright-row'
        },
        {
          name: 'Dumbbell Row Unilateral',
          id: 'row-unilateral',
          img: '../../assets/dumbbell-row-unilateral.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/forearms/dumbbell-row-unilateral'
        },
        {
          name: 'Cable Bayesian Curl',
          id: 'bayesian-curl',
          img: '../../assets/cable-bayesian-curl.mp4',
          ref: 'https://musclewiki.com/cables/male/biceps/cable-bayesian-curl'
        },
        {
          name: 'Dumbbell Front Raise',
          id: 'dumbbell-front-raise',
          img: '../../assets/dumbbell-front-raise.mp4',
          ref: 'https://musclewiki.com/dumbbells/female/shoulders/dumbbell-front-raise'
        },
        {
          name: 'Band Pull Apart',
          id: 'band-pull-apart',
          img: '../../assets/band-pull-apart.mp4',
          ref: 'https://musclewiki.com/band/female/shoulders/band-pull-apart'
        },

        {
          name: 'Kettlebell Single Arm Curl',
          id: 'kettlebell-arm-curl',
          img: '../../assets/kettlebell-arm-curl.mp4',
          ref: 'https://musclewiki.com/kettlebells/male/biceps/kettlebell-single-arm-curl'
        }
      ],
      mage: [
        {
          name: 'Plank',
          id: 'plank',
          img: '../../assets/plank.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/abdominals/hand-plank'
        },
        {
          name: 'Hanging Knee Raises',
          id: 'hanging-knee-raises',
          img: '../../assets/hanging-knee-raises.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/abdominals/hanging-knee-raises'
        },
        {
          name: 'Crunches',
          id: 'crunch',
          img: '../../assets/crunch.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/abdominals/crunches'
        },
        {
          name: 'Russion Twist',
          id: 'russion-twist',
          img: '../../assets/russian-twist.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/abdominals/dumbbell-russian-twist'
        },
        {
          name: 'Leg Raise',
          id: 'leg-raises',
          img: '../../assets/leg-raises.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/abdominals/laying-leg-raises'
        },
        {
          name: 'Kettlebell Situp',
          id: 'kettlebell-situp',
          img: '../../assets/kettlebell-situp.mp4',
          ref: 'https://musclewiki.com/kettlebells/female/abdominals/kettlebell-situp'
        },
        {
          name: 'Hollow Hold',
          id: 'hollow-hold',
          img: '../../assets/hollow-hold.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/abdominals/hollow-hold'
        },
        {
          name: 'Mountain Climber',
          id: 'mountain-climber',
          img: '../../assets/mountain-climber.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/abdominals/mountain-climber'
        },
        {
          name: 'Suitcase Crunch',
          id: 'suitcase-crunch',
          img: '../../assets/suitcase-crunch.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/abdominals/dumbbell-suitcase-crunch'
        },
        {
          name: 'Plank IYTW',
          id: 'plank-iytw',
          img: '../../assets/plank-iytw.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/abdominals/plank-iytw'
        }
      ]
    },
    users: []
  }

export default createStore({ actions, mutations, state, strict: true })
