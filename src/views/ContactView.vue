<template>
  <div class="container contact-page">
    <b-row>
      <b-col md="6">
        <b-card class="contact-form">
          <h2>Kontakta oss</h2>
          <b-form @submit.prevent="isFormValid">
            <b-form-group label="Förnamn">
              <b-form-input v-model="firstName" />
            </b-form-group>
            <b-form-group label="Efteramn">
              <b-form-input v-model="lastName" />
            </b-form-group>
            <b-form-group label="Email">
              <b-form-input v-model="email" />
            </b-form-group>
            <b-form-group label="Meddelande">
              <b-form-textarea v-model="message" rows="10" />
            </b-form-group>
            <b-button variant="success">Skicka</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="opening-times">
          <h2>Öppettider</h2>
          <p>Måndag - Fredag: 07:00 - 21:00</p>
          <p>Lördag - Söndag: 08:00 - 18:00</p>
          <div class="phone">
            <h2>Telefon</h2>
            <p>031-12 34 56</p>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      }
    }
  }
</script>

<style>
  .opening-times {
    text-align: center;
    height: 100%;
    padding-top: 25%;
  }

  .opening-times p {
    margin-top: 20px;
  }

  .phone {
    margin-top: 40px;
  }
</style>
