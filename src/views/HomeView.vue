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
    font-size: 40px;
  }

  #information-text {
    font-family: 'Source Sans Pro', sans-serif;
    text-transform: uppercase;
    font-style: italic;
    font-weight: 400;
    color: #3a751c;
    display: flex;
    justify-content: center;
    margin: 1.5em;
  }

  .card-group {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 408px) {
    .btn-container {
      gap: 20px;
    }
  }

  @media (max-width: 800px) {
    .card-group {
      align-items: center;
      flex-direction: column;
    }
  }
</style>

<template>
  <main>
    <img class="main-img" src="assets/workout-img.jpg" alt="" />

    <div class="log-in-container">
      <h1 class="logo-quote">Bli bättre varje dag, från och med idag.</h1>
      <b-button-toolbar justify class="btn-container">
        <b-button to="/register" class="mx-1 btn" variant="success"
          >Kom igång</b-button
        >
        <b-button to="/login" class="mx-1 btn" variant="success"
          >Logga in</b-button
        >
      </b-button-toolbar>
    </div>
    <h2 id="information-text">Aktuellt</h2>
    <div>
      <b-card-group class="card-group" deck>
        <b-card
          title="Protein Shakes"
          img-src="assets/protein-img.jpg"
          img-alt="Protein shake that can be made in store."
          img-top
          tag="article"
          style="max-width: 20rem"
          img-height="300px"
        >
          <b-card-text>
            I kiosken kan du köpa våra extra goa protein shakes.
          </b-card-text>
        </b-card>
        <b-card
          title="Ta del av gym i närheten."
          img-src="assets/pullup-img.jpg"
          img-alt="Man that does a pullup."
          img-top
          tag="article"
          style="max-width: 20rem"
          img-height="300px"
        >
          <b-card-text>
            Hos oss kan du ta del av flera olika gym i närheten av dig. För att
            underlätta för just din träning.
          </b-card-text>
        </b-card>
        <b-card
          title="Tips & inspiration"
          img-src="assets/protein-bar.jpg"
          img-alt="Bild på en protein bar för inspiration till träningen."
          img-top
          tag="article"
          style="max-width: 20rem"
          img-height="300px"
        >
          <b-card-text>
            Hos oss kan du boka en PT & kostrådgivare för inspiration till din
            träning.
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>
  </main>
</template>
