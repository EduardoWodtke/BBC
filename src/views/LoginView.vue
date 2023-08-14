<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')
const enviar = ref(false)
</script>

<template>
  <div class="formulario">
    <form @submit.prevent="enviar = !enviar">
      <div class="forms">
        <h1>Login</h1>
        <hr>
        <p>Email:</p>
        <input type="email" v-model.trim="email" minlength="12" placeholder="Informe seu email" autocomplete="on"
          required />

        <p>Senha:</p>
        <input type="passowrd" v-model.trim="senha" minlength="6" placeholder="Digite sua senha" required />
      </div>
      <button class="loginbtn" @click="$router.push({ name: 'login' })">Entrar</button>
    </form>
    <hr>
    <p>Não possui cadastro?</p>
    <router-link class="cadbtn" to="/cadastro">Cadastre-se!</router-link>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');


.formulario {
  border: 7px solid rgb(0, 0, 0);
  border-radius: 20px;
  border-style: outset;
  padding: 10px 50px 10px 50px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 20px black;
  font-family: 'Play', sans-serif;
  margin-top: 30px;
  margin-bottom: 30px;
}

p {
  padding-top: 5px;
}

input {
  border-radius: 3px;
  text-align: center;
}

select {
  border-radius: 7px;
}

.loginbtn {
  margin-top: 17px;
  padding: 8px;
  font-weight: bold;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: 'Play', sans-serif;
  border-color: rgb(230, 230, 230);
  border-style: groove;
}

.cadbtn {
  margin-top: 17px;
  padding: 8px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: 'Play', sans-serif;
  text-decoration: none;
}
</style>