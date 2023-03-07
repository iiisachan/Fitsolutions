<template>
  <h1>Loggbok</h1>
  <div class="">
    <p>Måndag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea1"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="6"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Tisdag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea2"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="6"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Onsdag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea3"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="10"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Torsdag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea4"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="10"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Fredag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea5"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="10"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Lördag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea6"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="10"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
  <div class="">
    <p>Söndag</p>
    <b-container>
      <b-row>
        <b-form-textarea
          id="textarea7"
          v-model="text"
          placeholder="Logga dina aktiviteter..."
          rows="3"
          max-rows="10"
        >
        </b-form-textarea>
      </b-row>
    </b-container>
    <b-button variant="success">Spara</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        text: ''
      }
    }
  }
  Vue.createApp({
    data() {}
  }).mount('#app')
</script>
