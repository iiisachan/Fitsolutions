<template>
  <section>
    <div class="about-container">
      <h1>Vilka är vi?</h1>
      <div class="about-wrapper">
        <div class="header-content">
          <p>
            Vi på FitSolutions har ett uppdrag och det är att hjälpa dig att nå
            upp till dina träningsmål och bidra till en hälsosam och aktiv
            livsstil. Vi har full förståelse att vi alla är olika och är på
            olika nivåer inom träningen, därför erbjuder vi ett brett utbud av
            tjänster som hjälper dig att ta det där steget och uppnå dina
            specifika mål.
          </p>
        </div>
        <div class="header-image">
          <img src="assets/about-us-first.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .about-container {
    min-width: 500px;
    min-height: 100vh;
  }

  .about-container h1 {
    text-align: center;
    margin-left: 70px;
  }

  .about-wrapper {
    margin: 20px auto;
    padding: 0 70px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
  }

  .header-content {
    padding: 60px 100px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 50vh;
  }

  .header-content p {
    font-size: 24px;
    font-weight: normal;
  }

  .header-image {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 60px 0;
    width: 100%;
    min-height: 300px;
  }
  .header-image img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    border-radius: 20px;
  }

  @media screen and (max-width: 1009px) {
    .about-container h1 {
      text-align: left;
    }
    .about-wrapper {
      flex-direction: column;
      align-items: flex-start;
    }
    .header-content,
    .header-image {
      width: 100%;
      padding: 30px 10px;
      margin-bottom: 50px;
      margin-top: 50px;
    }

    .header-image {
      justify-content: center;
      padding: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    .header-content {
      width: 60%;
      max-height: none;
    }

    .header-image {
      justify-content: flex-start;
      width: 40%;
      min-height: 400px;
    }
  }
</style>
