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
      <div class="body-content">
        <img src="assets/person-jumping.jpg" alt="Person uses jumping rope" />
        <div class="paragraphs">
          <p>
            Med FitSolutions behöver du inte oroa dig för att hitta ett gym som
            passar dig eller träningsprogram igen! Vi erbjuder dig möjligheten
            att hitta gym i din närhet och det medföljer även recensioner,
            vägbeskrivning och ett betyg på ditt valda gym.
          </p>
          <p>
            Eftersom att vi alla har olika mål med vår träning hjälper vi dig
            att hitta den perfekta övningen för den specifika muskelgruppen och
            därmed hjälper dig att uppnå de mål som du själv har satt upp.
          </p>
          <p>
            Applikationen innehåller även en rad olika träningsprogram som
            matchar alla nivåer från nybörjare till elitidrottare.
          </p>
          <p>
            Du kan även enkelt skapa en profil som låter dig logga dina framsteg
            utan ansträngning. Detta möjliggör att du kan hålla koll på din
            träning och få en översikt av dina framsteg.
          </p>
          <p>
            Vi erbjuder även en rad olika klipp för den valda övningen för en
            specifik muskelgrupp, vilket gör att du kan lära dig nya övningar
            och eventuellt förbättra din nuvarande teknik.
          </p>
          <p>
            Sist men inte minst, erbjuder vi dig att spåra din vikt och
            framgånger under din resas gång och sedan dela med dig utav detta
            med dina vänner vilket gör att du håller dig motiverad!
          </p>
          <p>Ta första steget idag!</p>
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

  .header-image,
  .body-content img {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 60px;
    margin-bottom: 60px;
    width: 100%;
    min-height: 300px;
    max-height: 700px;
  }

  .body-content img {
    border: 3px solid black;
  }

  .header-image img {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    border-radius: 20px;
    border: 3px solid black;
  }

  .body-content {
    line-height: 1.8;
    font-size: 24px;
  }

  .paragraphs {
    background-color: lightgray;
    width: 100%;
    margin: 0;
    padding: 60px 20%;
  }

  .paragraphs p {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1099px) {
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
