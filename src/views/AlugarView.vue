<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

import { getCarroById} from '@/_data/carros.js'

const carro = ref({})

onMounted(() => {
    carro.value = getCarroById(route.params.id)
})

</script>

<template>
  <main class="corpo">  
    <div class="imagemLimo">
        <img :src="carro.img" alt="">
    </div>
    
    <div class="infos">

        <h1>Informações</h1>

        <p>
           {{carro.info}}
        </p>

    </div>

    <div class="preco">

        <h1>
            R${{carro.preco}}
        </h1>

    </div>


    <div class="botaoalug">

        <button>
            <h1>Alugar</h1>
        </button>

    </div>

  </main>
</template>

<style scoped>

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

}

.imagemLimo {
    background-color: black;
    padding: 50px;
    border-radius: 50px;
    border: 5px gray solid;
    justify-content: center;
    width: 500px;
    box-shadow: black 10px 10px 10px 0px;
}

img {
    width: 400px;
}

.infos {
    max-width: 500px;
}

button {
    background-color: black;
    color: white;
    border: 3px gray solid;
    border-radius: 20px;
}

button:hover {
    transition: 0.7s;
    background-color: white;
    color: black;
}

</style>
