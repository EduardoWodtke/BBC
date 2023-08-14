<script setup></script>

<template>
  <div class="contato">

    <h1>Contato</h1>
    <p class="p">

      zap do vitin: 6969696969 <br>
      face do alisa : cum slayer <br>
      email meu: cp@gmail.com <br>
      git da eve: hevilym <br>
      insta do eduarado: cum eater <br>
      mine da maria : jenifger

    </p>

  </div>

    <h1>Contate-nos</h1>

      <form action="">

        <h2>Precisa de ajuda?</h2>

        <hr>

        <p>

          Nome

        </p>

        <input type="text" v-model="name" placeholder="Nome">

        <br>

        <p>

          Email

        </p>

        <input type="email" v-model="email" placeholder="BBC@bbc.com">

        <br>

        <p>

          Ajuda no que?

        </p>

        <textarea v-model="texto" cols="30"></textarea>
        
        <br>

      </form>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

h1,h2 {

  font-family: 'Bruno Ace SC', cursive;

}


.p {
  font-size: 20px;
  font-family: 'Play', sans-serif;
}
.contato {

  text-align: center;
  font-family: 'Play', sans-serif;

}

form {
  border: black 5px solid;
  background-color: rgb(206, 206, 206);
  border-radius: 50px;
  text-align: center;
  width: 500px;
  padding: 20px;
}

p {

  font-size: 15px;
  font-family: 'Play', sans-serif;
}
</style>