<!-- <a href="https://www.flaticon.com/free-icons/muscle" title="muscle icons">Muscle icons created by Anggre Tionanda - Flaticon</a> -->
<!-- <a href="https://www.flaticon.com/free-icons/random" title="random icons">Random icons created by KP Arts - Flaticon</a> -->

<script>
  export default {
    methods: {
      randomMuscle() {
        const randomIndex = Math.floor(Math.random() * this.muscles.length)
        this.$router.push(`/workout/${this.muscles[randomIndex]}`)
      }
    },
    computed: {
      muscles() {
        return Object.keys(this.$store.state.workout)
      }
    }
  }
</script>

<!-- TO DO: fixa hover och grid gap på desktop -->

<template>
  <h1 class="title">Muskelgrupper</h1>
  <div class="card-container">
    <b-card
      title="Random"
      img-src="../../assets/shuffle.png"
      img-alt="back logo"
      img-top
      class="muscle-card"
      @click="randomMuscle"
    />
    <b-card
      title="Rygg"
      img-src="../../assets/back.png"
      img-alt="back logo"
      img-top
      tag="RouterLink"
      to="/workout/rygg"
      class="muscle-card"
    />
    <b-card
      title="Arm"
      img-src="../../assets/biceps2.png"
      img-alt="biceps logo"
      img-top
      tag="RouterLink"
      to="/workout/arm"
      class="muscle-card"
    />
    <b-card
      title="Bröst"
      img-src="../../assets/chest.png"
      img-alt="chest logo"
      img-top
      tag="RouterLink"
      to="/workout/chest"
      class="muscle-card"
    />
    <b-card
      title="Ben"
      img-src="../../assets/quadricep2.png"
      img-alt="ben logo"
      img-top
      tag="RouterLink"
      to="/workout/ben"
      class="muscle-card"
    />
    <b-card
      title="Mage"
      img-src="../../assets/upper-body.png"
      img-alt="upper-body logo"
      img-top
      tag="RouterLink"
      to="/workout/mage"
      class="muscle-card"
    />
  </div>
</template>

<style>
  .card-container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 20px;
    justify-content: center;
    justify-items: center;
    margin: 3rem 20px;
  }

  .muscle-card {
    text-decoration: none;
    color: black;
    max-width: 250px;
    border: 1px solid #d5d5d5;
  }

  .muscle-card:hover {
    cursor: pointer;
    color: #3a751c;
    text-decoration: underline;
  }

  .card-img-top {
    padding: 1rem;
    object-fit: cover;
  }

  .title {
    text-align: left;
    margin: 2rem 2rem 4rem;
  }

  @media (min-width: 950px) {
    .card-container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>
