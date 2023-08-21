<template>
  <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carousel"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://i.pinimg.com/564x/b6/53/d3/b653d36f36d6625bf3d6e0fbbb4094d3.jpg"
          class="d-block w-100"
          height="500"
          alt="Big Black Car"
        />
        <div class="carousel-caption d-none d-md-block">
          <p>As Mais Excelentes Limousines do Mercado!</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://i.pinimg.com/originals/58/70/85/587085407059f9da8c754996c846f35a.jpg"
          class="d-block w-100"
          height="500"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <p>Melhor Conforto Para sua Viagem!</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <!-- Alterado para 5000ms -->
        <img
          src="https://www.gattilimousines.com.br/novo/wp-content/uploads/2015/06/WhatsApp-Image-20160531-14.jpg"
          class="d-block w-100"
          height="500"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

p {
  font-family: 'Oswald', sans-serif;
  font-size: 35px;
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
  font-size: 20px;
}
</style>
