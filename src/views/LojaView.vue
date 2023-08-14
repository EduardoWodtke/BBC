<script setup>
import { ref } from 'vue'

const carros = ref([
  {
    id: 1,
    nome: 'BABY BENTLEY',
    quantidade: 0,
    preco: 2000.00,
    img: 'https://www.citylimos.info/wp-content/uploads/2012/02/baby-bentley1.jpg'
  },
  {
    id: 2,
    nome: 'NOVELTY',
    quantidade: 0,
    preco: 750.00,
    img:'https://images.noticiasautomotivas.com.br/img/f/limousine-9.jpg'
  },
  {
    id: 3,
    nome: 'STRETCH',
    quantidade: 0,
    preco: 830.00,
    img:'https://aluxurylimo.com/wp-content/uploads/2021/03/Lincoln_Stretch_Interior_2.jpg'
  },
  {
    id: 4,
    nome: 'CHRYSLER 300C',
    quantidade: 0,
    preco: 900.00,
    img:'https://affinitylimousines.com.au/wp-content/uploads/photo-gallery/Limo/Affinity%20Limousines%20-%20Chrysler%20Limo%20Hire%20Melbourne%20(28).jpg'
  },
  {
    id: 5,
    nome: 'LINCOLN TOWN',
    quantidade: 0,
    preco: 1000.00,
    img:'https://www.chicagomotorcars.com/imagetag/5514/main/l/Used-2007-Lincoln-Town-Car-Executive-STRETCH-LIMOUSINE.jpg'
  },
  {
    id: 6,
    nome: 'HUMMER',
    quantidade: 0,
    preco: 680.00,
    img:'https://www.kinglimousines.com.br/gerenciar/anexos/paginas/8/hummerb_2.jpg'
  },
  {
    id: 7,
    nome: 'CADILLAC',
    quantidade: 0,
    preco: 950.00,
    img:'https://exclusivalimusine.com.br/wp-content/uploads/2021/04/Limo-Cadilac-preta.jpg'
  },
  {
    id: 8,
    nome: 'GRAND BLAZER',
    quantidade: 0,
    preco: 750.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2017/09/image.png'
  },
  {
    id: 9,
    nome: 'LIMOUSINE PRETA',
    quantidade: 0,
    preco: 550.00,
    img:'https://www.gattilimousines.com.br/novo/wp-content/uploads/2015/06/IMG_4462.jpg'
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