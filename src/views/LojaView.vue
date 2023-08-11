<script setup>
import { ref } from 'vue'

const carros = ref([
  {
    id: 1,
    nome: '',
    quantidade: 0,
    preco: 0,
    img: 'https://i.pinimg.com/564x/fd/59/69/fd596900a6cbf0943fd4862edc208a13.jpg'
  },
  {
    id: 2,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkinglimousines.com.br%2Ffotos.asp%3Fid%3D2&psig=AOvVaw1zsoW7kCOHQ_7eOOmuSjl4&ust=1691863180346000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID189CX1YADFQAAAAAdAAAAABAd'
  },
  {
    id: 3,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 4,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 5,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 6,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 7,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 8,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  },
  {
    id: 9,
    nome: '',
    quantidade: 0,
    preco: 0,
    img:''
  }
])
</script>

<template>
  <div class="row">
      <div v-for="(carro) in carros" :key="carro.id" class="tema col-3">
        <h2>{{ carro.id }} - {{ carro.nome }}</h2>
        <img :src="carro.img" alt="carro.img" />
        <br />
        <h6>Preço: {{ carro.preco }} BRL</h6>
        <button type="button" @click="addCarrinho(carro)" class="button">Alugar</button>
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
button {
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
}
</style>