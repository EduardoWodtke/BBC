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
      <div class="carousel-item active" data-bs-interval="1000">
        <img src="https://exclusivalimusine.com.br/wp-content/uploads/2021/04/Limo-Cadilac-preta.jpg" class="d-block w-100" alt="Big Black Car" />
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>As melhores limousines de todos os tempos</p>
      </div>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <img src="..." class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Maior conforto para sua viagem</p>
      </div>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <img src="..." class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Colecione momentos</p>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <img src="..." class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p></p>
      </div>
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
