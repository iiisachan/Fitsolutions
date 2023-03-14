import { createStore } from 'vuex'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import router from './router'

const auth = getAuth()
const db = getFirestore()

const actions = {
  registerUser({ commit }, userData) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, userData.email, userData.password)
        .then((userCredential) => {
          const user = userCredential.user
          updateProfile(user, {
            displayName: userData.displayName
          }).then(() => {
            addDoc(collection(db, 'users'), {
              uid: user.uid,
              displayName: userData.displayName,
              currentWeight: userData.currentWeight,
              goalWeight: userData.goalWeight
            }).then(() => {
              const updatedUser = {
                ...user,
                currentWeight: userData.currentWeight,
                goalWeight: userData.goalWeight
              }
              commit('setUser', updatedUser)
              resolve()
              router.push('/')
            })
          })
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

const mutations = {

    setUser(state, user) {
      state.user = user

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
    },
    addToCart(state, product) {
      state.cart.push(product)
    },
    removeFromCart(state, index) {
      state.cart.splice(index, 1)

    }
  },
  state = {
    workout: {
      ben: [
        {
          name: 'Forward Lunges',
          id: 'lunge',
          img: '../../assets/lunge.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/quads/forward-lunges'
        },
        {
          name: 'Barbell Squat',
          id: 'barbell-squat',
          img: '../../assets/barbell-squat.mp4',
          ref: 'https://musclewiki.com/barbell/male/quads/barbell-squat'
        },
        {
          name: 'Barbell Curtsy Lunge',
          id: 'barbell-curtsy-lunge',
          img: '../../assets/barbell-curtsy-lunge.mp4',
          ref: 'https://musclewiki.com/barbell/male/quads/barbell-curtsy-lunge'
        },
        {
          name: 'Kettlebell Lateral Lunge',
          id: 'kettlebell-lateral-lunge',
          img: '../../assets/kettlebell-lateral-lunge.mp4',
          ref: 'https://musclewiki.com/kettlebells/female/quads/kettlebell-lateral-lunge'
        },
        {
          name: 'Kettlebell Reverse Lunge',
          id: 'kettlebell-reverse-lunge',
          img: '../../assets/kettlebell-reverse-lunge.mp4',
          ref: 'https://musclewiki.com/kettlebells/female/quads/kettlebell-reverse-lunge'
        },
        {
          name: 'Cable Standing Leg Extension',
          id: 'cable-leg-extension',
          img: '../../assets/cable-leg-extension.mp4',
          ref: 'https://musclewiki.com/cables/female/quads/cable-standing-leg-extension'
        },
        {
          name: 'Bulgarian Split Squat',
          id: 'bulgarian-split-squat',
          img: '../../assets/bulgarian-split-squat.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/quads/bulgarian-split-squat'
        },
        {
          name: 'Jump Squats',
          id: 'jump-squat',
          img: '../../assets/jump-squat.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/quads/jump-squats'
        },
        {
          name: 'Barbell Hip Thrust',
          id: 'hip-thrust',
          img: '../../assets/hip-thrust.mp4',
          ref: 'https://musclewiki.com/barbell/female/glutes/barbell-hip-thrust'
        },
        {
          name: 'Band Squat',
          id: 'band-squat',
          img: '../../assets/band-squat.mp4',
          ref: 'https://musclewiki.com/band/female/glutes/band-squat'
        }
      ],
      chest: [
        {
          name: 'Barbell Bench Press',
          id: 'bench-press',
          img: '../../assets/bench-press.mp4',
          ref: 'https://musclewiki.com/barbell/male/chest/barbell-bench-press'
        },
        {
          name: 'Dumbbell Incline Bench Press',
          id: 'dumbbell-bench-press',
          img: '../../assets/dumbbell-bench-press.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/chest/dumbbell-incline-bench-press'
        },
        {
          name: 'Dumbbell Incline Chest Flys',
          id: 'dumbbell-incline-chest',
          img: '../../assets/dumbbell-incline-chest.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/chest/dumbbell-incline-chest-flys'
        },
        {
          name: 'Cable Chest Press',
          id: 'cable-chestpress',
          img: '../../assets/cable-chestpress.mp4',
          ref: 'https://musclewiki.com/cables/male/chest/cable-chest-press'
        },
        {
          name: 'Kettlebell Chest Press',
          id: 'kettlebell-chest-press',
          img: '../../assets/kettlebell-chest-press.mp4',
          ref: 'https://musclewiki.com/kettlebells/male/chest/kettlebell-chest-press'
        },
        {
          name: 'Push Up',
          id: 'pushup',
          img: '../../assets/pushup.mp4',
          ref: 'https://musclewiki.com/bodyweight/male/chest/push-up'
        }
      ],
      rygg: [
        {
          name: 'Back Extension',
          id: 'back-extension',
          img: '../../assets/back-extension.mp4',
          ref: 'https://musclewiki.com/machine/female/lowerback/machine-45-degree-back-extension'
        },
        {
          name: 'Superman',
          id: 'superman',
          img: '../../assets/superman.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/lowerback/supermans'
        },
        {
          name: 'Barbell Deadlift',
          id: 'barbell-deadlift',
          img: '../../assets/barbell-deadlift.mp4',
          ref: 'https://musclewiki.com/barbell/male/lowerback/barbell-deadlift'
        },
        {
          name: 'Kettlebell Swing',
          id: 'kettlebell-swing',
          img: '../../assets/kettlebell-swing.mp4',
          ref: 'https://musclewiki.com/kettlebells/female/lowerback/kettlebell-swing'
        },
        {
          name: 'Machine Pulldown',
          id: 'machine-pulldown',
          img: '../../assets/machine-pulldown.mp4',
          ref: 'https://musclewiki.com/machine/male/lats/machine-pulldown'
        },
        {
          name: 'Pull Ups',
          id: 'pullup',
          img: '../../assets/pullup.mp4',
          ref: 'https://musclewiki.com/bodyweight/female/lats/pull-ups'
        },
        {
          name: 'Dumbbell Row Unilateral',
          id: 'row-unilateral',
          img: '../../assets/dumbbell-row-unilateral.mp4',
          ref: 'https://musclewiki.com/dumbbells/male/forearms/dumbbell-row-unilateral'
        },
        {
          name: 'Machine Seated Cable Row',
          id: 'cable-row',
          img: '../../assets/cable-row.mp4',
          ref: 'https://musclewiki.com/machine/female/lats/machine-seated-cable-row'
        },
        {
          name: 'Kettlebell Row',
          id: 'kettlebell-row',
          img: '../../assets/kettlebell-row.mp4',
          ref: 'https://musclewiki.com/kettlebells/male/lats/kettlebell-row'
        },
        {
          name: 'Kettlebell Shoulder Extension',
          id: 'kettlebell-shoulder-extension',
          img: '../../assets/kettlebell-shoulder-extension.mp4',
          ref: 'https://musclewiki.com/kettlebells/male/lats/kettlebell-shoulder-extension'
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

    user: null,
    error: ''
=======
    users: [],

    cart: []

  }

export default createStore({
  namespaced: true,
  actions,
  mutations,
  state,
  strict: true
})
