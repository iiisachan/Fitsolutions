<template>
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
</template>

<script>
  export default {}
</script>

<style>
  /* IMPORTS/FONTS */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');

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
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .card-deck {
    gap: 0;
  }

  @media (max-width: 800px) {
    .card-deck {
      gap: 20px;
    }

    .card-img-top {
      border-left: 1px solid black;
      border-top: 1px solid black;
      border-right: 1px solid black;
    }

    .card-body {
      border-left: 1px solid black;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }

    .card-group {
      align-items: center;
      flex-direction: column;
    }
  }
</style>
