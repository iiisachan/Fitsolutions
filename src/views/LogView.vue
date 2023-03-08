<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue'

  const form = reactive({
    date: `${new Date().toLocaleDateString()}`,
    name: '',
    food: null,
    checked: []
  })

  // const foods = [
  //   { text: 'Select One', value: null },
  //   'Carrots',
  //   'Beans',
  //   'Tomatoes',
  //   'Corn'
  // ]
  const show = ref(true)

  const onSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify(form))
  }

  const onReset = (event) => {
    event.preventDefault()
    // Reset our form values
    form.date = ''
    form.name = ''
    form.food = null
    form.checked = []
    // Trick to reset/clear native browser form validation state
    show.value = false
    nextTick(() => {
      show.value = true
    })
  }
</script>

<template>
  <font-awesome-icon icon="fa-solid fa-plus" />
  <font-awesome-icon icon="fa-regular fa-heart" />
  <font-awesome-icon icon="fa-solid fa-heart" />
  <font-awesome-icon icon="fa-solid fa-heart-pulse" />
  <font-awesome-icon icon="fa-solid fa-dumbbell" />
  <font-awesome-icon icon="fa-solid fa-person-running" />

  <h1 class="title">Träningsdagbok</h1>

  <div class="add-container">
    <font-awesome-icon class="logg-icon" icon="fa-solid fa-plus" />
    <p class="logg-titel">Lägg till aktivitet</p>
  </div>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group label="Datum" label-for="date">
      <b-form-input
        type="date"
        id="date"
        v-model="form.date"
        :max="`${new Date().toLocaleDateString()}`"
      />

      <!-- <input type="date" id="date" v-model="form.date" /> -->
    </b-form-group>
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
