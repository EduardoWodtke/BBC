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

<div class="titulo">
    
    <h1>
        
        Forma de Pagamento
        
    </h1>
    

</div>

<div class="selecforma">
 
    <form action="">

        <label for="pagamento">Pagamento por</label>
        <input type="radio" v-model="pagamento" value="pix" /> Pix
        <input type="radio" v-model="pagamento" value="a" /> a
        <input type="radio" v-model="pagamento" value="a1" /> a1

    </form>

</div>

<div>

    <h1>

        {{ carro.nome }}
    
    </h1>

</div>

<div>

    <h1>

        R${{ carro.preco }}
    
    </h1>

</div>

</template>

<style scoped>

.titulo {
    color: white;
}

.selecforma {
    color: white;
}

</style>