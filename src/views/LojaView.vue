<script setup>
import { carros } from '@/_data/carros';
</script>

<template>
  <div class="row">
      <div v-for="(carro) in carros" :key="carro.id" class="tema col-3">
        <h2>{{ carro.id }} - {{ carro.nome }}</h2>
        <img :src="carro.img" height="220" alt="carro.img" />
        <br />
        <h6>Preço: R${{ carro.preco }}</h6>
        <router-link class="button" :to="`/alugar/${carro.id}`">Alugar</router-link>
      </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
.tema {
  background-color: rgb(0, 0, 0);
  padding: 30px 30px;
  color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 26%;
  margin: 0 auto;
  margin-top: 2%;
  margin-bottom: 2%;
  border-style:outset;
  box-shadow: 8px 8px 8px black;
  font-family: 'Bruno Ace SC', cursive;
}
.button {
  font-weight: bold;
  border-radius: 4px;
  color: white;
  background-color: black;
  padding: 5px 5px;
  margin: 10px 10px 10px 10px;
  cursor: pointer;
  font-family: 'Bruno Ace SC', cursive;
  border-color: black;
  border-style:groove;
  text-decoration: none;
  transition: 0.7s;
}

.button:hover {
  background: white;
  color: black;
  transition: 0.7s;
}

.row {
  border: 20px;
  border-color: black;
  border-style: groove;
}
</style>