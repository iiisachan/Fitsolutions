<template>
  <div>
    <h1>Träningskläder</h1>
    <b-button
      id="kundkorg"
      pill
      variant="success"
      class="btn btn-primary"
      @click="showModal = true"
    >
      Visa varukorg ({{ cartItems.length }})
    </b-button>
    <b-modal v-model="showModal" title="Shopping cart" :hide-footer="true">
      <div class="modal-content">
        <div>
          <button type="button" class="close" @click="showModal = false">
            <span>&times;</span>
          </button>
        </div>
        <div>
          <table class="table">
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="index">
                <td>{{ item.produkt }}</td>
                <td>{{ item.pris }} kr</td>
                <td>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="removeFromCart(index)"
                  >
                    &times;
                  </button>
                </td>
              </tr>
              <tr>
                <th />
                <th>{{ total }} kr</th>
                <th />
              </tr>
            </tbody>
          </table>
        </div>

        <div class="modal-footer">
          <div v-if="cartItems.length > 0">
            <router-link to="./checkout">
              <button type="button" class="btn btn-primary">Till kassan</button>
            </router-link>
          </div>
          <div v-else>
            <button
              type="button"
              class="btn btn-secondary"
              @click="showModal = false"
            >
              Gå tillbaka
            </button>
          </div>
        </div>
      </div>
    </b-modal>

    <ul class="product-list">
      <li
        v-for="(product, index) in products"
        :key="index"
        class="product-item"
      >
        <div class="product-image-container">
          <img
            :src="'./public/' + product.img"
            :alt="product.kategori"
            class="product-img"
          />
        </div>
        <div class="product-info">
          <h3 class="h3-rubrik">{{ product.produkt }}</h3>
          <p class="p-class">{{ product.färg }}</p>
          <p class="p-class">{{ product.pris }} kr</p>
          <button class="varukorg" @click="addToCart(product)">
            Lägg till i varukorgen
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: [],
        showModal: false
      }
    },

    mounted() {
      axios
        .get('/src/OutFit.json')
        .then((response) => {
          this.products = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    methods: {
      addToCart(product) {
        this.$store.commit('addToCart', product)
        console.log(product)
      },
      removeFromCart(index) {
        this.$store.commit('removeFromCart', index)
        console.log(index)
      }
    },
    computed: {
      cartItems() {
        return this.$store.state.cart
      },
      total() {
        return this.cartItems.reduce((acc, item) => acc + item.pris, 0)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-family: 'Open Sans', sans-serif;

    font-size: 50px;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .product-item {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }

  .product-image-container {
    position: relative;
    padding-top: 100%;
  }

  .product-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-info {
    padding: 1rem;
    text-align: center;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .h3-rubrik {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .p-class {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: #999;
  }
  #kundkorg {
    font-size: 18px;
    margin-bottom: 19px;
    margin-left: 10px;
  }

  .varukorg {
    font-weight: 500;
    margin-top: 4px;
    border-radius: 8px;
    padding: 5px;
    transition-duration: 0.8s;
  }

  .varukorg:hover {
    background-color: #4caf50;
    color: white;
  }
  .modal-content {
    max-width: 1000px;
  }
  @media (min-width: 600px) {
    .product-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media (min-width: 900px) {
    .product-list {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      margin-left: 5px;
      margin-right: 5px;
      height: auto;
    }
  }
</style>
