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
        checkSelected: null,
        checkOptions: ['Övningar', 'Lägg till egen'],
        set: 1,
        weight: [],
        reps: [],
        show: false
      }
    },
    computed: {},
    methods: {
      onSubmit() {
        for (let i = 0; i < this.set; i++) {
          this.form.sets.push({ weight: this.weight[i], reps: this.weight[i] })
        }

        console.log(JSON.stringify(this.form))
        this.onReset()
      },
      onReset() {
        this.form.date = `${new Date().toLocaleDateString()}`
        this.form.workout = null
        this.form.sets = []
        this.checkSelected = null
        this.set = 1
        this.weight = []
        this.reps = []
        this.show = false
      },
      hide() {
        this.show = !this.show
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

  <div class="add-container" @click="hide" v-if="show === false">
    <font-awesome-icon class="logg-icon" icon="fa-solid fa-plus" />
    <p class="logg-titel">Lägg till aktivitet</p>
  </div>

  <b-form
    class="log-form"
    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
    v-if="show === true"
  >
    <!-- WORKOUT TYPE -->
    <b-form-group label="Workout type">
      <b-form-radio-group
        v-model="checkSelected"
        :options="checkOptions"
        buttons
        button-variant="outline-secondary"
      />
    </b-form-group>
    <!-- AKTIVITET -->
    <b-form-group label="Aktivitet" v-if="checkSelected !== null">
      <b-form-select
        id="workout"
        v-model="form.workout"
        v-if="checkSelected === 'Övningar'"
      >
        <!-- ÖVNINGAR -->
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
      <!-- LÄGG TILL EGEN -->
      <b-form-input
        v-if="checkSelected === 'Lägg till egen'"
        v-model="form.workout"
      />
      <!-- SETS -->
      <b-form-group label="Sets:" label-for="sets">
        <!-- <label for="sets">Sets: </label> -->
        <b-form-spin-button size="sm" id="sets" v-model="set" />
      </b-form-group>
      <b-form-group
        class="sets"
        v-for="(x, index) in set"
        :key="x"
        :label="`Set ${x}:`"
      >
        <!-- SET INPUT -->
        <b-form-input
          class="set-input"
          placeholder="Vikt"
          v-model="weight[index]"
        />
        <b-form-input
          class="set-input"
          placeholder="Reps"
          v-model="reps[index]"
        />
      </b-form-group>
      <!-- DATE -->
      <b-form-group label="Datum" label-for="date">
        <b-form-input
          type="date"
          id="date"
          v-model="form.date"
          :max="`${new Date().toLocaleDateString()}`"
        />
      </b-form-group>
    </b-form-group>

    <div class="btn-container" v-if="checkSelected !== null">
      <b-button pill type="submit" variant="success"> Spara </b-button>
      <b-button pill type="reset" variant="outline-dark"> Avbryt </b-button>
    </div>
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
    cursor: pointer;
  }
  .logg-icon {
    height: 20px;
  }

  .logg-titel {
    font-weight: 600;
    font-size: 20px;
    margin: 0 10px;
  }

  .log-form {
    margin: 2rem auto;
    max-width: 300px;
  }

  /* .log-form input,
  #sets,
  .log-form select,
  .log-form label {
    max-width: 300px;
    margin: 10px auto;
  } */

  #sets {
    height: 38px;
  }
  .set-input {
    margin-bottom: 10px;
  }

  .btn-container {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .btn-container .btn {
    min-width: 100px;
  }
</style>
