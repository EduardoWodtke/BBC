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
            <h1 class="nomecarro">{{ carro.nome }}</h1>
            <img :src="carro.img" alt=""/>
        </div>
        
        <div class="finalizada">
            <hr>
            <h2>Compra Finalizada </h2>
            <p>Agradecemos Pela Sua Compra no Big Black Cars!</p>
            <p>Aproveite sua Limousine.</p>
            <hr>
            <br>
            <router-link class="botao" to="/loja">Voltar</router-link>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Oswald&display=swap');

p {
    font-size: 25px;
    font-family: 'Oswald';
}

main {
    border: 20px;
    border-style: groove;
    border-color: rgb(0, 0, 0);
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
    column-gap: 100px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    text-align: center;
    border: 20px;
    border-style: groove;
    border-color: rgb(0, 0, 0);
}

.imagemLimo {
    background-color: rgb(30, 30, 30);
    padding: 15px;
    border-radius: 10px;
    border: 10px rgb(255, 255, 255) outset;
    justify-content: center;
    width: 550px;
    box-shadow: rgb(0, 0, 0) 10px 10px 10px 0px;
}

img {
    width: 500px;
    border: 4px;
    border-style: solid;
    border-color: white;
}

h2{
    font-family: 'Bruno Ace SC';
    font-size: 50px;
}

.botao {
  color: white;
  text-decoration: none;
  font-family: 'Bruno Ace SC', cursive;
  font-size: 20px;
  border: 2px;
  border-color: white;
  border-style: groove;
  border-radius: 10px;
  background-color: black;
  transition: 0.7s;
  padding: 10px;
}

.nomecarro {
    font-family: 'Mukta';
    font-size: 35   px;
}
</style>