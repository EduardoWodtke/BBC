<script setup></script>

<template>
  <div class="corpo">
    <div class="contatos">

      <h1>Contato</h1>
      
      <div class="contato form">
        <p class="p">
          Telefone: +55 (019) 96946-6051 <br />
          Email: BigBlackCarsBBC@gmail.com <br />
          Instagram: @BBCOfc <br />
          Endereço: Enzo Marginal, 12715 - Orsk, Campinas - SP, 12245-903 <br />
        </p>
      </div>
    </div>

    <div class="contate">

      <h1>Contate-nos</h1>
      
      <div class="formu">
        <form action="" class="form">
          <h2>Precisa de ajuda?</h2>
          
          <hr />
          
          <p>Nome</p>
          
          <input type="text" v-model="name" placeholder="Nome" />
          
          <br />
          
        <p>Email</p>

        <input type="email" v-model="email" placeholder="BBC@bbc.com" />
        
        <br />
        
        <p>Ajuda no que?</p>
        
        <textarea v-model="texto" cols="30"></textarea>
        
        <br />
      </form>
    </div>
  </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

h1,
h2 {
  font-family: 'Bruno Ace SC', cursive;
  margin-top: 20px;
  text-align: center;
}

.p {
  font-size: 20px;
  margin-top: 10px ;
  font-family: 'Play', sans-serif;
  justify-content: center;
  align-items: center;
  text-align: center;
}

input{
  justify-content: center;
  align-items: center;
  text-align: center;
}
.contato {
  text-align: center;
  font-family: 'Play', sans-serif;
  padding: 10px;
  
}

.form {
  border: black 5px solid;
  background-color: rgb(206, 206, 206);
  border-radius: 50px;
  text-align: center;
  width: 500px;
  padding: 30px;
  box-shadow: 10px 10px 10px 0px;
}

p {
  font-size: 15px;
  font-family: 'Play', sans-serif;
}

.corpo {
  display: grid;
  justify-items: center;
  grid-template-columns: 500px 500px;
  padding: 50px;
  border: 20px;
  border-color: black;
  border-style: groove;
}

.formu {
  padding: 30px;
}

.contatos {
  margin-top: 50px;
  margin-left: 200px;
  justify-content: center;
}

.contate {
  margin-left: 900px;
  justify-content: center;
}
</style>
