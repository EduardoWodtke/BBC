<script setup></script>

<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100"
          src="https://static.vecteezy.com/ti/vetor-gratis/t2/7679688-limusine-na-cerimonia-de-casamento-com-fotos-de-carro-homens-e-mulheres-vestindo-vestidos-de-casado-em-ilustracao-de-cartoes-planos-vetor.jpg"
          alt="First slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100"
          src="https://static.vecteezy.com/ti/vetor-gratis/t2/7679693-vip-limousine-carpet-red-carpet-for-celebrity-superstar-walk-with-night-city-scape-view-in-flat-cartoon-illustration-vetor.jpg"
          alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100"
          src="https://static.vecteezy.com/ti/vetor-gratis/t2/7679686-vip-limousine-carpet-red-carpet-for-celebrity-superstar-walk-with-night-city-scape-view-in-flat-cartoon-illustration-vetor.jpg"
          alt="Third slide" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  <div>
    <div>
      <h1>E la vamos nós...</h1>
    </div>
    <div>
      <p>
        Bem-vindo ao emocionante universo do projeto "Big Black Cars" (BBC). Somos uma iniciativa dedicada a redefinir a
        experiência de locação de limusines pretas através da nossa plataforma digital de última geração, carinhosamente
        chamada de Hackathon.

        Nossa missão é criar momentos memoráveis, oferecendo um serviço de locação de limusines que combina eficiência,
        elegância e exclusividade. Nosso foco é proporcionar aos nossos clientes uma jornada personalizada e eficiente na
        reserva de limusines, elevando a experiência a um patamar superior.

        Nosso segredo? A convergência entre os princípios de desenvolvimento web e as técnicas de projeto de software que
        alimentam nosso website moderno e funcional. Isso nos permite criar uma aplicação intuitiva e segura, que torna a
        reserva de limusines tão empolgante quanto o próprio passeio.

        Além disso, implementamos um sistema integrado que abrange todas as etapas do processo de locação, desde o
        primeiro cadastro dos clientes até a gestão cuidadosa das reservas e detalhes da nossa impressionante frota de
        limusines. No BBC, estamos comprometidos não apenas em fornecer um serviço excepcional, mas também em criar uma
        jornada única e memorável.

        O Hackathon é mais do que um nome, é um reflexo da nossa abordagem inovadora. Aqui, unimos conhecimentos de
        diversas disciplinas para criar algo verdadeiramente especial. Este é um espaço onde as ideias se transformam em
      realidade e as habilidades empreendedoras encontram seu terreno fértil. Nosso objetivo é claro: desenvolver um
      projeto sólido e inovador no mercado de aluguel de limusines.

      Seja parte da nossa jornada enquanto redefinimos o luxo, a conveniência e a sofisticação na locação de limusines.
      Junte-se ao Big Black Cars e embarque em uma experiência que transcende a simples locação, tornando cada trajeto
      uma celebração única.
    </p>
  </div>
</div>
<h1>Sobre Nós</h1>
<button @click="$router.push({ name: 'sobre' })">Sobre nós</button></template>
