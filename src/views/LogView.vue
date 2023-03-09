<!-- $store.state.workout.ben[1].name // Barbell Squat -->
<!--  Object.keys($store.state.workout)[1] // chest -->
<!-- Object.keys($store.state.workout) // [ "ben", "chest", "rygg", "arm", "mage" ] -->

<script>
  export default {
    data() {
      return {
        form: {
          date: `${new Date().toLocaleDateString()}`,
          workout: null,
          sets: []
        },
        checkSelected: '',
        checkOptions: ['Övningar', 'Lägg till egen'],
        set: 1,
        weight: [],
        reps: []
      }
    },
    computed: {},
    methods: {
      onSubmit() {
        for (let i = 0; i < this.set; i++) {
          this.form.sets.push({ weight: this.weight[i], reps: this.weight[i] })
        }

        console.log(JSON.stringify(this.form))
        // this.onReset()
      },
      onReset() {
        this.form.date = `${new Date().toLocaleDateString()}`
        this.form.muscle = null
        this.form.workout = null
      }
    }
  }
</script>

<template>
  <!-- <font-awesome-icon icon="fa-solid fa-plus" />
  <font-awesome-icon icon="fa-regular fa-heart" />
  <font-awesome-icon icon="fa-solid fa-heart" />
  <font-awesome-icon icon="fa-solid fa-heart-pulse" />
  <font-awesome-icon icon="fa-solid fa-dumbbell" />
  <font-awesome-icon icon="fa-solid fa-person-running" /> -->

  <h1 class="title">Träningsdagbok</h1>

  <div class="add-container">
    <font-awesome-icon class="logg-icon" icon="fa-solid fa-plus" />
    <p class="logg-titel">Lägg till aktivitet</p>
  </div>

  <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
    <b-form-group label="Datum" label-for="date">
      <b-form-input
        type="date"
        id="date"
        v-model="form.date"
        :max="`${new Date().toLocaleDateString()}`"
      />
    </b-form-group>

    <b-form-group label="Workout type" label-for="workoutType">
      <b-form-radio-group
        v-model="checkSelected"
        :options="checkOptions"
        buttons
      />
      {{ checkSelected }}
    </b-form-group>

    <b-form-group
      label="Aktivitet"
      label-for="workout"
      v-if="checkSelected === 'Övningar'"
    >
      <b-form-select id="workout" v-model="form.workout">
        <optgroup
          v-for="(value, key) in $store.state.workout"
          :key="key"
          :label="key"
        >
          <option v-for="item in value" :key="item.name">
            {{ item.name }}
          </option>
        </optgroup>
      </b-form-select>
    </b-form-group>

    <b-form-group lablel="Aktivitet" v-if="checkSelected === 'Lägg till egen'">
      <b-form-input v-model="form.workout" />
    </b-form-group>

    <b-form-group>
      <b-form-group label="Sets:">
        <b-form-spin-button inline id="sets" v-model="set" />
      </b-form-group>
      <b-form-group v-for="(x, index) in set" :key="x" :label="`Set ${x}`">
        <b-form-input placeholder="Vikt" v-model="weight[index]" />
        <b-form-input placeholder="Reps" v-model="reps[index]" required />
      </b-form-group>
    </b-form-group>
    <b-button type="submit"> Spara </b-button>
    <b-button type="reset"> Avbryt </b-button>
  </b-form>
</template>

<style>
  .add-container {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 1rem 2rem;
  }
  .logg-icon {
    height: 20px;
  }

  .logg-titel {
    font-weight: 600;
    font-size: 20px;
    margin: 0 10px;
  }
</style>
