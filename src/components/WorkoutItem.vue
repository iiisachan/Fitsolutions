<!-- source: https://stackoverflow.com/questions/58369567/vue-dynamic-v-for-show-and-hide-div -->
<script>
  export default {
    methods: {},
    computed: {
      icontype() {
        return this.show ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'
      }
    },
    data() {
      return {
        show: true
      }
    },
    props: {
      items: {
        type: Object,
        required: true
      }
    }
  }
</script>

<template>
  <b-card no-body class="workout-card">
    <b-card-header header-tag="header" role="tab">
      <b-button
        block
        v-b-toggle="items.id"
        class="muscle-button"
        variant="light"
        @click="show = !show"
      >
        {{ items.name }}

        <font-awesome-icon :icon="icontype" />
      </b-button>
    </b-card-header>
    <b-collapse :id="items.id" accordion="my-accordion" role="tabpanel">
      <a :href="items.ref" target="_blank">
        <video :src="items.img" autoplay muted loop />
      </a>
    </b-collapse>
  </b-card>
</template>
