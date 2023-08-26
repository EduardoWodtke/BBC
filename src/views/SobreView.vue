<script setup></script>

<template>
  <div>
    <div class="sobre">
      <img src="../components/Imagens/BBC-Slide.jpg" altfile="..." /> 
      <hr>
      <h1>BIG BLACK CARS</h1>
      <hr />
      <p>
        O projeto "Big Black Cars" (BBC) é uma iniciativa que visa transformar o aluguel de
        limousines pretas por meio de uma plataforma digital avançada chamada Hackathon. O objetivo é
        oferecer uma experiência de reserva de limousines personalizada e eficiente, combinando
        elegância e exclusividade. A plataforma integra desenvolvimento web e técnicas de projeto de
        software para criar uma aplicação intuitiva e segura. O sistema abrange desde o cadastro dos
        clientes até a gestão das reservas e detalhes da frota de limousines. O BBC busca redefinir o
        luxo, a conveniência e a sofisticação na locação de limousines, tornando cada trajeto uma
        celebração única e memorável. <br />
      </p>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
main {
  background-color: (220, 220, 220);
}

p {
  font-size: 25px;
  text-align: justify;
  font-family: 'Bruno Ace SC', cursive;
  padding: 10px;
  max-width: 1000px;
  color: white;
}

h1 {
  font-size: 40px;
  text-align: center;
  font-family: 'Bruno Ace SC', cursive;
  color: white
  ;
}
img {
  height: 550px;
  width: 100%;
  
}

.sobre {
  display: grid;
  justify-content:center;
  border: 20px;
  border-color: black;
  border-style: groove;
}
</style>
