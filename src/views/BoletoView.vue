<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

import { getCarroById } from '@/_data/carros.js'

const carro = ref({})

onMounted(() => {
  carro.value = getCarroById(route.params.id)
})
</script>

<template>
  <main class="corpo">
    <div class="imagemLimo">
      <h1 class="nomebrabo">{{ carro.nome }}</h1>
      <hr>
      <img :src="carro.img" alt="" />
      <div class="preco">
      <h1>R${{ carro.preco }}</h1>
    </div>
    </div>

    <div class="infos">
      <h1>Boleto</h1>
      <hr />
      <img class="" src="../components/Imagens/Boleto-Bancario.png" alt="">
    </div>
    <div></div>
    <router-link class="botao" to="/">Finalizar</router-link>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');

h1 {
    font-family: 'Bruno Ace SC', cursive;
    color: white;
}

.nomebrabo {
    font-family: 'Play', sans-serif;
    color: white;
    font-size: 30px;
}

.corpo {
  display: grid;
  padding-top: 100px;
  padding-left: 200px;
  padding-bottom: 100px;
  padding-right: 200px;
  grid-template-columns: auto auto;
  gap: 100px;
  justify-content: center;
  text-align: center;
  border: 20px;
  border-style: groove;
  border-color: rgb(0, 0, 0);
}

.imagemLimo {
  background-color: rgb(30, 30, 30);
  padding: 50px;
  border-radius: 10px;
  border: 10px rgb(255, 255, 255) outset;
  justify-content: center;
  width: 500px;
  box-shadow: rgb(0, 0, 0) 10px 10px 10px 0px;
}

img {
  width: 400px;
  border-radius: 10px;
}

.infos {
  max-width: 500px;
  border: 5px black groove;
  border-radius: 10px;
  padding: 30px;
  background-color: rgb(99, 99, 99);
  box-shadow: 10px 10px 0px 0px;
  font-family: 'Oswald', sans-serif;
  font-size: 30px;
  color: white;
}

.botao:hover {
  background-color: #fff;
  color: white;
  border-color: black;
  background-color: black;
}

.botao {
  color: black;
  text-decoration: none;
  font-family: 'Bruno Ace SC', cursive;
  font-size: 30px;
  border: 2px;
  padding: 15px;
  border-color: black;
  border-style: groove;
  margin-top: 15px;
  border-radius: 10px;
  background-color: white;
}

</style>
