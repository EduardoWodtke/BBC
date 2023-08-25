<script setup>

import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCarroById } from '@/_data/carros.js'

const pagamento = ref('')
const route = useRoute()
const carro = ref({})
const parcelas = ref('')
onMounted(() => {
    carro.value = getCarroById(route.params.id)
})
</script>
<template>
    <div class="titulo">
        <h1>Forma de Pagamento</h1>
    </div>
    <div class="selecforma">
        <form action="">
            <div class="form">
                <label for="pagamento">Pagamento por</label><br>
                <input type="radio" v-model="pagamento" value="Pix" /> Pix <br>
                <input type="radio" v-model="pagamento" value="Credito" />Cartão de credito <br>
                <input type="radio" v-model="pagamento" value="Débito" />Cartão de débito <br>
                <input type="radio" v-model="pagamento" value="Boleto" />Boleto <br>
                <input type="radio" v-model="pagamento" value="Dinheiro" />Dinheiro <br>

                <label for="parcelas">Parcelas</label>
                <select v-model="parcelas">
                    <option value="Avista">Avista</option>
                    <option value="II">2x</option>
                    <option value="III">3x</option>
                    <option value="IV">4x</option>
                    <option value="V">5x</option>
                    <option value="VI">6x</option>
                    <option value="VII">7x</option>
                    <option value="VIII">8x</option>
                    <option value="IX">9x</option>
                    <option value="X">10x</option>
                    <option value="XI">11x</option>
                    <option value="XII">12x</option>
                </select>
            </div>
        </form>
    </div>
    <div>
        <h1>{{ carro.nome }}</h1>
    </div>
    <div>
        <h1>R${{ carro.preco }}</h1>
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