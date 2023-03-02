<template>
  <div class="contact-page-wrapper">
    <div class="horizontal-container">
      <div class="vertical-container">
        <div class="opening-times">
          <div class="open-details">
            <h2>Öppettider</h2>
            <p>Måndag - Fredag: 07:00 - 21:00</p>
            <p>Lördag - Söndag: 08:00 - 18:00</p>
            <div class="phone">
              <h2>Telefon</h2>
              <p>031-12 34 56</p>
            </div>
          </div>
        </div>
      </div>
      <div class="vertical-container">
        <div class="contact-form">
          <h2>Kontakta oss</h2>
          <b-form>
            <div class="fullname">
              <b-form-group label="Förnamn">
                <b-form-input class="form-input" v-model="firstName" />
              </b-form-group>
              <b-form-group label="Efternamn">
                <b-form-input class="form-input" v-model="lastName" />
              </b-form-group>
            </div>
            <b-form-group label="Email">
              <b-form-input class="form-input" v-model="email" />
            </b-form-group>
            <b-form-group label="Meddelande">
              <b-form-textarea class="form-input" v-model="message" rows="10" />
            </b-form-group>
            <b-button class="submit-btn" variant="success" @click="submitForm"
              >Skicka</b-button
            >
          </b-form>
        </div>
      </div>
    </div>
    <div v-if="formIsValid" class="valid-form-msg">
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
  .contact-page-wrapper {
    margin: 0 auto;
    width: 80%;
  }

  .horizontal-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
  }

  .vertical-container {
    width: 100%;
    padding-right: 0;
    padding-left: 0;
  }

  .opening-times {
    padding: 20px 0;
    margin-bottom: 30px;
    margin-top: 50px;
    min-height: 300px;
    border: 1px solid #000;
    position: relative;
    border-radius: 10px;
    text-align: center;
  }

  .open-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .opening-times p {
    margin-top: 10px;
  }

  .contact-form {
    padding-left: 50px;
    padding-right: 50px;
    min-height: 200px;
    border: 1px solid #000;
    border-radius: 10px;
  }

  .contact-form h2 {
    margin-bottom: 30px;
    margin-top: 30px;
    text-align: center;
  }

  .form-input {
    border: 1px solid #000;
    max-width: 100%;
    box-sizing: border-box;
    min-width: 150px;
  }

  .submit-btn {
    width: 100%;
    margin: 10px 0;
  }

  .phone {
    margin-top: 30px;
  }

  .has-errors {
    border: 4px solid red;
  }

  .error-messages {
    margin-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
  }

  .error-messages p {
    padding-top: 10px;
    font-weight: bold;
  }

  .error-messages ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .valid-form-msg {
    text-align: center;
    margin-top: 30px;
  }

  @media (min-width: 375px) {
    .contact-page-wrapper {
      margin-top: 20px;
      width: 90%;
    }

    .opening-details {
      margin: 0 auto;
    }
  }

  @media (min-width: 650px) {
    .fullname {
      display: grid;
      grid-template-columns: auto auto;
      gap: 20px;
    }

    .submit-btn {
      width: 50%;
    }
  }

  @media (min-width: 767px) {
    .opening-times {
      margin-bottom: 30px;
    }
  }

  @media (min-width: 980px) {
    .horizontal-container {
      display: flex;
      flex-wrap: wrap;
    }

    .error-messages {
      width: 40%;
      margin: 40px auto;
    }
  }
</style>
