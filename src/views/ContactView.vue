<template>
  <div class="container contact-page">
    <b-row>
      <b-col md="6">
        <b-card class="opening-times border border-dark">
          <div class="open-details">
            <h2>Öppettider</h2>
            <p>Måndag - Fredag: 07:00 - 21:00</p>
            <p>Lördag - Söndag: 08:00 - 18:00</p>
            <div class="phone">
              <h2>Telefon</h2>
              <p>031-12 34 56</p>
            </div>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card class="contact-form border border-dark">
          <h2>Kontakta oss</h2>
          <b-form>
            <div class="fullname">
              <b-form-group label="Förnamn">
                <b-form-input v-model="firstName" />
              </b-form-group>
              <b-form-group label="Efteramn">
                <b-form-input v-model="lastName" />
              </b-form-group>
            </div>
            <b-form-group label="Email">
              <b-form-input v-model="email" />
            </b-form-group>
            <b-form-group label="Meddelande">
              <b-form-textarea v-model="message" rows="10" />
            </b-form-group>
            <b-button variant="success" @click="submitForm">Skicka</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <div v-if="formIsValid" class="valid-form">
      <h3>Tack för ditt meddelande!</h3>
    </div>
    <b-row>
      <b-col>
        <div class="error-messages" :class="{ 'has-errors': errors.length }">
          <p v-show="errors.length">
            Vänligen rätta till följande fält i formuläret:
          </p>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </div>
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
        message: '',
        errors: [],
        formIsValid: false
      }
    },
    methods: {
      submitForm() {
        if (this.isFormValid()) {
          this.formIsValid = true
          this.firstName = ''
          this.lastName = ''
          this.email = ''
          this.message = ''
        }
      },

      isFormValid() {
        this.errors = []

        if (this.firstName && this.lastName && this.email && this.message) {
          return true
        }

        if (!this.firstName) {
          this.errors.push('"Förnamn" får inte vara tomt')
        }
        if (!this.lastName) {
          this.errors.push('"Efternamn" får inte vara tomt')
        }
        if (!this.email) {
          this.errors.push('"Email" får inte vara tomt')
        } else if (!this.isEmailValid(this.email)) {
          this.errors.push('"Email" måste innehålla en giltig emailadress')
        }
        if (!this.message) {
          this.errors.push('"Meddelande" får inte vara tomt')
        }
      },
      isEmailValid(email) {
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        return emailRegex.test(email)
      }
    }
  }
</script>

<style>
  .contact-page {
    margin-top: 30px;
    margin-bottom: 80px;
  }

  .contact-form h2 {
    margin-bottom: 40px;
  }

  .opening-times {
    margin-bottom: 30px;
    height: 300px;
    text-align: center;
  }

  .opening-times p {
    margin-top: 20px;
  }

  .phone {
    margin-top: 40px;
  }

  .fullname {
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 40px;
  }

  .has-errors {
    border: 3px solid red;
  }

  .error-messages {
    margin-top: 30px;
    padding-left: 50px;
  }

  .error-messages p {
    padding-top: 10px;
    font-weight: bold;
  }

  .error-messages ul {
    padding: 0;
  }

  .valid-form {
    text-align: center;
    margin-top: 40px;
  }

  @media (min-width: 979px) {
    .contact-form,
    .opening-times {
      height: 650px;
      margin-top: 50px;
    }

    .open-details {
      margin-top: 25%;
    }
  }
</style>
