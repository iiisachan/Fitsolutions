<!-- <a href="https://www.flaticon.com/free-icons/muscle" title="muscle icons">Muscle icons created by Anggre Tionanda - Flaticon</a> -->

<script>
  export default {}
</script>

<!-- TO DO: upddatera länkarna till övningarna -->
<!-- TO DO: generera random länk  -->

<template>
  <h1 class="title">Muskelgrupper</h1>
  <div class="card-container">
    <b-card
      title="Random"
      img-src="../../assets/shuffle.png"
      img-alt="back logo"
      img-top
      tag="RouterLink"
      to=""
    />
    <b-card
      title="Rygg"
      img-src="../../assets/back.png"
      img-alt="back logo"
      img-top
      tag="RouterLink"
      to=""
    />
    <b-card
      title="Arm"
      img-src="../../assets/biceps2.png"
      img-alt="biceps logo"
      img-top
      tag="RouterLink"
      to=""
    />
    <b-card
      title="Ben"
      img-src="../../assets/quadricep2.png"
      img-alt="ben logo"
      img-top
      tag="RouterLink"
      to=""
    />
    <b-card
      title="Mage"
      img-src="../../assets/upper-body.png"
      img-alt="upper-body logo"
      img-top
      tag="RouterLink"
      to=""
    />
  </div>
</template>

<style>
  .card {
    text-decoration: none;
    color: black;
    max-width: 250px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    margin: 3rem 20px;
  }

  .card-img-top {
    padding: 1rem;
  }

  .title {
    text-align: left;
    margin: 2rem 2rem 4rem;
  }

  @media (min-width: 950px) {
    .card-container {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
</style>
