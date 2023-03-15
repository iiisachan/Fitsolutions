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
        showForm: false,
        set: 1,
        weight: [],
        reps: [],
        log: []
      }
    },
    mounted() {
      if (localStorage.log !== undefined) {
        this.log = JSON.parse(localStorage.log)
      }
      window.addEventListener('logUpdate', (e) => {
        this.log = e.detail.storage
      })
    },
    methods: {
      onSubmit() {
        for (let i = 0; i < this.set; i++) {
          this.form.sets.push({
            weight: this.weight[i],
            reps: this.reps[i]
          })
        }

        let oldLog = JSON.parse(localStorage.getItem('log')) || []
        oldLog.push(this.form)

        oldLog.sort(function (a, b) {
          var c = new Date(a.date)
          var d = new Date(b.date)
          return d - c
        })
        localStorage.setItem('log', JSON.stringify(oldLog))

        window.dispatchEvent(
          new CustomEvent('logUpdate', {
            detail: { storage: JSON.parse(localStorage.getItem('log')) }
          })
        )

        console.log(JSON.stringify(oldLog))
        this.onReset()
      },
      remove(i) {
        let oldLog = JSON.parse(localStorage.getItem('log'))
        oldLog.splice(i, 1)
        localStorage.setItem('log', JSON.stringify(oldLog))

        window.dispatchEvent(
          new CustomEvent('logUpdate', {
            detail: { storage: JSON.parse(localStorage.getItem('log')) }
          })
        )
      },
      onReset() {
        this.form.date = `${new Date().toLocaleDateString()}`
        this.form.workout = null
        this.form.sets = []
        this.checkSelected = null
        this.set = 1
        this.weight = []
        this.reps = []
        this.showForm = false
      },
      hide() {
        this.showForm = !this.showForm
      }
    }
  }
</script>

<template>
  <h1 class="title">Träningsdagbok</h1>

  <div class="add-container" @click="hide">
    <font-awesome-icon class="log-icon" icon="fa-solid fa-plus" />
    <p class="log-titel">Lägg till aktivitet</p>
  </div>

  <b-form
    class="log-form"
    @submit.prevent="onSubmit"
    @reset.prevent="onReset"
    v-if="showForm === true"
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
          type="number"
          class="set-input"
          placeholder="Vikt"
          v-model="weight[index]"
        />
        <b-form-input
          type="number"
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

  <div class="log-container" v-if="log !== null">
    <!-- <div v-for="(i, index) in newDay" :key="index">
      {{ `i: ${i}: ${sortDate[i].date}` }}
      <p v-for="n in i">
        {{ n }}
      </p>
    </div> -->

    <div v-for="(value, i) in log" :key="i" class="log-item">
      <p>{{ value.date }}</p>
      <font-awesome-icon
        icon="fa-regular fa-trash-can"
        class="trash"
        @click="remove(i)"
      />
      <h4>{{ value.workout }}</h4>
      <div v-for="(item, index) in value.sets" :key="item" class="log-sets">
        <p>Set {{ index + 1 }}:</p>
        <p>{{ item.reps }} Reps</p>
        <p v-if="item.weight !== undefined">@ {{ item.weight }}kg</p>
      </div>
    </div>
  </div>
</template>

<style>
  .trash {
    color: gray;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }

  .trash:hover {
    color: #000;
  }

  .log-sets {
    display: flex;
    column-gap: 10px;
    /* align-items: center; */
  }

  .log-item {
    position: relative;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 15px;
    max-width: 300px;
    margin-bottom: 1rem;
  }

  .add-container {
    display: flex;
    align-items: center;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 1rem 2rem;
    cursor: pointer;
    max-width: 300px;
  }
  .log-icon {
    height: 20px;
  }

  .log-titel {
    font-weight: 600;
    font-size: 20px;
    margin: 0 10px;
  }

  .log-form {
    margin: 2rem;
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

  .log-container {
    margin: 2rem;
  }
</style>
