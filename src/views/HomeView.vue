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
  }

  .logo-quote {
    font-weight: 500;
    font-size: 30px;
  }

  .btn {
    width: 10em;
    margin: auto;
  }
</style>

<template>
  <main>
    <img class="main-img" src="assets/workout-img.jpg" alt="" />

    <div class="log-in-container">
      <h1 class="logo-quote">Bli bättre varje dag, från och med idag.</h1>
      <b-button-toolbar justify class="btn-container">
        <b-button class="btn" squared variant="outline-success"
          >Kom igång</b-button
        >
        <b-button class="btn" squared variant="outline-success"
          >Logga in</b-button
        >
      </b-button-toolbar>
    </div>
  </main>
</template>
