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

const ativoPix = ref(false)
const ativoCC = ref(false)
</script>

<template>
    <main>
        <div class="selecforma">
            <div class="caro">
                <div class="imgcaro">
                    <h1 class="nomecaro">{{ carro.nome }}</h1>
                    <img class="caro2" :src="carro.img" alt="aa" />
                    <h1 class="precocaro">R${{ carro.preco }}</h1>
                </div>
            </div>
            <form @submit.prevent="" action="">
                <div class="form">
                    <div class="titulo">
                        <h1>Forma de Pagamento</h1>
                    </div>
                    <label for="pagamento">Pagamento por</label><br>
                    <div class="pagamento">

                        <button class="botao" @click="ativoPix = !ativoPix" value="Pix">Pix</button>
                        <div v-if="ativoPix">
                            <img class="qr" src="../components/Imagens/download.jpg" alt="">
                        </div>

                        <button @click="ativoCC = !ativoCC" value="CartãoCredito">Cartão de Credito</button>
                        <div v-if="ativoCC">
                            <h1>Informações do Cartão de Credito</h1>
                            <p>Numeros do Cartão</p>
                            <input type="text" v-model.trim="nome" minlength="12" autocomplete="on"
                                placeholder="Informe numero do car." required />
                            <p>Codigo de Segurança</p>
                            <input type="email" v-model.trim="email" minlength="3" placeholder="Informe o codigo de seg."
                                autocomplete="on" required />
                            <p>Nome Completo</p>
                            <input type="text" v-model.trim="senha" minlength="32" placeholder="Informe nome com."
                                required />
                            <p>CPF</p>
                            <input type="text" v-model.trim="confSenha" minlength="11" placeholder="Informe o CPF"
                                requiredn />
                        </div>
                        <div class="parcela">
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
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Oswald&display=swap');

main {
    border: 25px;
    border-style: groove;
    border-color: black;
}

.form {
    max-width: 500px;
    border: 5px black groove;
    border-radius: 10px;
    padding: 30px;
    background-color: rgb(99, 99, 99);
    box-shadow: 10px 10px 0px 0px;
    font-family: 'Oswald', sans-serif;
    font-size: 30px;
    color: white;
    margin-top: 100px;
    margin-bottom: 100px;
}

.titulo {
    color: white;
    font-size: 40px;
    font-family: 'Bruno Ace SC', sans-serif;
    text-align: center;
    margin-top: 18px;
}

.selecforma {
    color: white;
    font-size: 25px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    text-align: center;
}

.caro {
    color: white;
}

.parcela {
    font-size: 25px;
}

.pagamento {
    font-family: 'Oswald', monospace;
}

.qr {
    width: 300px;
}

.imgcaro {
    background-color: rgb(30, 30, 30);
    padding: 50px;
    border-radius: 10px;
    border: 10px rgb(255, 255, 255) outset;
    justify-content: center;
    width: 500px;
    box-shadow: rgb(0, 0, 0) 10px 10px 10px 0px;
    display: grid;
    grid-template-columns: auto;
    align-content: space-evenly;
    margin-top: 100px;
    margin-bottom: 100px;
}

.caro2 {
    width: 320px;
    border: 2px;
    border-style: solid;
    border-color: white;
    border-radius: 10px;
}

.precocaro {
    margin-top: 15px;
}

.nomecaro {
    margin-top: 15px;
}

.botao {
    color: white;
    text-decoration: none;
    font-family: 'Bruno Ace SC', cursive;
    font-size: 30px;
    border: 2px;
    padding: 15px;
    border-color: white;
    border-style: groove;
    margin-top: 15px;
    border-radius: 10px;
    background-color: black;
}
</style>