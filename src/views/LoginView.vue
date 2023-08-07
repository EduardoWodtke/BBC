<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confSenha = ref('')
const dataNascimento = ref(0)
const endereco = ref('')
const rendaMensal = ref('')
const aceitaTermos = ref(false)

const enviar = ref(false)
</script>

<template>
  <div class="main">
    <div class="formulario">
      <form @submit.prevent="enviar = !enviar">
        <div class="forms">
          <h1>Login</h1>

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
            type="passowrd"
            v-model.trim="senha"
            minlength="6"
            placeholder="Digite sua senha"
            required
          />

          <p>confirmar Senha:</p>
          <input
            type="passowrd"
            v-model.trim="confSenha"
            minlength="6"
            placeholder="Confirme sua senha"
            required
          />

          <p>Data de Nascimento:</p>
          <input type="date" v-model="dataNascimento" autocomplete="on" required />

          <p>Endereço:</p>
          <input
            type="text"
            v-model.trim="endereco"
            minlength="10"
            placeholder="Informe seu endereço"
            autocomplete="on"
            required
          />

          <p>Renda Mensal:</p>
          <label for="rendaMensal">Renda</label>
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

          <p>Li e aceito os termos</p>
          <label for="aceitaTermos">Aceito os termos</label>
          <input type="checkbox" v-model="aceitaTermos" />
          <br>
          <button type="submit">Enviar</button>
        </div>
      </form>

      <button @click="$router.push({ name: 'login' })">Login</button>
    </div>
  </div>
</template>
<style>
.main{
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-content: center;
  padding: 25px;
}
.formulario{
  border: 5px solid black;
  border-radius: 30px;
  padding: 10px 50px 10px 50px; 
  text-align: center;
  background-color: rgb(217, 217, 217);
}
p {
  padding-top: 5px;
}

input {
  border-radius: 7px;
}

select {
  border-radius: 7px;
}

</style>