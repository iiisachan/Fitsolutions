<script>
  export default {}
</script>

<style scoped>
  /* IMPORTS/FONTS */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

  .main-img {
    width: 100%;
    height: auto;
  }

  .log-in-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin: 2.2rem 2.2rem;
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 600;
    color: #3a751c;
  }

  .logo-quote {
    font-weight: 500;
    font-size: 30px;
  }

  .btn {
    width: 10em;
    margin: auto;
  }

  @media (max-width: 408px) {
    .log-in-container {
      flex-direction: row;
    }

    .btn-container {
      gap: 20px;
    }
  }
</style>

<template>
  <main>
    <img class="main-img" src="assets/workout-img.jpg" alt="" />

    <div class="log-in-container">
      <h1 class="logo-quote">Bli bättre varje dag, från och med idag.</h1>
      <b-button-toolbar justify class="btn-container">
        <b-button class="mx-1 btn" variant="outline-success"
          >Kom igång</b-button
        >
        <b-button class="mx-1 btn" variant="outline-success">Logga in</b-button>
      </b-button-toolbar>
    </div>
  </main>
</template>
