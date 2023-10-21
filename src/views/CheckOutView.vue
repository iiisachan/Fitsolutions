<template>
  <div class="container-checkout">
    <div>
      <h3 class="payment">Betalning</h3>
      <b-form class="form">
        <div>
          <b-form-group label="Kortinnehavare">
            <b-form-input
              class="inputbox"
              type="text"
              v-model="cardholdername"
              placeholder="John Doe"
            />
          </b-form-group>
          <b-form-group label="Kortnummer">
            <b-form-input
              type="number"
              class="inputbox"
              v-model="cardnumber"
              placeholder="xxxx-xxxx-xxxx"
            />
          </b-form-group>
          <div class="form-group">
            <label for="selectCard" id="SelectCard"
              >Välj kort

              <font-awesome-icon icon="fa-solid fa-credit-card" />
            </label>

            <select class="inputbox">
              <option>Visa</option>
              <option>Mastercard</option>
              <option>Klarna</option>
            </select>
          </div>
          <div class="expcvv">
            <p class="expcvv_text">Giltig till</p>
            <input type="date" class="inputbox" id="exp_date" required />

            <p class="expcvv_text2">CVV</p>
            <input
              type="password"
              class="inputbox"
              name="cvv"
              required
              id="cvv"
              max="3"
            />
          </div>
        </div>

        <b-button class="submit-btn" variant="success" @click="submitForm"
          >Genomför betalning!</b-button
        >
        <b-modal
          v-model="showModal"
          title="Tack för ditt köp!"
          :hide-footer="true"
        >
          <p>Ditt köp har genomförts. Tack för att du handlar hos oss!</p>
        </b-modal>
      </b-form>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        cardholdername: '',
        cardnumber: '',
        showModal: false
      }
    },
    methods: {
      submitForm() {
        this.showModal = true
        this.cardholdername = ''
        this.cardnumber = ''
      }
    }
  }
</script>
<style>
  .submit-btn {
    padding: 15px;
    border-radius: 50px;
    color: white;
    font-weight: 400;
    font-size: 1.2rem;
    margin: 30px auto;
    letter-spacing: 0.11rem;
    display: flex;
    justify-content: center;
  }

  .inputbox {
    border-radius: 5px;
    margin-top: 10px;
  }
  .payment {
    text-align: center;
    margin-top: 30px;
  }
  #SelectCard {
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .expcvv_text2 {
    margin-top: 15px;
    width: 40%;
  }
  .form {
    font-family: monospace;
    font-weight: bold;
  }
  #cvv {
    width: 20%;
  }
  .container-checkout {
    border: solid black 2px;
    margin-top: 10px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgb(161, 160, 169) 0%,
      rgba(148, 201, 115, 1) 11%,
      rgba(104, 204, 157, 1) 32%,
      rgba(0, 212, 255, 1) 71%
    );
  }

  @media (max-width: 400px) {
    .submit-btn {
      font-size: 1em;
      width: fit-content;
    }
  }
</style>
