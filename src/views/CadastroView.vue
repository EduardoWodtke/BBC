<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confSenha = ref('')
const dataNascimento = ref(0)
const rendaMensal = ref('')
const aceitaTermos = ref(false)

const enviar = ref(false)
</script>

<template>
  <div class="main">
    <div class="formulario">
      <form @submit.prevent="enviar = !enviar">
        <div class="forms">
          <h1>Cadastro</h1>
          <hr />
          <p>Nome:</p>
          <input
            type="text"
            v-model.trim="nome"
            minlength="3"
            autocomplete="on"
            placeholder="Digite seu nome"
            required
          />
          <p>Email:</p>
          <input
            type="email"
            v-model.trim="email"
            minlength="12"
            placeholder="Informe seu email"
            autocomplete="on"
            required
          />
          <p>Senha:</p>
          <input
            type="password"
            v-model.trim="senha"
            minlength="6"
            placeholder="Digite sua senha"
            required
          />
          <p>Confirmar Senha:</p>
          <input
            type="password"
            v-model.trim="confSenha"
            minlength="6"
            placeholder="Confirme sua senha"
            required
          />
          <p>Data de Nascimento:</p>
          <input type="date" v-model="dataNascimento" autocomplete="on" required />

          <p>Renda Mensal:</p>
          <label for="rendaMensal"></label>
          <select v-model="rendaMensal">
            <option value="-">-</option>
            <option value="< R$1.320">até R$1.320</option>
            <option value="R$1.321 - R$5.000">De R$1.320 a R$5.000</option>
            <option value="R$5.001 - R$10.000">De R$5.001 a R$10.000</option>
            <option value="R$10.001 - R$15.000">De $10.001 a R$15.000</option>
            <option value="R$15.001 - R$20.000">De R$15.001 a R$20.000</option>
            <option value="> R$20.001">Acima de R$20.001</option>
          </select>

          <p>Carteira de habilitação:</p>
          <input
            type="file"
            id="avatarField"
            @change="handleFileUpload($event)"
            placeholder="Insira uma foto da sua habiliração"
          />
          <hr />
          <label for="aceitaTermos"
            ><a
              href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV_4mnr1iJB6yRO_TC2DQgy3NBepj84mn5J4sKpEnqHjueRwJQi7vv2WshyX8BC41YleI&usqp=CAU"
              >Li e aceito os termos</a
            ></label
          >
          <br />
          <input type="checkbox" v-model="aceitaTermos" />
          <br />
          <br />
          <router-link class="enviar" to="/"> Entrar
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rajdhani&display=swap');

.main {
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: rgb(220, 220, 220);
  background-image: url('https://d3rbj9hv9lsqcr.cloudfront.net/ai/lpm7y069fiakjkjnwku92ks3an7p_watermark.png');
  background-repeat: no-repeat;
  background-size: 100% 170%;
  border: 20px;
  border-style: groove;
  border-color: black;
}

.formulario {
  border: 7px solid rgb(0, 0, 0);
  border-radius: 20px;
  border-style: groove;
  padding: 10px 50px 10px 50px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  box-shadow: 1px 1px 20px black;
  font-family: 'Bebas Neue', sans-serif;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
}

p {
  padding-top: 5px;
  font-size: 18px;
  margin-top: 5px;
  font-family: 'Bebas Neue', sans-serif;
}

input {
  border-radius: 7px;
  text-align: center;
  font-family: 'Play', sans-serif;
}

select {
  border-radius: 7px;
}

.enviar {
  padding: 10px;
  margin-bottom: 1000000000000000000000000000000px !important;
  font-weight: bold;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: 'Play', sans-serif;
  border-color: rgb(230, 230, 230);
  border-style: groove;
  text-decoration: none;
}

h1 {
  font-size: 35px;
  font-family: 'Bruno Ace SC', cursive;
  margin-top: 7px;
}
</style>
