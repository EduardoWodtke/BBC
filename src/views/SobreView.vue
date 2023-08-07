<script setup></script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="..." alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="..." alt="Third slide" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div>
    <div>
      <h1>E la vamos nós...</h1>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium numquam
        odit, quod saepe officia, qui delectus quidem illum fuga dolorem maiores minima atque
        dignissimos blanditiis doloribus dolor asperiores! Quia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Dolorem delectus incidunt cupiditate nostrum optio error
        autem. Asperiores illum nesciunt sint deserunt. Eos facilis soluta nisi, neque libero minus
        distinctio enim!
      </p>
    </div>
  </div>
  <h1>Sobre Nós</h1>
  <button @click="$router.push({ name: 'sobre' })">Sobre nós</button>
</template>
