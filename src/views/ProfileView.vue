<script>
  import axios from 'axios'

  export default {
    components: {},

    data() {
      return {
        quotes: []
      }
    },
    mounted() {
      axios
        .get('https://type.fit/api/quotes')
        .then((response) => {
          this.quotes = response.data
          console.log(this.quotes)
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
    }
  }
</script>

<template>
  <h1>This is Profile Site</h1>
  <p v-for="quote in quotes" :key="quote.id">{{ quote.text }}</p>
</template>
