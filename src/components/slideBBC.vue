<template>
  <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://img.freepik.com/fotos-premium/uma-limusine-preta-com-a-palavra-chrysler-ao-lado_670382-11575.jpg"
          class="d-block w-100" height="500" alt="Big Black Car" />
        <div class="carousel-caption d-none d-md-block">
          <p>As Mais Excelentes Limousines do Mercado!</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://img.freepik.com/fotos-premium/vip-pessoas-chegando-limusine-no-fundo-do-sol-conceito-de-transporte-de-viagem-sucesso-nos-negocios-luxo-elegante-generative-ai_155807-13763.jpg?w=996"
          class="d-block w-100" height="500" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <p>Melhor Conforto Para sua Viagem!</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://img.freepik.com/fotos-premium/limusine-no-tapete-vermelho-generative-ai_220873-22378.jpg"
          class="d-block w-100" height="500" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <p>Luxúria e Riqueza!</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Qwitcher+Grypen:wght@700&display=swap');

body {
  min-height: 100vh;
  background-image: url('https://d3rbj9hv9lsqcr.cloudfront.net/ai/lpm7y069fiakjkjnwku92ks3an7p_watermark.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

p {
  font-family: 'Oswald', sans-serif;
  font-size: 50px;
}

#carousel {
  max-width: 100%;
}

.carousel-item img {
  height: 650px;
  border: 20px;
  border-color: black;
  border-style: groove;
}

.carousel-caption p {
  font-family: 'Qwitcher Grypen', cursive;
  font-size: 55px;
}
</style>
