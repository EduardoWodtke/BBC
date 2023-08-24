<script setup></script>

<template>
  <footer>
    <div class="container-footer">
      <div class="row-footer">
        <div class="footer-col">
          <h4>Empresa</h4>
          <ul>
            <li><a href="#" class="palavraFot"> Quem somos </a></li>
            <li><a href="" class="palavraFot"> nossos serviços </a></li>
            <li><a href="" class="palavraFot"> política de privacidade </a></li>
            <li><a href="" class="palavraFot"> programa de afiliados</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Obter ajuda</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Transporte</a></li>
            <li><a href="#">devoluções</a></li>
            <li><a href="#">Status De Pedido</a></li>
            <li><a href="#">Opções De Pagamento</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Loja online</h4>
          <ul>
            <li><a href="#">Limousines Black</a></li>
            <li><a href="#">Limousines Lindas</a></li>
            <li><a href="#">Limousines Luxuosas</a></li>
            <li><a href="#">Endereço</a></li>
          </ul>
        </div>
        <div class="medias-socias">
          <a href=""
            ><i><font-awesome-icon icon="facebook" /></i
          ></a>
          <a href="#"> <i class="fa fa-instagram"></i> </a>
          <a href="#"> <i class="fa fa-twitter"></i> </a>
          <a href="#"> <i class="fa fa-linkedin"></i> </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Mukta&family=Oswald&display=swap');

footer {
  background-color: #000000;
  /* height: 200px; */
  /* padding: 50px 0; */
  margin-bottom: 0;
  height: 400px;
}
.container-footer {
  max-width: 1400px;  
  height: 100%;

  padding: 0 4%;
  margin: auto;  
}
.row-footer {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
}
.footer-col ul {
  list-style: none;
}
.footer-col ul li {
  margin: 10px 0;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: white;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
  font-family: 'Mukta', sans-serif;
  font-size: 20px;
}
.footer-col ul li a:hover {
  color: #cecdcd;
  padding-left: 10px;
}
.footer-col .medias-socias {
  margin-top: 30px;
}
.footer-col .medias-socias a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin: 0 10px 10px 0;
  text-decoration: none;
  border-radius: 50%;
  color: white;
  border: 1px solid white;
  transition: all 0.5s ease;
}
.footer-col .medias-socias a i {
  font-size: 20px;
}

.footer-col .medias-socias a:hover {
  color: #415aca;
  background-color: white;
}
.footer-col .form-sub input {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  outline: none;
  border: 1px solid white;
  color: white;
  background-color: #000000;
}
.footer-col .form-sub input::placeholder {
  color: white;
}
.footer-col .form-sub button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  font-size: 17px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #415aca;
  border-radius: 3px;
  font-weight: bold;
  background-color: white;
}
/* Responsivo */
@media (max-width: 800px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 600px) {
  .footer-col {
    width: 100%;
  }
}
</style>
