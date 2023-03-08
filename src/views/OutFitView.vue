<template>
  <div>
    <h1>Träningskläder</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-image-container">
          <img
            :src="'./public/' + product.img"
            :alt="product.kategori"
            class="product-img"
          />
        </div>
        <div class="product-info">
          <h3>{{ product.produkt }}</h3>
          <p>{{ product.färg }}</p>
          <p>{{ product.pris }} kr</p>
          <button @click="addToCart(product)">Lägg till i varukorgen</button>
        </div>
      </li>
    </ul>
    <div class="cart-container">
      <h2>Kundvagn</h2>
      <ul class="cart-items">
        <li v-for="item in cartItems" :key="item.id">
          {{ item.produkt }} - {{ item.pris }} kr
          <button @click="removeFromCart(item)">Ta bort</button>
        </li>
      </ul>
      <p>Totalt: {{ total }} kr</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        products: []
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
    }
  }
</script>
<style>
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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

  h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 0.9rem;
    color: #999;
  }

  @media (min-width: 600px) {
    .product-list {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }

  @media (min-width: 900px) {
    .product-list {
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
</style>
