<script setup></script>

<template>

  <div class="corpo">

    <h1>Contato</h1>

    <div class="contato form">
      
    <p class="p">
      
      Telefone: +55 (019) 96946-6051 <br>
      Email: BigBlackCarsBBC@gmail.com <br>
      Instagram: @BBCOfc <br>
      endereço: Enzo Marginal, 12715 - Orsk, Campinas - SP, 12245-903 <br>
      
    </p>

  </div>
  
  <h1>Contate-nos</h1>

  <div class="formu">
    
    <form action="" class="form">
      
        <h2>Precisa de ajuda?</h2>
        
        <hr>
        
        <p>
          
          Nome
          
        </p>

        <input type="text" v-model="name" placeholder="Nome">
        
        <br>
        
        <p>
          
          Email
          
        </p>
        
        <input type="email" v-model="email" placeholder="BBC@bbc.com">
        
        <br>
        
        <p>
          
          Ajuda no que?
          
        </p>

        <textarea v-model="texto" cols="30"></textarea>
        
        <br>
        
      </form>
    </div>
      
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bruno+Ace+SC&display=swap');

h1,h2 {

  font-family: 'Bruno Ace SC', cursive;

}


.p {
  font-size: 20px;
  font-family: 'Play', sans-serif;
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
}

.formu {
  padding: 30px;
}
</style>