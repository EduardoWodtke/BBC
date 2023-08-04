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
        <img
          src="https://exclusivalimusine.com.br/wp-content/uploads/2021/04/Limo-Cadilac-preta.jpg"
          class="d-block w-100"
          height="500"
          alt="Big Black Car"
        />
        <div class="carousel-caption d-none d-md-block">
          <p>As melhores limousines de todos os tempos</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <img
          src="https://i.pinimg.com/236x/05/4a/ab/054aab5a53626288b8244101aa4c4455.jpg"
          class="d-block w-100"
          height="500"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <p>Maior conforto para sua viagem</p>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="1000">
        <img
          src="https://i.pinimg.com/236x/80/e4/09/80e409f9a5fee4b50eafe7fdb105c81b.jpg
          "
          class="d-block w-100"
          height="500"
          alt="..."
        />
        <div class="carousel-caption d-none d-md-block">
          <p>Colecione momentos</p>
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
  </div>
</template>
<style>
</style>