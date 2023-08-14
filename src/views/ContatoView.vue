<script setup></script>

<template>
  <div class="contato">

    <h1>contato | Ajuda?</h1>
    <p>

      zap do vitin: 6969696969 <br>
      face do alisa : cum slayer <br>
      email meu: cp@gmail.com <br>
      git da eve: hevilym <br>
      insta do eduarado: cum eater <br>
      mine da maria : jenifger

    </p>

  </div>

    <div>

      <form action="">

        <h1>Login</h1>
          <hr>
          <p>Email:</p>
          <input
            type="email"
            v-model.trim="email"
            minlength="12"
            placeholder="Informe seu email"
            autocomplete="on"
            required
          />

          <p>Senha:</p>
          <input
            type="passowrd"
            v-model.trim="senha"
            minlength="6"
            placeholder="Digite sua senha"
            required
          />

      </form>

    </div>
  
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

h1 {

  font-family: 'Bruno Ace SC', cursive;

}


p {
  font-size: 20px;
}
.contato {

  text-align: center;
  font-family: 'Play', sans-serif;

}

form {
  border: black 5px solid;
  background-color: gray;
  border-radius: 100px;
  text-align: center;
}

</style>