<script setup>
import { ref } from 'vue'

const nome = ref('');
const email = ref('');
const senha = ref('');
const confSenha = ref('');
const DataNascimento = ref(0);
const endereco = ref('');
const cidade = ref('');
const estado = ref('');
const hobbies = ref('');
const lingProg = ref([]);
const Bio = ref('');
cartira

const enviar = ref(false)
</script>

<template>
  <form @submit.prevent ="enviar = !enviar">
    <div class="forms">
      <h1>Login</h1>

      <p>Nome: </p>
      <input type="text" v-model="nome" minlength="3" autocomplete="on" placeholder="Digite seu nome" />

      <p>Email:</p>
      <input type="email" v-model="email" minlength="12" placeholder="Informe seu email" autocomplete="on">

      <p>Senha:</p>
      <input type="passowrd" v-model="senha" minlength="6" placeholder="Digite sua senha">

      <p>confirmar Senha:</p>
      <input type="passowrd" v-model="confSenha" minlength="6" placeholder="Confirme sua senha">

      <p>Data de Nascimento:</p>
      <input type="date" v-model="DataNascimento" autocomplete="on">

      <p>Endereço:</p>
      <input type="text" v-model="endereco" minlength="10" placeholder="Informe seu endereço" autocomplete="on">

      <p>Cidade:</p>
      <input type="string" v-model="cidade" minlength="5" placeholder="Informe sua cidade" autocomplete="on">

      <p>estado:</p>
      <select v-model="estado" placeholder="selecione o seu estado" autocomplete="on">
        <option value="PR">Paraná</option>
        <option value="PA">Pará</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="MG">Minas Gerais</option>
        <option value="ES">Espirito Santo</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="AC">Acre</option>
        <option value="RR">Roraima</option>
        <option value="RO">Rondonia</option>
        <option value="AM">Amazonas</option>
        <option value="MA">Maranão</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="TO">Tocantins</option>
        <option value="PB">Paraiba</option>
        <option value="PI">Piauí</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="GO">Goias</option>
        <option value="CE">Ceará</option>
        <option value="BA">Bahia</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="SE">Sergipe</option>
        <option value="PE">Pernanbuco</option>
        <option value="DF">Destrito Federal</option>
      </select>

      <p>hobbies:</p>
      <input type="text" v-model="hobbies" minlength="5" placeholder="Informe o que você gosta de fazer"> <br>

      <label for="lingProg" class=""> Linguagem de Programação</label> <br>
      <input type="checkbox" v-model="lingProg" value="JavaSript" /> JavaSript
      <input type="checkbox" v-model="lingProg" value="Python" /> Python
      <input type="checkbox" v-model="lingProg" value="Java" /> Java
      <input type="checkbox" v-model="lingProg" value="TypeScript" /> TypeScript
      <input type="checkbox" v-model="lingProg" value="PHP" /> PHP
      <input type="checkbox" v-model="lingProg" value="HTML" /> HTML
      <input type="checkbox" v-model="lingProg" value="Outra" /> Outra

      <p style="white-space: pre-line;">Biografia: </p>
      <textarea v-model="texto" rows="5" cols="60" placeholder="Fale um pouco sobre você"/> <br>

      <button type="submit">Enviar</button>
    </div>
  </form>

  <button @click="$router.push({name: 'login'})">Login</button>
</template>